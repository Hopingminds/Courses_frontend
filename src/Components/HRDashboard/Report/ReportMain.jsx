import React, { useState } from 'react'
import Reports from './Reports'
import Applications from './Applications/Applications';
import Results from './Results/Results';

const ReportMain = ({selectedComponent, onItemClick}) => {

    return (
        <div>
            <Reports onItemClick={onItemClick}/>
        </div>
    )
}

export default ReportMain