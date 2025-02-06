import { useEffect, useRef } from "react";
import { useMap } from "../hooks/useMap";

const MapComponent = () => {
  const mapRef = useRef(null);
  const apiKey = import.meta.env.VITE_MAPPLS_API_KEY;
  const baseUrl = import.meta.env.VITE_MAPPLS_BASE_URL;
  const scriptLoaded = useMap(
    `${baseUrl}/${apiKey}/map_sdk?layer=vector&v=3.0`
  );

  useEffect(() => {
    if (scriptLoaded && !mapRef.current) {
      mapRef.current = new window.mappls.Map("map", {
        center: [22.77254051913992, 75.89826534424395],
        zoom: 14,
      });

      new window.mappls.Marker({
        map: mapRef.current,
        position: { lat: 22.77254051913992, lng: 75.89826534424395 },
        title: "NextLoop Technologies",
      });
    }
  }, [scriptLoaded]);

  return <div id="map" className="w-full h-full rounded bg-gray-200"></div>;
};

export default MapComponent;
