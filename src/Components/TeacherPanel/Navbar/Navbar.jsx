import React, { useState } from 'react'
import bell from '../../../Assets/Icons/tpbell.svg'
import Profile from '../../../Assets/Icons/tpprofile.svg'
import Arrow from '../../../Assets/Icons/tparrow.svg'
import ProfilePurple from '../../../Assets/Icons/tpnavbarprofile.svg'
import Logout from '../../../Assets/Icons/tplogoutred.svg'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const[showMenu,setShowMenu] = useState(false);

    function handleShowMenu(){
        setShowMenu(!showMenu);
    }

    function goToProfile(){
        navigate('/teacherpanel/userprofile');
        setShowMenu(false);
    }

    return (
        <div className='bg-[#000000] w-full text-[#FFFFFF] px-6 py-4 font-int flex justify-between'>
            <div>
                <p className='font-semibold text-[25px]'>Hii, Abc</p>
            </div>
            <div className='flex gap-6'>
                <div className='bg-[#808080] flex justify-center items-center h-[35px] w-[35px] rounded-full relative'>
                    <img className='w-6 h-6' src={bell} alt="" />
                    <div className='w-2 h-2 bg-[#000000CC] rounded-full absolute top-[15%] right-[25%]'></div>
                </div>
                <div onClick={handleShowMenu} className='flex items-center gap-2 bg-[#808080] h-[35px] px-2 rounded-full paste-button cursor-pointer'>
                    <img className='w-6 h-6' src={Profile} alt="" />
                    <img className={`w-3 transition-transform duration-500 ${showMenu?'rotate-180':'rotate-0'}`} src={Arrow} alt="" />
                    {showMenu &&
                        <div class="dropdown-content text-[#5B5B5B] py-2 text-[12px] bg-white rounded-xl">
                            <div onClick={goToProfile} className='flex items-center gap-2 py-2 px-4'>
                                <div className='bg-[#FAEDFF] p-2 rounded-full'>
                                    <img className='w-4 h-4' src={ProfilePurple} alt="" />
                                </div>
                                <p>My Profile</p>
                            </div>
                            <div className='flex items-center gap-2 py-2 px-4'>
                                <div className='bg-[#FFEDED] p-2 rounded-full'>
                                    <img className='w-4 h-4' src={Logout} alt="" />
                                </div>
                                <p>Log Out</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar