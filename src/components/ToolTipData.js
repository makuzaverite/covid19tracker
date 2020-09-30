import React from 'react'
import { formatDate, formater } from './formatUtil'

function ToolTipData({ location, confirmed, dead, recovered, updated }) {
  return (
    <div>
      <h2
        style={{
          textAlign: 'center',
        }}
      >
        {location}
      </h2>
      <p>
        <strong>Confirmed:</strong> {formater(confirmed)}
      </p>
      <p>
        <strong>Death:</strong> {formater(dead)}
      </p>
      <p>
        <strong>Recovered:</strong> {formater(recovered)}
      </p>
      <p>
        <strong>Last update:</strong> {formatDate(updated)}
      </p>
    </div>
  )
}

export default ToolTipData
