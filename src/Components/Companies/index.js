import React, { useEffect, useState } from 'react';
import './companies.css';

const Companies = () => {
    const [currentLogoIndexes, setCurrentLogoIndexes] = useState([0, 0, 0, 0, 0, 0]); 
    const [alternateCount, setAlternateCount] = useState(0);

    const logos = [
        ['/google.png', '/ajio.png', '/cleartax.png', '/dream11.png', '/indmoney.png', '/paytm.png'],
        ['/indmoney.png', '/paytm.png', '/google.png', '/ajio.png', '/cleartax.png', '/dream11.png'],
        ['/ajio.png', '/cleartax.png', '/dream11.png', '/indmoney.png', '/paytm.png', '/google.png'],
        ['/cleartax.png', '/dream11.png', '/indmoney.png', '/paytm.png', '/google.png', '/ajio.png'],
        ['/indmoney.png', '/paytm.png', '/google.png', '/ajio.png', '/cleartax.png', '/dream11.png'],
        ['/paytm.png', '/google.png', '/ajio.png', '/cleartax.png', '/dream11.png', '/indmoney.png']
    ];

    const totalLogos = logos.map(row => row.length);

    useEffect(() => {
        const intervals = totalLogos.map((total, index) => {
            return setInterval(() => {
                setCurrentLogoIndexes(prevIndexes => {
                    const newIndexes = [...prevIndexes];
                    newIndexes[index] = (newIndexes[index] + 1) % total;
                    return newIndexes;
                });
            }, index % 2 === 0 ? 2000 : 4000);
        });

        return () => {
            intervals.forEach(clearInterval);
        };
    }, [totalLogos]);

    useEffect(() => {
        if (alternateCount >= 2) return;

        const timer = setTimeout(() => {
            setAlternateCount(prevCount => prevCount + 1);
        }, 3000); 

        return () => clearTimeout(timer);
    }, [alternateCount]);

    return (
        <div className="text-[#696984] flex justify-center mt-12 font-pop">
            <div className="w-[90%] space-y-8">
                <div className="text-center text-[24px]">Trusted by 5,000+ Companies Worldwide</div>
                <div className="flex justify-center">
                    {logos.map((row, rowIndex) => (
                        <div key={rowIndex} className="slider-container w-[14%]">
                            {row.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo}
                                    alt={`Company Logo ${index}`}
                                    className={index === currentLogoIndexes[rowIndex] ? 'logo active' : 'logo'}
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


// import React, { useEffect, useState } from 'react';
// import './companies.css'; // Import CSS file for styling (you need to create this file)

//  const Companies=()=> {
//     const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
//     const logos1 = ['/google.png', '/ajio.png', '/cleartax.png', '/dream11.png', '/indmoney.png', '/paytm.png'];
//     const logos2 = [ '/indmoney.png', '/paytm.png','/google.png', '/ajio.png', '/cleartax.png', '/dream11.png',];
//     const logos3 = [ '/ajio.png', '/cleartax.png', '/dream11.png', '/indmoney.png', '/paytm.png','/google.png',];
//     const logos4 = ['/cleartax.png', '/dream11.png', '/indmoney.png', '/paytm.png','/google.png', '/ajio.png', ];
//     const logos5 = ['/indmoney.png', '/paytm.png','/google.png', '/ajio.png', '/cleartax.png', '/dream11.png',];
//     const logos6 = ['/paytm.png','/google.png', '/ajio.png', '/cleartax.png', '/dream11.png', '/indmoney.png'];
//     const totalLogos1 = logos1.length;
//     const totalLogos2 = logos2.length;
//     const totalLogos3 = logos3.length;
//     const totalLogos4 = logos4.length;
//     const totalLogos5 = logos5.length;
//     const totalLogos6 = logos6.length;

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentLogoIndex(prevIndex => {
//                 return (prevIndex + 1) % totalLogos1;
//             });
//         }, 3000); 
//         return () => clearInterval(interval);
//     }, [totalLogos1]);
    

//     return (
//         <div className="text-[#696984] flex justify-center mt-12 font-pop">
//             <div className="w-[90%] space-y-8">
//                 <div className="text-center text-[24px]">Trusted by 5,000+ Companies Worldwide</div>
//                 <div className="flex justify-center"  >
//                         <div className="slider-container flex w-[20%]">
//                             {logos1.map((logo, index) => (
//                                 <img
//                                     key={index}
//                                     src={logo}
//                                     alt={`Company Logo ${index}`}
//                                     className={index === currentLogoIndex ? 'logo active' : 'logo'}
//                                 />
//                             ))}
//                         </div>
//                         <div className="slider-container w-[20%]">
//                         {logos2.map((logo, index) => (
//                             <img
//                                 key={index}
//                                 src={logo}
//                                 alt={`Company Logo ${index}`}
//                                 className={index === currentLogoIndex ? 'logo active' : 'logo'}
//                             />
//                         ))}
//                     </div>
//                     <div className="slider-container w-[20%]">
//                         {logos3.map((logo, index) => (
//                             <img
//                                 key={index}
//                                 src={logo}
//                                 alt={`Company Logo ${index}`}
//                                 className={index === currentLogoIndex ? 'logo active' : 'logo'}
//                             />
//                         ))}
//                     </div>
//                     <div className="slider-container w-[20%]">
//                         {logos4.map((logo, index) => (
//                             <img
//                                 key={index}
//                                 src={logo}
//                                 alt={`Company Logo ${index}`}
//                                 className={index === currentLogoIndex ? 'logo active' : 'logo'}
//                             />
//                         ))}
//                     </div>
//                     <div className="slider-container w-[20%]">
//                         {logos5.map((logo, index) => (
//                             <img
//                                 key={index}
//                                 src={logo}
//                                 alt={`Company Logo ${index}`}
//                                 className={index === currentLogoIndex ? 'logo active' : 'logo'}
//                             />
//                         ))}
//                     </div>
//                     <div className="slider-container w-[20%]">
//                         {logos6.map((logo, index) => (
//                             <img
//                                 key={index}
//                                 src={logo}
//                                 alt={`Company Logo ${index}`}
//                                 className={index === currentLogoIndex ? 'logo active' : 'logo'}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



// export default Companies;