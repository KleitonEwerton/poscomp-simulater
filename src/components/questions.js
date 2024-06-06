import React, { useState } from 'react';
import "./questions.css";

function Questions({ questao, index, total }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionChange = (optionKey) => {
    setSelectedOption(optionKey);
    setIsAnswered(true);
  };

  return (
    <div className="radio-input">
      <div className="info">
        <span className="question">{questao.texto}</span>
        <span className="steps">{index}/{total}</span>
      </div>
      {Object.keys(questao.opcoes).map((optionKey) => (
        <div key={optionKey}>
          <input
            type="radio"
            id={`value-${optionKey}-${questao.id}`}
            name={`value-radio-${questao.id}`}
            value={optionKey}
            onChange={() => handleOptionChange(optionKey)}
          />
          <label 
            htmlFor={`value-${optionKey}-${questao.id}`}
            className={
              isAnswered && optionKey === selectedOption
                ? questao.opcoes[optionKey].correta ? "correct" : "incorrect"
                : ""
            }
          >
            {questao.opcoes[optionKey].texto}
          </label>
        </div>
      ))}
      {isAnswered && (
        questao.opcoes[selectedOption].correta ? (
          <span className="result success">Congratulations!</span>
        ) : (
          <span className="result error">Bad answer</span>
        )
      )}
    </div>
  );
}

export default Questions;
