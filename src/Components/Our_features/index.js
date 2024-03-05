import './ourfeatures.css'

import { ReactComponent as Medal } from '../../Assets/Icons/medal.svg'
import { ReactComponent as Star1 } from '../../Assets/Icons/Star_1.svg'
import { ReactComponent as Star2 } from '../../Assets/Icons/star2.svg'
import { ReactComponent as Rocket } from '../../Assets/Icons/rocket.svg'
import { ReactComponent as Bluestar } from '../../Assets/Icons/bluestar.svg'
import { ReactComponent as Bluestar2 } from '../../Assets/Icons/bluestar2.svg'
import { ReactComponent as Class } from '../../Assets/Icons/class.svg'
import { ReactComponent as Greenstar } from '../../Assets/Icons/stargreen1.svg'
import { ReactComponent as Greenstar2 } from '../../Assets/Icons/stargreen2.svg'
import { ReactComponent as Online } from '../../Assets/Icons/online.svg'

export default function Our_features(){
    return(<>
    <div className="h-[400px] ">
        <div className="text-5xl font-outfit font-semibold text-center mt-4">About us</div>
        <div className="flex justify-between font-mons px-5 mt-6">
            <div className="h-[290px] bg-[#FAEFD9] w-[240px] features-baloon rounded-b-3xl rounded-tr-3xl">
                <div className="flex w-36 justify-center items-center h-24 ">
                    <Medal/>
                  <Star1 className='mt-8'/>
                </div>
                <Star2 className='ml-20'/>
                <div className='flex justify-center w-full mt-2'>
                        <div className='w-[60%] text-center'>
                            <p className='text-[#0A0A0A] font-semibold'>NSDC Certification</p>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                        </div>
                </div>
            </div>
            <div className="h-[290px] bg-[#DCE3F3] w-[240px] features-baloon-blue rounded-b-3xl rounded-tr-3xl">
                <div className="flex w-36 justify-center items-center h-24 ">
                    <img className='' src='/rocket.svg'/>
                  <Bluestar className='mt-8'/>
                </div>
                <Bluestar2 className='ml-20'/>
                <div className='flex justify-center w-full mt-2'>
                        <div className='w-[60%] text-center'>
                            <p className='text-[#0A0A0A] font-semibold'>Live Project With Industry</p>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                        </div>
                </div>
            </div>
            <div className="h-[290px] bg-[#DEEEE3] w-[240px] features-baloon-green rounded-b-3xl rounded-tr-3xl">
                <div className="flex w-36 justify-center items-center h-24 ">
                <img className='' src='/class.svg'/>
                  <Greenstar className='mt-8'/>
                </div>
                <Greenstar2 className='ml-20'/>
                <div className='flex justify-center w-full mt-2'>
                        <div className='w-[60%] text-center'>
                            <p className='text-[#0A0A0A] font-semibold'>300 hours + live interactive classes</p>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                        </div>
                </div>
            </div>
            <div className="h-[290px] bg-[#FAEFD9] w-[240px] features-baloon rounded-b-3xl rounded-tr-3xl">
                <div className="flex w-36 justify-center items-center h-24 ">
                <img className='' src='/online.svg'/>
                  <Star1 className='mt-8'/>
                </div>
                <Star2 className='ml-20'/>
                <div className='flex justify-center w-full mt-2'>
                        <div className='w-[60%] text-center'>
                            <p className='text-[#0A0A0A] font-semibold'>On Demand doubt Session</p>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                        </div>
                </div>
            </div>
            <div className="h-[290px] bg-[#DCE3F3] w-[240px] features-baloon-blue rounded-b-3xl rounded-tr-3xl">
                <div className="flex w-36 justify-center items-center h-24 ">
                    <img className='' src='/searchfile.svg'/>
                  <Bluestar className='mt-8'/>
                </div>
                <Bluestar2 className='ml-20'/>
                <div className='flex justify-center w-full mt-2'>
                        <div className='w-[60%] text-center'>
                            <p className='text-[#0A0A0A] font-semibold'>CV & Interview Preparation</p>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}