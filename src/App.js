import React, { useState } from "react";
import "./App.css";
import Translate from "./Translate";

function App() {
  const [showTranslate, setShowTranslate] = useState(false);

  const handleForwardClick = () => {
    setShowTranslate(true);
  };
  return (
    <div className="App">
      {!showTranslate ? (
        <div>
          <header className="App-header">
            <div className="App-navbar">
              <span>SPARK MARKET RESEARCH</span>
              <div className="App-navbar-dots">
                <span>●</span>
                <span>●</span>
                <span>●</span>
              </div>
            </div>
          </header>
          <main className="App-body">
            <h1>SPARK AI</h1>
            <p className="App-subtitle">Effortless Setup, powerful Results</p>
            <p className="App-description">
              Struggling to analyze mountains of conversation data? SPARK
              listens in, extracts key details (topics, names, dates), and
              organizes it for research & data mining. Uncover trends, gain
              insights, and supercharge your research. Try it now!
            </p>
            <div className="App-file-upload">
              <label>Select the File to Transcribe</label>
              <button>Select Files</button>
              <button disabled>Upload</button>
            </div>
            <div className="App-prompt">
              <label>
                Mention keywords to describe the audio file & mention some focus
                areas
              </label>
              <input type="text" placeholder="Prompt" />
              <button onClick={handleForwardClick}>→</button>
            </div>
          </main>
          <footer className="App-footer">
            © 2024 Novolytics | All Rights Reserved
          </footer>
        </div>
      ) : (
        <Translate /> // Render Translate component when showTranslate is true
      )}
    </div>
  );
}

export default App;
