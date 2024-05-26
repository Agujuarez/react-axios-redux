import React, { useState } from 'react';
import { getChuckNorrisJoke } from '../services/chuckNorrisJokes';

const ChuckNorrisPage: React.FC = () => {
  const [joke, setJoke] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getChuckNorrisJoke();
      setJoke(data.value); // Asegúrate de que la respuesta tiene esta estructura
      setLoading(false);
    } catch (err: any) {
      setError(err.message || 'Error fetching joke');
      setLoading(false);
    } finally {
      // Bloquea nuevas solicitudes por un tiempo
      setIsBlocked(true);
      setTimeout(() => setIsBlocked(false), 3000); // Desbloquea después de 3 segundos
    }
  };

  return (
    <div>
      <h1>Chuck Norris Joke</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {joke && <p>{joke}</p>}
      <button onClick={fetchJoke} disabled={isBlocked}>Get Another Joke</button>
    </div>
  );
};

export default ChuckNorrisPage;