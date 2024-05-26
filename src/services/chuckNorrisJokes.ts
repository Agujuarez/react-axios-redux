import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
  headers: {
    accept: 'application/json',
    'X-RapidAPI-Key': 'df50f4346emsh7cda332713a5adap1e4da4jsn02cf935b4546',
    'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
  }
};

const retryRequest = async (options: any, retries: number, delay: number) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        // Wait for the specified delay before retrying
        await new Promise(res => setTimeout(res, delay));
      } else {
        throw error;
      }
    }
  }
  throw new Error('Max retries exceeded');
};

export const getChuckNorrisJoke = async () => {
  return retryRequest(options, 3, 1000); // Retry 3 times with 1 second delay
};