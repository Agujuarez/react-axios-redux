const axios = require('axios');

export const traductor = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('q', 'English is hard, but detectably so');

    const options = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    data: encodedParams,
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}