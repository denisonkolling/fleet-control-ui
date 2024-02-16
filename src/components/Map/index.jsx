import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    
    <MapContainer center={[-27.505, -48.55]} zoom={9} scrollWheelZoom={false} style={{ height: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-27.505, -48.55]}>
        <Popup>
          Vehicle location.
        </Popup>
      </Marker>
    </MapContainer>
    
  );
};

export default Map;
