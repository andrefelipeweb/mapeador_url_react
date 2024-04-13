const express = require('express');
const axios = require('axios');
const fs = require('fs');
const parseString = require('xml2js').parseString;
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const path = require('path');
const cors = require('cors');

const { eAdmin } = require('./middlewares/auth');

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.rbvdsvb.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectou ao banco!");
    app.listen(port, () => {
      console.log(`Servidor Express está ouvindo na porta ${port}`);
    });
  })
  .catch((err) => console.log(err));

let sitemapUrls = [];

app.get('/analyze', async (req, res) => {
    const url = req.query.url;

    const urlPattern = /^(https?:\/\/)?(www\.)?[a-z0-9\-\.]+\.[a-z]{2,}(\.[a-z]{2,})?$/i;
    if (!urlPattern.test(url)) {
        res.json({ error: 'Por favor, digite uma URL válida no formato correto.' });
        return;
    }

    try {
        if (!(await isUrlAccessible(url))) {
            res.json({ error: 'A URL fornecida não é acessível. Verifique a URL e tente novamente.' });
            return;
        }

        let sitemapUrl = await getRobotsTxt(url);

        if (!sitemapUrl) {
            sitemapUrl = `${url}/sitemap.xml`;
            const sitemapExists = await checkSitemapExists(sitemapUrl);

            if (!sitemapExists) {
                res.json({ error: 'Nenhum sitemap encontrado.' });
                return;
            }
        }

        sitemapUrls = await getSitemapUrls(sitemapUrl);

        if (sitemapUrls.length === 0) {
            res.json({ error: 'Nenhuma URL encontrada no sitemap.' });
            return;
        }

        res.json({ urls: sitemapUrls });
    } catch (error) {
        res.json({ error: 'Ocorreu um erro ao processar a solicitação.' });
    }
});

app.get('/download', (req, res) => {
    if (sitemapUrls.length > 0) {
        const filePath = __dirname + '/public/sitemap.json';
        fs.writeFileSync(filePath, JSON.stringify(sitemapUrls, null, 2));

        res.download(filePath, 'sitemap.json', err => {
            if (err) {
                console.error('Erro ao fazer o download do arquivo:', err);
            }
        });
    } else {
        res.send('Nenhum arquivo disponível para download.');
    }
});

async function isUrlAccessible(url) {
    try {
        const response = await axios.get(url);
        return response.status === 200;
    } catch (error) {
        return false;
    }
}

async function getRobotsTxt(url) {
    const response = await axios.get(`${url}/robots.txt`);
    const lines = response.data.split('\n');
    let sitemapUrl;

    lines.forEach(line => {
        if (line.startsWith('Sitemap:')) {
            sitemapUrl = line.substring(8).trim();
        }
    });

    return sitemapUrl;
}

async function checkSitemapExists(sitemapUrl) {
    try {
        const response = await axios.head(sitemapUrl);
        return response.status === 200;
    } catch (error) {
        return false;
    }
}

async function getSitemapUrls(sitemapUrl) {
    const response = await axios.get(sitemapUrl);
    let urls = [];

    parseString(response.data, (err, result) => {
        if (!err && result.urlset && result.urlset.url) {
            urls = result.urlset.url
                .map(url => url.loc[0])
                .filter(url => !url.includes('/robots'));
        }
    });

    return urls;
}
