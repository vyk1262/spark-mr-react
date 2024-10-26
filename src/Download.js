import React from "react";
import "./Download.css";

function Download() {
  return (
    <div className="Download">
      <header className="Download-header">
        <div className="Download-navbar">
          <button className="back-button">←</button>
          <span>Download Script</span>
        </div>
        <div className="Download-content">
          <button className="question-button">
            Move to Question and Answers Page
          </button>
          <p>
            Select the file and toggle between transcription and translation to
            download as a text file
          </p>
          <div className="file-dropdown">
            <select>
              <option value="test-12.mp3">test-12.mp3</option>
            </select>
          </div>
          <div className="toggle-buttons">
            <button className="toggle-button">Translation</button>
            <button className="toggle-button selected">Diarization</button>
          </div>
          <button className="download-button">Download as Text File</button>
          <div className="text-output">
            <p>
              Speaker: NaN
              <br />
              Start Time: 0<br />
              End Time: 2<br />
              Text: Hello?
            </p>
            <p>
              Speaker: SPEAKER_00
              <br />
              Start Time: 2<br />
              End Time: 4<br />
              Text: Hello.
            </p>
            <p>
              Speaker: SPEAKER_00
              <br />
              Start Time: 4<br />
              End Time: 6<br />
              Text: Hi Sir. My name is Azhar.
            </p>
          </div>
        </div>
      </header>
      <footer className="Download-footer">
        © 2024 Novolytics | All Rights Reserved
      </footer>
    </div>
  );
}

export default Download;
