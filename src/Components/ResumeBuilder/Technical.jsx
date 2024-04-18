import React, { useState } from 'react';

const Technical = ({fun}) => {
  const [trainings, setTrainings] = useState([{ companyName: '', postName: '', location: '', fromDate: '', toDate: '' }]);
  const [projects, setProjects] = useState([{ projectName: '', projectRole: '', projectDescription: '' }]);
  const [certifications, setCertifications] = useState([{ certificateName: '', certifiedBy: '' }]);
  const [skills, setSkills] = useState([{ skill: '', skillLevel: '' }]);

  const handleAddTraining = () => {
    setTrainings([...trainings, { companyName: '', postName: '', location: '', fromDate: '', toDate: '' }]);
  };

  const handleAddProject = () => {
    setProjects([...projects, { projectName: '', projectRole: '', projectDescription: '' }]);
  };

  const handleAddCertification = () => {
    setCertifications([...certifications, { certificateName: '', certifiedBy: '' }]);
  };

  const handleAddSkill = () => {
    setSkills([...skills, { skill: '', skillLevel: '' }]);
  };

  const handleChangeTraining = (index, event) => {
    const newTrainings = [...trainings];
    newTrainings[index][event.target.name] = event.target.value;
    setTrainings(newTrainings);
  };

  const handleChangeProject = (index, event) => {
    const newProjects = [...projects];
    newProjects[index][event.target.name] = event.target.value;
    setProjects(newProjects);
  };

  const handleChangeCertification = (index, event) => {
    const newCertifications = [...certifications];
    newCertifications[index][event.target.name] = event.target.value;
    setCertifications(newCertifications);
  };

  const handleChangeSkill = (index, event) => {
    const newSkills = [...skills];
    newSkills[index][event.target.name] = event.target.value;
    setSkills(newSkills);
  };

    function handleNext(){
        fun('otherinfo');
    }

    function handlePrev(){
        fun('education')
    }


  return (
    <div className='flex flex-col justify-between  py-4 px-4 h-[70vh] overflow-auto scroll-m-0'>
      {/* Trainings or Internships Section */}
      <div className='flex flex-col gap-4'>
        <div>
          <p className='font-pop font-semibold text-[18px] text-[#1DBF73] md:text-[14px] xsm:text-[10px]'>Trainings or Internships</p>
        </div>
          {trainings.map((training, index) => (
            <div key={index} className='flex flex-col gap-4'>
              <div className='grid grid-cols-2 gap-8'>
                <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                  <label htmlFor={`companyName${index}`} className='font-nu font-semibold'>Company Name</label>
                  <input
                    id={`companyName${index}`}
                    name="companyName"
                    value={training.companyName}
                    onChange={(e) => handleChangeTraining(index, e)}
                    className='bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md outline-none'
                    type="text"
                  />
                </div>
                <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                  <label htmlFor={`postName${index}`} className='font-nu font-semibold'>Post Name</label>
                  <input
                    id={`postName${index}`}
                    name="postName"
                    value={training.postName}
                    onChange={(e) => handleChangeTraining(index, e)}
                    className='bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md  outline-none'
                    type="text"
                  />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-8'>
                <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                  <label htmlFor={`location${index}`} className='font-nu font-semibold'>Location</label>
                  <input
                    id={`location${index}`}
                    name="location"
                    value={training.location}
                    onChange={(e) => handleChangeTraining(index, e)}
                    className='bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md outline-none'
                    type="text"
                  />
                </div>
                <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                  <label htmlFor={`fromDate${index}`} className='font-nu font-semibold'>Duration</label>
                  <div className='flex justify-between'>
                    <input
                      id={`fromDate${index}`}
                      name="fromDate"
                      value={training.fromDate}
                      onChange={(e) => handleChangeTraining(index, e)}
                      className='bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md outline-none'
                      type="date"
                    />
                    <p className='font-nu font-light text-[20px] md:text-[14px] xsm:text-[10px]'>To</p>
                    <input
                      id={`toDate${index}`}
                      name="toDate"
                      value={training.toDate}
                      onChange={(e) => handleChangeTraining(index, e)}
                      className='bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md outline-none'
                      type="date"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className='flex justify-end'>
            <button onClick={handleAddTraining} className='font-nu font-extrabold md:text-[14px] xsm:text-[10px]'>+ Add</button>
          </div>
        </div>

      {/* Projects Section */}
      <div className='flex flex-col gap-4'>
        <div>
          <p className='font-pop font-semibold text-[18px] text-[#1DBF73] md:text-[14px] xsm:text-[10px]'>Projects</p>
        </div>
        {projects.map((project, index) => (
          <div key={index} className='flex flex-col gap-4'>
            <div className='grid grid-cols-2 gap-8'>
              <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                <label htmlFor={`projectName${index}`} className='font-nu font-semibold'>Project Name</label>
                <input
                  id={`projectName${index}`}
                  name="projectName"
                  value={project.projectName}
                  onChange={(e) => handleChangeProject(index, e)}
                  className='bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md outline-none'
                  type="text"
                />
              </div>
              <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                <label htmlFor={`projectRole${index}`} className='font-nu font-semibold'>Project Role</label>
                <input
                  id={`projectRole${index}`}
                  name="projectRole"
                  value={project.projectRole}
                  onChange={(e) => handleChangeProject(index, e)}
                  className='bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md outline-none'
                  type="text"
                />
              </div>
            </div>
            <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
              <label htmlFor={`projectDescription${index}`} className='font-nu font-semibold'>Project Description</label>
              <textarea
                id={`projectDescription${index}`}
                name="projectDescription"
                value={project.projectDescription}
                onChange={(e) => handleChangeProject(index, e)}
                className='bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md outline-none'
                placeholder='Project Information'
              />
            </div>
          </div>
        ))}
        <div className='flex justify-end'>
          <button onClick={handleAddProject} className='font-nu font-extrabold md:text-[14px] xsm:text-[10px]'>+ Add</button>
        </div>
      </div>


      {/* Certifications Section */}
      <div className='flex flex-col gap-4'>
        <div>
          <p className='font-pop font-semibold text-[18px] text-[#1DBF73] md:text-[14px] xsm:text-[10px]'>Certifications</p>
        </div>
        {certifications.map((certification, index) => (
          <div key={index} className='flex flex-col gap-4'>
            <div className='grid grid-cols-2 gap-8'>
              <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                <label htmlFor={`certificateName${index}`} className='font-nu font-semibold'>Certificate Name</label>
                <input
                  id={`certificateName${index}`}
                  name="certificateName"
                  value={certification.certificateName}
                  onChange={(e) => handleChangeCertification(index, e)}
                  className='bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md outline-none'
                  type="text"
                />
              </div>
              <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                <label htmlFor={`certifiedBy${index}`} className='font-nu font-semibold'>Certified By</label>
                <input
                  id={`certifiedBy${index}`}
                  name="certifiedBy"
                  value={certification.certifiedBy}
                  onChange={(e) => handleChangeCertification(index, e)}
                  className='bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md outline-none'
                  type="text"
                />
              </div>
            </div>
          </div>
        ))}
        <div className='flex justify-end'>
          <button onClick={handleAddCertification} className='font-nu font-extrabold md:text-[14px] xsm:text-[10px]'>+ Add</button>
        </div>
      </div>

      {/* Skills Section */}
      <div className='flex flex-col gap-4'>
        <div>
          <p className='font-pop font-semibold text-[18px] text-[#1DBF73] md:text-[14px] xsm:text-[10px]'>Skills</p>
        </div>
        {skills.map((skill, index) => (
          <div key={index} className='flex flex-col gap-4'>
            <div className='grid grid-cols-2 gap-8'>
              <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                <label htmlFor={`skill${index}`} className='font-nu font-semibold'>Skill</label>
                <input
                  id={`skill${index}`}
                  name="skill"
                  value={skill.skill}
                  onChange={(e) => handleChangeSkill(index, e)}
                  className='bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md outline-none'
                  type="text"
                />
              </div>
              <div className='flex flex-col text-[15px] md:text-[12px] xsm:text-[8px]'>
                <label htmlFor={`skillLevel${index}`} className='font-nu font-semibold'>Skill Level</label>
                <input
                  id={`skillLevel${index}`}
                  name="skillLevel"
                  value={skill.skillLevel}
                  onChange={(e) => handleChangeSkill(index, e)}
                  className='bg-[#F9F9F9] py-1 px-2 rounded-md shadow-md outline-none'
                  type="text"
                />
              </div>
            </div>
          </div>
        ))}
        <div className='flex justify-end'>
          <button onClick={handleAddSkill} className='font-nu font-extrabold md:text-[14px] xsm:text-[10px]'>+ Add</button>
        </div>
      </div>

      {/* Buttons Section */}
      <div className='flex justify-between mt-6'>
        <div onClick={handlePrev} className='bg-[#1DBF73] flex items-center rounded-full px-4 py-2 gap-4 cursor-pointer xsm:gap-0'>
          <img className='w-7 md:w-6 xsm:w-5' src="../Icons/resumeleftarrow.svg" alt="" />
          <button  className="text-white font-pop font-medium text-[18px] xsm:text-[10px] xsm:py-1 xsm:px-2 md:text-[14px]">Previous</button>
        </div>
        <div onClick={handleNext}  className='bg-[#1DBF73] flex items-center rounded-full px-4 py-2 gap-4 cursor-pointer xsm:gap-0'>
          <button className="text-white font-pop font-medium text-[18px] xsm:text-[10px] xsm:py-1 xsm:px-2 md:text-[14px]">Submit</button>
          <img className='w-7 md:w-6 xsm:w-5' src="../Icons/resumerightarrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Technical;
