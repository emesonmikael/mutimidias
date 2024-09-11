import React from 'react';

const Playlist = ({ items, onSelectItem }) => {
  return (
    <div>
      <h2>Playlist</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => onSelectItem(item)}
            style={{
              cursor: 'pointer',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {item.cover && (
              <img
                src={item.cover}
                alt="Capa"
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
              />
            )}
            <div>
              <strong>{item.description}</strong>
              <p style={{ margin: 0 }}>{item.url}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;