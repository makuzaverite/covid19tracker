import {useEffect} from 'react'
import { useState } from 'react'
import axios from 'axios'


const BASE_URL = 'https://www.trackcorona.live/api/countries'


export default function useCountryData () {
 const [counrtyData,setData] = useState([])

 useEffect(() => {
  const getCountryData = async()=>{
      const resp = await axios.get(BASE_URL)
      const {data} = resp.data
      setData(data)
  }
  getCountryData()
 },[])

 return counrtyData
}
