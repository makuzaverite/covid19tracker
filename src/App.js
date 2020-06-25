import React from 'react'
import './style.css'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import Dashboard from './components/Dashboard'
import DataContextProvider from './context/DataContext'
import Notes from './components/Notes'

function App() {
  return (
    <>
      <Header />
      <DataContextProvider>
        <SearchForm />
        <Dashboard />
      </DataContextProvider>
      <Notes />
    </>
  )
}

export default App
