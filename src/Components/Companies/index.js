import React, { useEffect, useState } from 'react';
import './companies.css'; // Import CSS file for styling (you need to create this file)

const Companies = () => {
    const [currentLogoIndexes, setCurrentLogoIndexes] = useState([0, 0, 0, 0, 0, 0]); // Initialize with 6 sets of logos


    const logosSets = [
        ['/animationLogos/abbott.png', '/animationLogos/accentire.png', '/animationLogos/adept.png', '/animationLogos/adobe.png', '/animationLogos/ajio.png', '/animationLogos/alexa.png'],
        ['/animationLogos/bosch.png', '/animationLogos/byjus.png', '/animationLogos/capgemini.png', '/animationLogos/cleartax.png', '/animationLogos/cognizant.png', '/animationLogos/dream11.png'],
        ['/animationLogos/dxc.png', '/animationLogos/ebay.png', '/animationLogos/google.png', '/animationLogos/grammarly.png', '/animationLogos/hcl.png', '/animationLogos/ibm.png'],
        ['/animationLogos/indmoney.png', '/animationLogos/infosys.png', '/animationLogos/instamojo.png', '/animationLogos/mahindra.png', '/animationLogos/ola.png', '/animationLogos/paytm.png'],
        ['/animationLogos/revv.png', '/animationLogos/salesforce.png', '/animationLogos/sharechat.png', '/animationLogos/swiggy.png', '/animationLogos/tcs.png', '/animationLogos/techginia.png'],
        ['/animationLogos/techmatrix.png', '/animationLogos/unity.png', '/animationLogos/uolo.png', '/animationLogos/whatfix.png', '/animationLogos/whitehat.png', '/animationLogos/wipro.png']
    ];

    const totalLogosSets = logosSets.length;

    useEffect(() => {
        const intervals = logosSets.map((logos, setIndex) => {
            const totalLogos = logos.length;
            const intervalDuration = (setIndex % 2 === 0) ? 3000 : 4000; // Adjust interval duration for different sets
            return setInterval(() => {
                setCurrentLogoIndexes(prevIndexes => {
                    const updatedIndexes = [...prevIndexes];
                    updatedIndexes[setIndex] = (updatedIndexes[setIndex] + 1) % totalLogos;
                    return updatedIndexes;
                });
            }, intervalDuration);
        });

        return () => intervals.forEach(interval => clearInterval(interval));
    }, []);

    return (
        <div className="text-[#696984] flex justify-center font-pop md:mt-0 xsm:mt-4">
            <div className="w-[90%] space-y-8 xsm:space-y-4 md:space-y-6">
                <div className="text-center text-[30px] font-semibold xsm:text-[12px] md:text-[20px]">Trusted by 5,000+ Companies Worldwide</div>
                <div className="flex justify-center">
                    {logosSets.map((logos, setIndex) => (
                        <div key={setIndex} className="slider-container w-[100%] xsm:w-[15%] md:w-[15%]">
                            {logos.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo}
                                    alt={`Company Logo ${index}`}
                                    className={index === currentLogoIndexes[setIndex] ? 'logo active' : 'logo'}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Companies;
