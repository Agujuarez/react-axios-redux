import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Weather from '../pages/WeatherPage';
import AgusTraductorPage from '../pages/AgusTraductorPage';
import ChuckNorrisPage from '../pages/ChuckNorrisJokes';

const AgusMain: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/traductor" element={<AgusTraductorPage />} />
        <Route path="/ChuckNorrisJokes" element={<ChuckNorrisPage />} />
      </Routes>
    </div>
  );
};

export default AgusMain;
