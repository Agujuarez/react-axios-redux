import axios from "axios";

export const traductor = async (texto: string) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("q", texto);
  encodedParams.set("target", "en");
  encodedParams.set("source", "es");

  const options = {
    method: "POST",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "application/gzip",
      "X-RapidAPI-Key": "df50f4346emsh7cda332713a5adap1e4da4jsn02cf935b4546",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    console.log("esto devuelve mi api", response.data);
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error(error);
  }
};
