import React, { useState } from "react";
import "./Question.css";

const Question = () => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([
    {
      question: "what is the theme of the conversation",
      answer:
        "The theme of the conversation is about discussing vehicle options, discounts, and sharing information about different car models. The conversation also involves talking about colors available, features like memory system and touch screen, and details about pricing and discounts offered. The conversation shifts to personal details like where the person lives.",
    },
    {
      question: "summarize in less than 20 words",
      answer:
        "Azhar inquires about X-ray vehicle, discounts, and options available, while discussing color choices and memory system.",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
  };

  return (
    <div className="Question">
      <header className="Question-header">
        <button className="back-button">←</button>
        <h1>Question and Answer</h1>
      </header>
      <main className="Question-body">
        <div className="file-section">
          <div className="file-info">
            <input type="checkbox" checked readOnly />
            <label>test-12.mp3</label>
          </div>
          <span className="load-documents">Load Documents: 1 of 1</span>
        </div>
        <form onSubmit={handleSubmit} className="question-form">
          <label htmlFor="question">Question:</label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question here..."
          />
          <button type="submit" disabled={!question}>
            Submit
          </button>
        </form>
        <div className="answers-section">
          <h2>Answers:</h2>
          {answers.map((qa, index) => (
            <div key={index} className="answer">
              <p>
                <strong>Question:</strong> {qa.question}
              </p>
              <p>
                <strong>Answer:</strong> {qa.answer}
              </p>
            </div>
          ))}
        </div>
        <button className="home-button">Go to Home</button>
      </main>
      <footer className="Question-footer">
        © 2024 Novolytics | All Rights Reserved
      </footer>
    </div>
  );
};

export default Question;
