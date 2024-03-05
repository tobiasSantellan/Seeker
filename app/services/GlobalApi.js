import axios from "axios";

const getNearByPlace = (category, lat, lng) =>
  axios.get(
    `/api/google-nearby-place?category=${category}&lat=${lat}&lng=${lng}`
  );
//  tomo una categoría de lugar, así como las coordenadas de latitud y longitud, y utilizo Axios para realizar una solicitud GET a una URL específica. La solicitud GET se hace a la ruta /api/google-nearby-place con los parámetros de consulta category, lat y lng, que se pasan en la URL.
export default {
  getNearByPlace,
};
