import React, { useState } from "react";
import "./Diarize.css";
import Question from "./Question";

function Diarize() {
  const [showQuestion, setShowQuestion] = useState(false);

  const handleForwardClick = () => {
    setShowQuestion(true);
  };
  return (
    <div className="Diarize">
      {!showQuestion ? (
        <div>
          <header className="Diarize-header">
            <div className="Diarize-navbar">
              <button className="back-button">←</button>
              <span>Diarize</span>
            </div>
          </header>
          <main className="Diarize-body">
            <div className="Diarize-content">
              <div className="Diarize-actions">
                <button className="back-button">←</button>
                <button className="transcribe-button">Transcribe</button>
                <button className="refresh-button" disabled>
                  Refresh
                </button>
                <button className="forward-button" onClick={handleForwardClick}>
                  →
                </button>
              </div>
              <div className="Diarize-file-status">
                <p>File 1: test-12.mp3</p>
                <p>Status: Not started</p>
              </div>
            </div>
          </main>
          <footer className="Diarize-footer">
            © 2024 Novolytics | All Rights Reserved
          </footer>
        </div>
      ) : (
        <Question /> // Render Diarize component when showDiarize is true
      )}
    </div>
  );
}

export default Diarize;
