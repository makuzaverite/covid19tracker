import React from 'react'

function HeaderContent(props) {
  return (
    <div className="status-header">
      {props.location === undefined ? (
        <h4 style={{ textAlign: 'center', color: 'blue' }}>
          Global status information about virus{' '}
          <span style={{ color: 'orange' }}>
            last updated {props.lastupdate}
          </span>{' '}
        </h4>
      ) : (
        <h4 style={{ textAlign: 'center', color: 'blue' }}>
          {props.location} status information about pandemic{' '}
          <span style={{ color: 'orange' }}>
            last updated {props.lastupdate}
          </span>{' '}
        </h4>
      )}
    </div>
  )
}

export default HeaderContent
