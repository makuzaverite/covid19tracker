import React from 'react'
import HeaderContent from './HeaderContent'
import Virus from './assets/virus.svg'
import Death from './assets/death.svg'
import Recorved from './assets/address.svg'

export default function Dashboard({ data, location }) {
	const formater = (number) => {
		return new Intl.NumberFormat().format(number)
	}

	if (data.error) {
		return (
			<p
				style={{
					textAlign: 'center',
					fontFamily: 'Poppins',
					fontWeight: 'bold',
					marginTop: '10rem',
					fontSize: '30px',
				}}>
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
				}}>
				Loading...
			</p>
		)
	} else {
		const date = new Date(data.data.lastUpdate)
		return (
			<>
				<HeaderContent location={location} lastupdate={date.toLocaleString()} />
				<div className='dashboard'>
					<div className='case'>
						<img src={Virus} alt='total cases icon' />
						<h3>Cases</h3>
						<p>{formater(data.data.confirmed.value)}</p>
					</div>
					<div className='recorved'>
						<img src={Recorved} alt='total cases icon' />
						<h3>Recorved</h3>
						<p>{formater(data.data.recovered.value)}</p>
					</div>
					<div className='deaths'>
						<img src={Death} alt='total cases icon' />
						<h3>Deaths</h3>
						<p>{formater(data.data.deaths.value)}</p>
					</div>
				</div>
			</>
		)
	}
}
