import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    if (query.trim()) {
      if (query.includes('.') && !query.includes(' ')) {
        window.open(`https://${query}`, '_blank');
      } else {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
      }
    }
  };

  const shortcuts = [
    {
      name: 'YouTube',
      icon: '🎥',
      url: 'https://youtube.com',
      color: 'text-red-500'
    },
    {
      name: 'Gmail',
      icon: '📧',
      url: 'https://gmail.com',
      color: 'text-blue-500'
    },
    {
      name: 'Images',
      icon: '🖼️',
      url: 'https://images.google.com',
      color: 'text-green-500'
    },
    {
      name: 'Web Store',
      icon: '🏪',
      url: 'https://chrome.google.com/webstore',
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="app-container">
      {/* Matrix Rain Background */}
      <div className="matrix-bg">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="matrix-column" style={{ left: `${i * 2}%` }}>
            <div className="matrix-rain"></div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Clock Section */}
        <div className="clock-section">
          <div className="time-display">
            {formatTime(currentTime)}
          </div>
          <div className="location-info">
            Patna, India
          </div>
          <div className="date-info">
            {formatDate(currentTime)}
          </div>
        </div>

        {/* Hacker Title */}
        <div className="hacker-title">
          <h1 className="hacker-text">HACKER</h1>
          <div className="arrow-down">↓</div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-container">
            <div className="google-icon">G</div>
            <input
              type="text"
              name="search"
              placeholder="Search Google or type a URL"
              className="search-input"
              autoComplete="off"
            />
          </div>
        </form>

        {/* Shortcuts */}
        <div className="shortcuts-container">
          {shortcuts.map((shortcut, index) => (
            <a
              key={index}
              href={shortcut.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shortcut-item"
            >
              <div className="shortcut-icon">
                {shortcut.icon}
              </div>
              <div className="shortcut-name">
                {shortcut.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;