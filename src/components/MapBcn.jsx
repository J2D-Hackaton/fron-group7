import React from 'react';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const BcnMap = () => {

const multiPolygon = [41.3787779892825,2.16311459369197];
  

  return (
    <MapContainer
      center={[41.38879, 2.15899]} // Coordenadas iniciales (latitud, longitud)
      zoom={13} // Nivel de zoom
      style={{ height: '500px', width: '100%' }} // Estilo para el contenedor del mapa
    >
    
    <TileLayer
      url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGluZGVyLXJlYWN0IiwiYSI6ImNscDE5dGY0ZzBpdzYyaG5sMDJ6NXhybTQifQ.ih9d7D6Cq_9vEQwTjErdIQ"
      attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
      id="mapbox/light-v11" // Cambia el estilo aquí (puedes explorar otros estilos en Mapbox)
     />
  
    <div onClick={console.log('hello')}>
    <Circle
      center={multiPolygon}
      pathOptions={{ color: 'red', fillColor: 'red' }}
      radius={300}
    /></div>
      
    </MapContainer>
  );
};

export default BcnMap;