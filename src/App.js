import "./App.css";
import React, { useState, useEffect } from "react";
import Questions from "./components/questions";
import axios from "axios";

function App() {
  const [questoes, setQuestoes] = useState([]);

  useEffect(() => {
    axios.get("/questoes.json").then((res) => {
      setQuestoes(res.data[0].questoes);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          {questoes.map((questao, index) => (
            <Questions
              key={questao.id}
              questao={questao}
              index={index + 1}
              total={questoes.length}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
