import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BASE_URL } from '../../Api/api';

const VerifiedCertificate = () => {
    const [certificate, setCertificate] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    // Extract certificateId from URL query parameters
    const getCertificateIdFromQuery = () => {
        const params = new URLSearchParams(location.search);
        return params.get('certificateId');
    };

    useEffect(() => {
        const certificateId = getCertificateIdFromQuery();

        if (!certificateId) {
            // If certificateId is not available, navigate to home
            navigate('/');
        } else {
            // If certificateId exists, fetch the certificate data
            fetchCertificate(certificateId);
        }
    }, [location.search, navigate]);

    const fetchCertificate = async (id) => {
        try {
            const response = await fetch(`${BASE_URL}/getTrainingCertificate?certificateId=${id}`);
            const data = await response.json();

            if (response.ok) {
                setCertificate(data.trainingCertificate.certificatePdf);
            } else {
                // Handle error if any (e.g., certificate not found)
                console.error("Failed to fetch certificate:", data.message);
            }
        } catch (error) {
            console.error("Error fetching certificate:", error);
        }
    };

    return (
        <div>
            {certificate ? (
                <div className='flex flex-col items-center'>
                    <img className='w-[168px] h-[168px] xsm:w-[100px] xsm:h-[100px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px]' src="/ok.gif" alt="ok" />
                    <p className="text-3xl text-gray-900 font-semibold mb-5 font-pop text-center xsm:text-[16px] sm:text-[16px] md:text-[20px]">Your Certificate is a Verified Certificate From <br />HopingMinds</p>
                    <img
                        className='mb-14 shadow-2xl w-[50%] xsm:w-[80%] sm:w-[80%] md:w-[80%] '
                        src={certificate}
                        title="Certificate"
                    />
                </div>
            ) : (
                <div className=' h-[500px] flex justify-center items-center'>
                    <div class="Certificate-loader"></div>
                </div> 
            )}
        </div>
    )
}

export default VerifiedCertificate