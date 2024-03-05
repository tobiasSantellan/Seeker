import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

async function handler(req, res) {
  try {
    const responce = await axios(
      BASE_URL +
        "/nearbysearch/json?fields=formatted_address,name,rating,opening_hours,geometry,photos&type=" +
        req.query.category +
        "&location=" +
        req.query.lat +
        "," +
        req.query.lng +
        "&radius=5000&key=" +
        GOOGLE_API_KEY
    ); // construyo dinámicamente una URL de solicitud a la API de Google Places para buscar lugares cercanos basados en los parámetros proporcionados en la solicitud HTTP (category, lat y lng) y luego utiliza Axios para realizar la solicitud y obtener la respuesta.

    const data = responce.data;

    res.status(200).json(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}

export default handler;
