/* eslint-disable no-useless-catch */

const base = 'https://api.giphy.com/v1/gifs/translate?api_key=';

export default async (description) => {
  const key = 'HgAseIIRrXln6uCLLhRU4MkLEZjeYegJ';

  const api = `${base}${key}&s=${description}`;
  try {
    const responce = await fetch(api, { mode: 'cors' });
    const data = await responce.json();
    const url = await data.data.id;

    return url;
  } catch (error) {
    throw error;
  }
};
