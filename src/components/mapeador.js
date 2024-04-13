import React, { useState } from 'react';
import './mapeador.css'; // Importe o arquivo de estilo

function WebCrawler() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [downloadVisible, setDownloadVisible] = useState(false);
  const [noFileMessageVisible, setNoFileMessageVisible] = useState(false);
  const [noSitemapMessageVisible, setNoSitemapMessageVisible] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    setErrorMessage('');
    setDownloadVisible(false);
    setNoFileMessageVisible(false);
    setNoSitemapMessageVisible(false);

    const urlPattern = /^(https?:\/\/)?(www\.)?[a-z0-9\-\.]+\.[a-z]{2,}(\.[a-z]{2,})?$/i;
    if (!urlPattern.test(url)) {
      setErrorMessage('Por favor, digite uma URL válida no formato correto.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`/analyze?url=${encodeURIComponent(url)}`);
      if (response.ok) {
        const responseData = await response.json();
        setLoading(false);

        if (responseData.urls && responseData.urls.length > 0) {
          setDownloadVisible(true);
        } else {
          setNoFileMessageVisible(true);
        }
      } else {
        setLoading(false);
        setNoSitemapMessageVisible(true);
      }
    } catch (error) {
      console.error('Erro ao analisar a URL:', error);
    }
  };

  const handleDownload = () => {
    window.location.href = '/download';
  };

  return (
    <div id="container">
      <h1>Web Crawler</h1>
      <label htmlFor="urlInput">Digite a URL que deseja analisar:</label>
      <label htmlFor="urlInput">A url deverá respeitar o seguinte formato: <p>https://www.nomedosite...</p></label>
      <input
        type="text"
        id="urlInput"
        placeholder="Digite a URL aqui"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button id="analyzeButton" onClick={handleAnalyze} disabled={loading}>
        {loading ? 'Carregando...' : 'Analisar'}
      </button>
      <button id="downloadButton" onClick={handleDownload} style={{ display: downloadVisible ? 'block' : 'none' }}>
        Baixar Sitemap
      </button>
      <div id="errorMessage" style={{ display: errorMessage ? 'block' : 'none', color: 'red' }}>{errorMessage}</div>
      <div id="noFileMessage" style={{ display: noFileMessageVisible ? 'block' : 'none', color: 'red' }}>Nenhum arquivo disponível para download.</div>
      <div id="noSitemapMessage" style={{ display: noSitemapMessageVisible ? 'block' : 'none', color: 'red' }}>Sitemap não existe.</div>
      {/* ... Outros elementos ... */}
    </div>
  );
}

export default WebCrawler;