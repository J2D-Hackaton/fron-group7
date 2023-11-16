import React, { useContext } from "react";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import barrios from "../../utilities/barrios.json";
import MapContext from "../../context/map.context";


const Map = () => {
    
    const { setActions, setDistrictSelected, setShowDetails } = useContext(MapContext)

        const getActions = async(id) => {
            const data = await fetch(`https://jump2digital-grup7.onrender.com/api/v1/intervention/${id}`)
            const { interventions  } = await data.json()
            setActions(interventions )
        }

        const handleCircleClick = (barrio, id) => {
            getActions(id)
            setDistrictSelected(barrio);
            setShowDetails(true)
        };
    
    return (
        <MapContainer
        center={[41.38879, 2.15899]}
        zoom={13}
            style={{ height: "500px", width: "100%"}}
        >
        <TileLayer
            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGluZGVyLXJlYWN0IiwiYSI6ImNscDE5dGY0ZzBpdzYyaG5sMDJ6NXhybTQifQ.ih9d7D6Cq_9vEQwTjErdIQ"
            attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
            id="mapbox/light-v11"
        />

            {barrios.map((barrio) => {
            return (
            <Circle
                key={barrio.id}
                center={[barrio.coords[1], barrio.coords[0]]}
                pathOptions={{ color: "green", fillColor: "black" }}
                radius={100}
                eventHandlers={{ click: () => handleCircleClick(barrio, barrio.id) }}
            />
            );
        })}
        </MapContainer>
    );
};

export default Map;
