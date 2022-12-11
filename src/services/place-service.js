import axios from "axios";
export const GEO_URL = process.env.REACT_APP_GEO_URL;

export const getCoord = async (place) => {
  const options = {
    params: { address: place },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPID_HOST,
    },
  };
  try {
    const { data } = await axios.get(GEO_URL, options);
    return {
      latitude: data.results[0].location.lat,
      longitude: data.results[0].location.lng,
    };
  } catch (error) {
    console.log(error);
  }
};
