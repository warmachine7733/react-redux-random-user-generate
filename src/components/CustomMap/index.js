import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const MapContainer = props => {
  const { randomProfile } = props;
  const { location } = randomProfile;
  const { coordinates } = location;

  //   const { coordinates } = location;
  return (
    <Map
      google={props.google}
      zoom={5}
      center={{
        lat: parseFloat(coordinates.latitude),
        lng: parseFloat(coordinates.longitude)
      }}
    >
      <Marker
      
        position={{
          lat: parseFloat(coordinates.latitude),
          lng: parseFloat(coordinates.longitude)
        }}
        // scale={0.65}
        // size={{ width: 35, height: 40 }}
        // origin={{ x: 15 / 62, y: 1 }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: ""
})(MapContainer);
