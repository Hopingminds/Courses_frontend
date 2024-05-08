import React, { useState } from 'react'
import Reports from './Reports'
import Applications from './Applications/Applications';
import Results from './Results/Results';

const ReportMain = ({selectedComponent}) => {

    const [showReports, setShowReports] = useState(true);
    const [showApplication, setShowApplication] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const handleShowApplication = () => {
        setShowReports(false);
        setShowApplication(true);
        setShowResult(false);
    };

    const handleShowResult = () => {
        setShowReports(false);
        setShowApplication(false);
        setShowResult(true);
    };
    return (
        <div>
            {(showReports && selectedComponent === 'reports') && <Reports onShowApplication={handleShowApplication} onShowResult={handleShowResult} />}
            {showApplication && <Applications />}
            {showResult && <Results />}
        </div>
    )
}

export default ReportMain