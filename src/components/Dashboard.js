import React from 'react'
import HeaderContent from './HeaderContent'
import Virus from './assets/virus.svg'
import Death from './assets/death.svg'
import Recorved from './assets/address.svg'
import { formatDate, formater } from './formatUtil'

export default function Dashboard({ data, location }) {
  if (data.error) {
    return (
      <p
        style={{
          textAlign: 'center',
          fontFamily: 'Poppins',
          fontWeight: 'bold',
          marginTop: '10rem',
          fontSize: '30px',
          color: '#fff',
        }}
      >
        Country <strong>"{location}"</strong> not found
      </p>
    )
  } else if (data.loading) {
    return (
      <p
        style={{
          textAlign: 'center',
          fontFamily: 'Poppins',
          fontWeight: 'bold',
          marginTop: '10rem',
          fontSize: '30px',
          color: '#fff',
        }}
      >
        Loading...
      </p>
    )
  } else {
    return (
      <>
        <HeaderContent
          location={location}
          lastupdate={formatDate(data.data.lastUpdate)}
        />
        <div className="dashboard">
          <div className="case">
            <img src={Virus} alt="total cases icon" />
            <h3>Cases</h3>
            <p>{formater(data.data.confirmed.value)}</p>
          </div>
          <div className="recorved">
            <img src={Recorved} alt="total cases icon" />
            <h3>Recorved</h3>
            <p>{formater(data.data.recovered.value)}</p>
          </div>
          <div className="deaths">
            <img src={Death} alt="total cases icon" />
            <h3>Deaths</h3>
            <p>{formater(data.data.deaths.value)}</p>
          </div>
        </div>
      </>
    )
  }
}
