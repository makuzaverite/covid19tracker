import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
// import { CircleMarker, Tooltip } from 'leaflet'
import './Map.css'

export function MapDasboard() {
	return (
		<Map center={[-1.935114, 30.082111]} zoom={12}>
			<TileLayer
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
		</Map>
	)
}
