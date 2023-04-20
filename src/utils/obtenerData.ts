import axios, { AxiosResponse } from 'axios';

const urlBase = 'https://data.ivan1arriola.com';

const obtenerData = async (ruta: string): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.get(`${urlBase}/${ruta}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default obtenerData;
