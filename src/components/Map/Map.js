import React, { useEffect, useRef } from "react";
import { loadModules } from "esri-loader";

function ReactMap() {
  let view;
  const MapElement = useRef(null);
  useEffect(() => {
    loadModules(
      [
        "esri/views/MapView",
        "esri/Map",
        "esri/config",

        "esri/layers/FeatureLayer", //latest
      ],
      {
        css: true,
      }
    ).then(([MapView, Map, esriConfig, FeatureLayer]) => {
      esriConfig.apiKey = process.env.ARCGIS_API_KEY;

      const map = new Map({
        basemap: "topo-vector",
      });

      view = new MapView({
        map: map,
        center: [-111.876183, 40.758701],
        zoom: 13,
        container: MapElement.current,
      });

      const parksLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0",
      });
      const trailheadsLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0",
      });

      const trailsLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0",
      });

      view.ui.add("infoDiv", "bottom-left");
      map.add(parksLayer, 0);
      map.add(trailsLayer, 0);
      map.add(trailheadsLayer);
    });
  }, []);
  return (
    <>
      <div style={{ height: 800 }} ref={MapElement}></div>
    </>
  );
}

export default ReactMap;
