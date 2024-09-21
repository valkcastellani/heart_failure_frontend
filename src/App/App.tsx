import React from 'react';
import Paciente from '../Paciente/Paciente';
import './App.css';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header nomeClinica='Classificador de Possibilidade de Insuficiência Cardíaca' />
      <main>
        <Paciente />
      </main>
    </div>
  );
}

export default App;
