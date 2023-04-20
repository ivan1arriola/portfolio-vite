import axios from 'axios';

const urlBase = 'https://data.ivan1arriola.com/';

const obtenerData = async (ruta) => {
  try {
    const response = await axios.get(`${urlBase}/${ruta}`);
    return response.data
  } catch (error) {
    console.error(error);
  }
};

export default obtenerData;
