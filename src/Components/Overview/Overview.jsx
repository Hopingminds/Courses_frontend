import React from 'react'
import "./Overview.css"

function Overview(props) {
  let {data}=props;
  return (
    <div className='overview' id='overview'>

      <p>
      {data}
      </p>

      {/* <ul>
        <li>Engaging live classes with interactive learning.</li>
        <li>Industry expert-led master classes every two weeks.</li>
        <li>Real-time corporate assignments for practical learning.</li>
        <li>Instant doubt resolution by our experienced experts.</li>
      </ul> */}
      
   
    </div>
  )
}

export default Overview
