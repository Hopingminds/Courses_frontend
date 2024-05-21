import React from 'react'
import LiveClassCard from '../Dashboard/LiveClassCard'

const ScheduledClasses = () => {
  return (
    <div className='grid grid-cols-3 gap-5 gap-y-8'>
        <LiveClassCard/>
        <LiveClassCard/>
        <LiveClassCard/>
        <LiveClassCard/>
    </div>
  )
}

export default ScheduledClasses