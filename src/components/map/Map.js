import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'
import LocationPin from "./LocationPin";
import { GOOGLE_MAP_API } from "../../../globals";

const map = ({ location, zoomLevel }) => <div className="map">
  <h2 className="map-h2">Come Visit Us At Our Campus</h2>

  <div className="google-map">
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAP_API }}
      defaultCenter={location}
      defaultZoom={zoomLevel}
    >
      <LocationPin
        lat={location.lat}
        lng={location.lng}
        text={location.address}
      />
    </GoogleMapReact>
  </div>
</div>;

export default map
