import "mapbox-gl/dist/mapbox-gl.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getGeoThunk } from "../../../services/place-thunk";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";

const MapComponent = ({ place }) => {
  const { geo } = useSelector((state) => state.place);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGeoThunk(place));
  }, [dispatch, place]);

  return (
    <>
      {geo && (
        <div className="App mt-2">
          <Map
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            style={{
              width: "600px",
              height: "500px",
              borderRadius: "20px",
            }}
            initialViewState={{
              longitude: geo?.longitude,
              latitude: geo?.latitude,
              zoom: 12,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Marker longitude={geo?.longitude} latitude={geo?.latitude} />
            <NavigationControl position="bottom-right" />
            <FullscreenControl />
            <GeolocateControl />
          </Map>
        </div>
      )}
    </>
  );
};

export default MapComponent;
