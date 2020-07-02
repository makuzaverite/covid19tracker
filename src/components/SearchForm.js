import React, { useState, useContext } from 'react'
import { DataContext } from '../context/DataContext'
import useDataSearch from '../useDataSearch'

const SearchForm = (props) => {
  const { setData } = useContext(DataContext)
  const [query, setQuery] = useState('')
  const { country, isLoading } = useDataSearch(query)

  function handleSearch(e) {
    setQuery(e.target.value)
    if (country) {
      setData({
        country: query,
        cases: country.confirmed.value,
        deaths: country.deaths.value,
        recorved: country.recovered.value,
        lastupdate: country.lastUpdate,
        isLoading: isLoading,
      })
    }
  }

  return (
    <>
      <form className="searchBox" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a specific country..."
          value={query}
          onChange={handleSearch}
          autoFocus={true}
        />
      </form>
    </>
  )
}

export default SearchForm
