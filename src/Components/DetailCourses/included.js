
import React, { useState } from 'react'
import NewModal from './modal'


const Included = ({ curiculum }) => {

    const [courseData, setCourseData] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [type, setType] = useState("");

    const handleModalOpen = () => {
        setModalOpen(!modalOpen); // Toggle modalOpen state
    };


    const data = [
        {
            svg: "/Icons/project.svg",
            title: "One project File",
        },
        {
            svg: "/Icons/module.svg",
            title: "32 Modules",
        },
        {
            svg: "/Icons/assignment.svg",
            title: "Assignments",
        },
        {
            svg: "/Icons/notes.svg",
            title: "Notes",
        },
    ]
    // console.log(curiculum)
    const handleClick = (ind) => {
        console.log(ind)
        setModalOpen(true)
        if (ind === 0) {
            setType("Project")
            let temp = curiculum.map((val, ind) => { return  {title:val?.chapter_name , allData:val?.project} })
            console.log(temp)
            setCourseData(temp)
        }
        if (ind === 1) {
            setType("Module")
            let temp = curiculum.map((val, ind) => { return { title: val?.chapter_name, allData: val?.lessons } })
            console.log(temp)
            setCourseData(temp)
        }
        if (ind === 2) {
            setType("Assignment")
            let temp = curiculum.map((val, ind) => { return { title: val?.chapter_name, allData: val?.lessons } })
            console.log(temp)
            setCourseData(temp)
        }
    }
    

    return (
        <>
            <div className='grid grid-cols-4 gap-3'>
                {
                    data?.map((val, ind) => {
                        return (
                            <div className='border border-green-500 rounded-[12px] flex flex-col justify-center items-center p-7 gap-2 cursor-pointer' key={ind} onClick={() => handleClick(ind)}>
                                <img  src={val.svg} alt={val?.title} className='h-[40px] w-auto' />
                                <h5 className='text-[1rem] font-semibold'>{val?.title}</h5>
                            </div>
                        )
                    })
                }
            </div>
            {modalOpen &&
                <NewModal handleModalOpen={handleModalOpen} datas={courseData} type={type} />
            }
        </>
    )
}

export default Included