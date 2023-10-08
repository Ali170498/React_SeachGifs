import React, { useState } from 'react';
import './App.css';
import AddCategory from './components/AddCategory';
import DisplayGifs from './components/DisplayGifs';

function App() {
  const [category, setCategory] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <h2>BUSCARDOR DE GIFS </h2>
      <div className="realizado-por">QUISPE CHAVEZ ALISANDRO</div>
      <AddCategory setCategory={setCategory} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <DisplayGifs category={category} />
    </div>
  );
}

export default App;
