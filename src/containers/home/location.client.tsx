import { useRef, useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";

export const Location = () => {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2FtdHVmYWlsIiwiYSI6ImNrOGhvd2xuOTAyZm0zZHAzNXlrMGF5ZDkifQ.S4s4jAZo8yEmxc1ODsajdA";
  const mapContainer: any = useRef(null);
  const map: any = useRef(null);

  const [lng, setLng] = useState(-149.5564);
  const [lat, setLat] = useState(61.3129);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/samtufail/cldrp4xvz006401se0uh5aana",
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
    map.current.scrollZoom.disable();
  }, []);

  return (
    <div className="mt-[4px] mb-[4px] relative">
      <div className="bg-[rgba(35,_55,_75,_0.9)] text-white py-[6px] px-[12px] z-10 absolute top-0 left-0 rounded-[4px] m-[12px]">
        Longitude: {lng} | Latitude: {lat}
      </div>
      <div ref={mapContainer} className="h-[400px]" />
    </div>
  );
};
