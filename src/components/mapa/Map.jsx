import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import barrios from "../../utilities/barrios.json";
import MapContext from "../../context/map.context";

const Map = () => {
  const { setActions, districtSelected, setDistrictSelected, setShowDetails } =
    useContext(MapContext);

  const getActions = async (id) => {
    try {
      const data = await fetch(
        `https://jump2digital-grup7.onrender.com/api/v1/intervention/${id}`
      );
      const { interventions } = await data.json();
  
      setActions(interventions);
    } catch (error) {
      
      console.log(error);
    }
  };

  const handleCircleClick = (barrio, id) => {
    getActions(id);
    setDistrictSelected(barrio);
    setShowDetails(true);
  };

  const actionIndexColor = (actionIndex) => {
    if (actionIndex < -1 || actionIndex > 1) {
      return "El número debe estar en el rango de -1 a 1";
    } else if (actionIndex < -0.5) {
      return "tomato";
    } else if (actionIndex <= 0.5) {
      return "orange";
    } else {
      return "green";
    }
  };

  return (
    <MapContainer
      center={[41.38879, 2.15899]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGluZGVyLXJlYWN0IiwiYSI6ImNscDE5dGY0ZzBpdzYyaG5sMDJ6NXhybTQifQ.ih9d7D6Cq_9vEQwTjErdIQ"
        attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
        id="mapbox/light-v11"
      />

      {districtSelected != null ? (
        <Circle
          center={[districtSelected.coords[1], districtSelected.coords[0]]}
          pathOptions={{
            color: actionIndexColor(districtSelected?.action_index),
            fillColor: actionIndexColor(districtSelected?.action_index),
          }}
          radius={220}
          className="transition-all"
          eventHandlers={{ click: () => handleCircleClick(districtSelected) }}
        />
      ) : (
        barrios.map((barrio) => {
          return (
            <Circle
              key={barrio?.id}
              center={[barrio?.coords[1], barrio?.coords[0]]}
              pathOptions={{
                color: actionIndexColor(barrio?.action_index),
                fillColor: actionIndexColor(barrio?.action_index),
              }}
              radius={200}
              eventHandlers={{
                click: () => handleCircleClick(barrio, barrio.id),
              }}
            />
          );
        })
      )}
    </MapContainer>
  );
};

export default Map;
