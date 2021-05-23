import React from "react";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import { useFetchCountryData } from "../Hooks";
import "./Map.css";
import ToolTipData from "./ToolTipData";

export function MapDasboard() {
  const countryData = useFetchCountryData();

  return (
    countryData && (
      <MapContainer center={[0, 0]} zoom={3}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {countryData.map((country) => (
          <Marker
            key={country.country_code}
            position={[country.latitude, country.longitude]}
          >
            <Tooltip
              fillColor="red"
              offset={[0, 20]}
              opacity={1}
              direction="right"
              style={{
                backgroundColor: "#00293d",
              }}
            >
              <ToolTipData
                location={country.location}
                dead={country.dead}
                recovered={country.recovered}
                confirmed={country.confirmed}
                updated={country.updated}
              />
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    )
  );
}
