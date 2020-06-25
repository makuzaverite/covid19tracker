import React, { useState, useContext } from 'react'
import { DataContext } from '../context/DataContext'
import axios from 'axios'

const SearchForm = (props) => {
  const { setData } = useContext(DataContext)
  const [country, setCountry] = useState('')

  const getStatuses = async () => {
    try {
      const resp = await axios.get(
        `https://covid19.mathdro.id/api/countries/${country}`
      )
      setData({
        country: country,
        cases: resp.data.confirmed.value,
        deaths: resp.data.deaths.value,
        recorved: resp.data.recovered.value,
        lastupdate: resp.data.lastUpdate,
      })
    } catch (error) {
      console.log()
      alert(error.response.data.error.message)
    }
  }

  async function handleSearch(e) {
    e.preventDefault()
    getStatuses()
  }

  // const getCountries = async () => {
  //   const countries = await axios.get(
  //     `https://covid19.mathdro.id/api/countries`
  //   )
  //   setCountriesArray(countries.data.countries)
  // }

  // useEffect(() => {
  //   getCountries()
  // })

  return (
    <>
      <form className="searchBox" onSubmit={handleSearch}>
        {/* <i className="fa fa-search fa-3x"></i> */}
        <input
          type="text"
          placeholder="Search for a specific country and press enter to view status"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          autoFocus={true}
        />
      </form>
    </>
  )
}

export default SearchForm
