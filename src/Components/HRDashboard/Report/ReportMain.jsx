import React from 'react'
import Reports from './Reports'

const ReportMain = ({selectedComponent, onItemClick}) => {

    return (
        <div>
            <Reports onItemClick={onItemClick}/>
        </div>
    )
}

export default ReportMain