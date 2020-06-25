import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import HeaderContent from './HeaderContent'
import Virus from './assets/virus.svg'
import Death from './assets/death.svg'
import Recorved from './assets/address.svg'

export default function Dashboard() {
  const { dailyData } = useContext(DataContext)
  const date = new Date(dailyData.lastupdate)

  const formater = (number) => {
    return new Intl.NumberFormat().format(number)
  }

  return (
    <>
      <HeaderContent
        location={dailyData.country}
        lastupdate={date.toLocaleString()}
      />
      <div className="dashboard">
        <div className="case">
          <img src={Virus} alt="total cases icon" />
          <h3>Cases</h3>
          <p>{formater(dailyData.cases)}</p>
        </div>
        <div className="recorved">
          <img src={Recorved} alt="total cases icon" />
          <h3>Recorved</h3>
          <p>{formater(dailyData.recorved)}</p>
        </div>
        <div className="deaths">
          <img src={Death} alt="total cases icon" />
          <h3>Deaths</h3>
          <p>{formater(dailyData.deaths)}</p>
        </div>
      </div>
    </>
  )
}
