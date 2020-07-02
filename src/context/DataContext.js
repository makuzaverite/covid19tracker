import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const DataContext = createContext()

const DataContextProvider = (props) => {
  const [dailyData, setData] = useState({
    country: undefined,
    cases: undefined,
    deaths: undefined,
    recorved: undefined,
    lastupdate: undefined,
    isLoading: true,
  })

  useEffect(() => {
    const getGrobalData = async () => {
      const data = await axios.get(`https://covid19.mathdro.id/api/`)

      setData({
        country: undefined,
        cases: data.data.confirmed.value,
        deaths: data.data.deaths.value,
        recorved: data.data.recovered.value,
        lastupdate: data.data.lastUpdate,
        isLoading: false,
      })
    }

    getGrobalData()
  }, [])

  return (
    <DataContext.Provider value={{ dailyData, setData }}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataContextProvider
