import React from 'react'
import SearchForm from './components/SearchForm'
import Dashboard from './components/Dashboard'
import Notes from './components/Notes'

function Home({ param, onParamChange, state }) {
  return (
    <>
      <SearchForm param={param} onParamChange={onParamChange} />
      <Dashboard data={state} location={param} />
      <Notes />
    </>
  )
}

export default Home
