import "./App.css";
import React, { useState, useEffect } from "react";
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
        <div>
          <h1>Lista de Questõess </h1>
          {questoes.map((questao) => (

            <div key={questao.id}>
              <h2> 
                <p>{questao.id}</p>
              </h2>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
