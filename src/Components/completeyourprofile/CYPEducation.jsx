import React, { useState } from 'react'
import toast from 'react-hot-toast';

const CYPEducation = ({setFinalData, setActiveDetail}) => {
    const [educationFields, setEducationFields] = useState([
        { degree: '', university: '', passingYear: '', percentage: '' }
    ]);

    const handleAddFields = () => {
        setEducationFields([...educationFields, { degree: '', university: '', passingYear: '', percentage: '' }]);
    };

    const handleChangeInput = (index, event) => {
        const newFields = [...educationFields];
        newFields[index][event.target.name] = event.target.value;
        setEducationFields(newFields);
    };


    function handleNext() {
        const isAnyFieldEmpty = educationFields.some((field) =>
            field.degree.trim() === '' ||
            field.university.trim() === '' ||
            field.passingYear.trim() === '' ||
            field.percentage.trim() === ''
        );

        if (isAnyFieldEmpty) {
            toast.error("Fill all field to move forward");
        } else {
            console.log(educationFields);
            setFinalData(prevData => ({...prevData,educationFields}));
            setActiveDetail('technical');
        }
    }

    function handlePrev(){
        setActiveDetail('Basic')
    }
    return (
        <div className='font-nu font-semibold flex flex-col gap-4 items-center w-full'>
            <div>
                <p className='font-semibold'>Education</p>
            </div>
            <div className='flex  flex-col gap-4 px-12 py-6 w-full border border-[#00000050] rounded-xl '>
				{educationFields.map((field, index) => (
					<div key={index} className='flex flex-col gap-4  py-2 w-full'>
						<div className='grid grid-cols-2  gap-8 w-full'>
							<div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
								<label htmlFor={`degree${index}`} className='font-nu font-semibold'>Degree</label>
								<input
									id={`degree${index}`}
									name="degree"
									value={field.degree}
									onChange={(e) => handleChangeInput(index, e)}
									className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
									type="text"
								/>
							</div>
							<div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
								<label htmlFor={`university${index}`} className='font-nu font-semibold'>College/University</label>
								<input
									id={`university${index}`}
									name="university"
									value={field.university}
									onChange={(e) => handleChangeInput(index, e)}
									className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
									type="text"
								/>
							</div>
						</div>
						<div className='grid grid-cols-2  gap-8 w-full'>
							<div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
								<label htmlFor={`passingYear${index}`} className='font-nu font-semibold'>Pass Yearing</label>
								<input
									id={`passingYear${index}`}
									name="passingYear"
									value={field.passingYear}
									onChange={(e) => handleChangeInput(index, e)}
									className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
									type="text"
								/>
							</div>
							<div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
								<label htmlFor={`percentage${index}`} className='font-nu font-semibold'>Percentage</label>
								<input
									id={`percentage${index}`}
									name="percentage"
									value={field.percentage}
									onChange={(e) => handleChangeInput(index, e)}
									className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
									type="text"
								/>
							</div>
						</div>
					</div>
				))}
				<div className='flex justify-end'>
					<button onClick={handleAddFields} className='font-nu font-extrabold md:text-[14px] xsm:text-[10px]'>+ Add</button>
				</div>
			</div>
			<div className='flex justify-between items-end w-full'>
				<div onClick={handlePrev} className='bg-[#1DBF73] flex items-center rounded-full px-4 py-2 gap-4 cursor-pointer xsm:gap-0'>
					<img className='w-7 md:w-6 xsm:w-5' src="../Icons/resumeleftarrow.svg" alt="" />
					<button  className="text-white font-pop font-medium text-[18px] xsm:text-[10px] xsm:py-1 xsm:px-2 md:text-[14px]">Previous</button>
				</div>
				<div onClick={handleNext} className='bg-[#1DBF73] flex items-center rounded-full px-4 py-2 gap-4 cursor-pointer xsm:gap-0'>
					<button  className="text-white font-pop font-medium text-[18px] xsm:text-[10px] xsm:py-1 xsm:px-2 md:text-[14px]">Submit</button>
					<img className='w-7 md:w-6 xsm:w-5' src="../Icons/resumerightarrow.svg" alt="" />
				</div>
			</div>
        </div>
    )
}

export default CYPEducation