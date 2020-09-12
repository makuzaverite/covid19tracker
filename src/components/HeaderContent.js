import React from 'react'

function HeaderContent({ location, lastupdate }) {
	return (
		<div className='status-header'>
			{!location ? (
				<h4 style={{ textAlign: 'center', color: 'blue' }}>
					Global status information about virus{' '}
					<span style={{ color: 'orange' }}>last updated {lastupdate}</span>{' '}
				</h4>
			) : (
				<h4 style={{ textAlign: 'center', color: 'blue' }}>
					{location} status information about pandemic{' '}
					<span style={{ color: 'orange' }}>last updated {lastupdate}</span>{' '}
				</h4>
			)}
		</div>
	)
}

export default HeaderContent
