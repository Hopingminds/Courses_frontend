import React from 'react'
import DeclareResultCard from './DeclareResultCard'
import ViewResults from './ViewResults'

const History = () => {
  return (
    <div className='grid grid-cols-3 gap-6 gap-y-8'>
        <DeclareResultCard/>
        <ViewResults/>
        <DeclareResultCard/>
        <ViewResults/>
    </div>
  )
}

export default History