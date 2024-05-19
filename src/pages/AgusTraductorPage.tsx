import React, { useState } from 'react';
import {traductor} from "../services/traductor"

const AgusTraductorPage: React.FC = () => {
  const [texto, setTexto] = useState('');
  const [text, setText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTexto(event.target.value);
  };

  const handleTranslate = async () => {
    const x:string = await traductor(texto)
    setText(x);
  };

  return (
    <div>
      <h1>Traductor</h1>
      <p>Enter text to translate:</p>
      <input 
        type="text" 
        value={texto} 
        onChange={handleInputChange} 
        placeholder="Texto en español" 
      />
      <button onClick={handleTranslate}>Translate</button>
      <p>Texto en español: {texto}</p>
      <p>Texto en ingles: {text}</p>
    </div>
  );
};

export default AgusTraductorPage;
