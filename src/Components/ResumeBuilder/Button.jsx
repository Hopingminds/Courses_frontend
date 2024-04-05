import React, { useState } from 'react'
import ResumeBuilder from './ResumeBuilder';

const Button = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
      }
      const closeModal = () => {
        setIsModalOpen(false);
      }
    return (
        <>
            <div className='flex justify-center items-center'>
                <button onClick={openModal}>Click Me!</button>
            </div>
            <div className='fixed top-[5%] left-[20%] z-[999]'>
                {isModalOpen && (<ResumeBuilder/>)}
            </div>
        </>
    )
}

export default Button