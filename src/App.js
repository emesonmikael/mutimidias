import React, { useState } from 'react';
import Playlist from './Playlist';
import Player from './Player';

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      parseM3U(content);
    };

    reader.readAsText(file);
  };

  const parseM3U = (content) => {
    const lines = content.split('\n');
    const items = [];
    let currentItem = {};

    lines.forEach((line) => {
      if (line.startsWith('#EXTINF')) {
        const tvgLogoMatch = line.match(/tvg-logo="(.*?)"/);
        const descriptionMatch = line.match(/,(.*)$/);
        const logo = tvgLogoMatch ? tvgLogoMatch[1] : '';
        const description = descriptionMatch ? descriptionMatch[1] : 'Sem descrição';
        currentItem = { description, url: '', cover: logo };
      } else if (line.startsWith('http')) {
        currentItem.url = line.trim();
        items.push(currentItem);
        currentItem = {};
      }
    });

    setPlaylist(items);
  };

  return (
    <div className="App">
      <h1>Playlist Player</h1>
      <input type="file" accept=".m3u , .txt" onChange={handleFileUpload} />
      <Playlist items={playlist} onSelectItem={setCurrentItem} />
      {currentItem && <Player src={currentItem.url} />}
    </div>
  );
}

export default App;