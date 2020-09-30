import React from 'react'

function HeaderContent({ location, lastupdate }) {
  return (
    <div className="status-header">
      {!location ? (
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <h4>Global status information about virus </h4>
          <span style={{ color: '#fff' }}>last updated {lastupdate}</span>{' '}
        </div>
      ) : (
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <h4 style={{ textTransform: 'capitalize' }}>
            {' '}
            {location} status information about pandemic
          </h4>
          <span style={{ color: '#fff' }}>last updated {lastupdate}</span>{' '}
        </div>
      )}
    </div>
  )
}

export default HeaderContent
