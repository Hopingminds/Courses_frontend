import React, { useState } from 'react';
import NewModal from './modal';

const Included = ({ curiculum, title }) => {
    const [courseData, setCourseData] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const [type, setType] = useState('');

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const data = [
        {
            svg: '/Icons/project.svg',
            title: ' Project Files',
        },
        {
            svg: '/Icons/module.svg',
            title: curiculum?.length + ' Modules',
        },
        {
            svg: '/Icons/assignment.svg',
            title: 'Assignments',
        },
        {
            svg: '/Icons/notes.svg',
            title: 'Notes',
        },
    ];

    const handleClick = (ind) => {
        if (ind === 0) {
            setType('Project');
            let temp = curiculum.map((val) => ({ title: val?.chapter_name, allData: val?.project }));
            setCourseData(temp);
        }
        if (ind === 1) {
            setType('Module');
            let temp = curiculum.map((val) => ({ title: val?.chapter_name, allData: val?.lessons }));
            setCourseData(temp);
        }
        if (ind === 2) {
            setType('Assignment');
            let temp = curiculum.map((val) => ({ title: val?.chapter_name, allData: val?.lessons }));
            setCourseData(temp);
        }
        if (ind === 3) {
            setType('Notes');
            let temp = curiculum.map((val) => ({ title: val?.chapter_name, allData: val?.lessons }));
            setCourseData(temp);
        }
        handleModalOpen(); 
    };

    return (
        <>
            <div className="grid grid-cols-4 gap-3 xsm:grid-cols-2">
                {data?.map((val, ind) => (
                    <div
                        className="border border-green-500 rounded-[12px] flex flex-col justify-center items-center p-7 gap-3 cursor-pointer xsm:p-3"
                        key={ind}
                        onClick={() => handleClick(ind)}
                    >
                        <img src={val.svg} alt={val?.title} className="h-[40px] w-auto xsm:h-[35px]" />
                        <h5 className="text-[0.9rem] font-semibold xsm:text-[14px] text-center">{val?.title}</h5>
                    </div>
                ))}
            </div>
            {modalOpen && <NewModal handleModalOpen={handleModalOpen} handleModalClose={handleModalClose} datas={courseData} type={type} title={title} />}
        </>
    );
};

export default Included;
