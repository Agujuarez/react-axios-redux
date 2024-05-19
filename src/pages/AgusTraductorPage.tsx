import React, { useState } from 'react';

const AgusTraductorPage: React.FC = () => {
  const [text, setText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Traductor</h1>
      <p>Enter text to translate:</p>
      <input 
        type="text" 
        value={text} 
        onChange={handleInputChange} 
        placeholder="Texto en español" 
      />
      <p>Texto en español: {text}</p>
    </div>
  );
};

export default AgusTraductorPage;
