import React from 'react'
import { useFectchData } from './Hooks'
import './style.css'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import { useState } from 'react'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './components/Notes'
import { MapDasboard } from './components/MapDasboard'

function App() {
	const [param, setParam] = useState('')
	const [reqType, setReqType] = useState('all')

	const state = useFectchData(param, reqType)

	const onParamChange = (e) => {
		const query = e.target.value
		setParam(query)

		if (query.length <= 0) {
			setReqType('all')
		} else {
			setReqType('country')
		}
	}

	return (
		<Router>
			<Header />

			<Switch>
				<Route path='/' exact>
					<SearchForm param={param} onParamChange={onParamChange} />
					<Dashboard data={state} location={param} />
					<Notes />
				</Route>
				<Route exact path='/map'>
					<MapDasboard />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
