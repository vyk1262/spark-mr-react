import React, { useState } from "react";
import "./Translate.css";
import Diarize from "./Diarize";

function Translate() {
  const [showDiarize, setShowDiarize] = useState(false);

  const handleForwardClick = () => {
    setShowDiarize(true);
  };
  return (
    <div className="Translate">
      {!showDiarize ? (
        <div>
          <header className="Translate-header">
            <div className="Translate-navbar">
              <button className="back-button">←</button>
              <span>Translate</span>
            </div>
          </header>
          <main className="Translate-body">
            <div className="Translate-content">
              <div className="Translate-actions">
                <button className="back-button">←</button>
                <button className="transcribe-button">Transcribe</button>
                <button className="refresh-button" disabled>
                  Refresh
                </button>
                <button className="forward-button" onClick={handleForwardClick}>
                  →
                </button>
              </div>
              <div className="Translate-file-status">
                <p>File 1: test-12.mp3</p>
                <p>Status: Not started</p>
              </div>
            </div>
          </main>
          <footer className="Translate-footer">
            © 2024 Novolytics | All Rights Reserved
          </footer>
        </div>
      ) : (
        <Diarize /> // Render Translate component when showTranslate is true
      )}
    </div>
  );
}

export default Translate;
