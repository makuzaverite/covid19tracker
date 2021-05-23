import React from 'react'

const SearchForm = ({ param, onParamChange }) => {
	return (
		<>
			<form className='searchBox'>
				<input
					type='text'
					placeholder='Search for a specific country...'
					autoFocus={true}
					value={param}
					onChange={onParamChange}
				/>
			</form>
		</>
	)
}

export default SearchForm
