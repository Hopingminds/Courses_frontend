import React from 'react';
import toast from 'react-hot-toast';

const CYPTechnical = ({ setActiveDetail, user, setUser }) => {
    // Ensure that user object is properly initialized
    const initialUserState = {
        trainingInternships: [{
            companyName: '',
            postName: '',
            location: '',
            duration: {
                from: '',
                to: '',
            },
        }],
        projects: [{
            projectName: '',
            projectRole: '',
            projectDescription: '',
        }],
        certifications: [{
            certificateName: '',
            certifiedBy: '',
        }],
        skills: [{
            skill: '',
            skill_lever: '',
        }],
    };

    user = { ...initialUserState, ...user };

    // Handle previous button click
    function handlePrev() {
        setActiveDetail('education');
    }

    // Handle state change for training/internships
    const handleChangeTraining = (index, e) => {
        const { name, value } = e.target;
        const newTrainings = [...user.trainingInternships];
        if (name === 'fromDate' || name === 'toDate') {
            newTrainings[index].duration[name === 'fromDate' ? 'from' : 'to'] = value;
        } else {
            newTrainings[index][name] = value;
        }
        setUser({ ...user, trainingInternships: newTrainings });
    };

    // Handle state change for projects
    const handleChangeProject = (index, e) => {
        const { name, value } = e.target;
        const newProjects = [...user.projects];
        newProjects[index][name] = value;
        setUser({ ...user, projects: newProjects });
    };

    // Handle state change for certifications
    const handleChangeCertification = (index, e) => {
        const { name, value } = e.target;
        const newCertifications = [...user.certifications];
        newCertifications[index][name] = value;
        setUser({ ...user, certifications: newCertifications });
    };

    // Handle state change for skills
    const handleChangeSkill = (index, e) => {
        const { name, value } = e.target;
        const newSkills = [...user.skills];
        newSkills[index][name] = value;
        setUser({ ...user, skills: newSkills });
    };

    // Add new training/internship
    const handleAddTraining = () => {
        const newTraining = {
            companyName: '',
            postName: '',
            location: '',
            duration: {
                from: '',
                to: '',
            },
        };
        setUser({ ...user, trainingInternships: [...user.trainingInternships, newTraining] });
    };

    // Add new project
    const handleAddProject = () => {
        const newProject = {
            projectName: '',
            projectRole: '',
            projectDescription: '',
        };
        setUser({ ...user, projects: [...user.projects, newProject] });
    };

    // Add new certification
    const handleAddCertification = () => {
        const newCertification = {
            certificateName: '',
            certifiedBy: '',
        };
        setUser({ ...user, certifications: [...user.certifications, newCertification] });
    };

    // Add new skill
    const handleAddSkill = () => {
        const newSkill = {
            skill: '',
            skill_lever: '',
        };
        setUser({ ...user, skills: [...user.skills, newSkill] });
    };

    // Delete training/internship
    const handleDeleteTraining = (index) => {
        const newTrainings = user.trainingInternships.filter((_, i) => i !== index);
        setUser({ ...user, trainingInternships: newTrainings });
    };

    // Delete project
    const handleDeleteProject = (index) => {
        const newProjects = user.projects.filter((_, i) => i !== index);
        setUser({ ...user, projects: newProjects });
    };

    // Delete certification
    const handleDeleteCertification = (index) => {
        const newCertifications = user.certifications.filter((_, i) => i !== index);
        setUser({ ...user, certifications: newCertifications });
    };

    // Delete skill
    const handleDeleteSkill = (index) => {
        const newSkills = user.skills.filter((_, i) => i !== index);
        setUser({ ...user, skills: newSkills });
    };

    // Validate required fields
    const validateFields = () => {
        const isTrainingValid = user.trainingInternships.every(training => 
            training.companyName && training.postName && training.location && training.duration.from && training.duration.to);
        const isProjectsValid = user.projects.every(project => 
            project.projectName && project.projectRole && project.projectDescription);
        const isCertificationsValid = user.certifications.every(certification => 
            certification.certificateName && certification.certifiedBy);
        const isSkillsValid = user.skills.every(skill => 
            skill.skill && skill.skill_lever);

        return isTrainingValid && isProjectsValid && isCertificationsValid && isSkillsValid;
    };

    // Handle next button click
    const handleNext = () => {
        // if (validateFields()) {
            toast.success("Submitted Successfully");
            setActiveDetail('otherinfo');
        // } else {
        //     toast.error("Please fill all required fields");
        // }
    };

    return (
        <div className='font-nu font-semibold flex flex-col gap-4 items-center w-full'>
            <div>
                <p className='font-semibold'>Technical</p>
            </div>
            <div className='flex flex-col gap-4 px-12 py-6 w-full border border-[#00000050] rounded-xl xsm:p-4'>
                {/* Trainings or Internships Section */}
                <div className='flex flex-col gap-4 w-full'>
                    <div>
                        <p className='font-pop font-semibold text-[18px] text-[#1DBF73] md:text-[14px] xsm:text-[10px]'>Trainings or Internships</p>
                    </div>
                    {user.trainingInternships.map((training, index) => (
                        <div key={index} className='flex flex-col gap-4'>
                            <div className='grid grid-cols-2 gap-8'>
                                <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                                    <label htmlFor={`companyName${index}`} className='font-nu font-semibold'>Company Name </label>
                                    <input
                                        id={`companyName${index}`}
                                        name="companyName"
                                        value={training.companyName}
                                        onChange={(e) => handleChangeTraining(index, e)}
                                        className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
                                        type="text"
                                    />
                                </div>
                                <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                                    <label htmlFor={`postName${index}`} className='font-nu font-semibold'>Post Name </label>
                                    <input
                                        id={`postName${index}`}
                                        name="postName"
                                        value={training.postName}
                                        onChange={(e) => handleChangeTraining(index, e)}
                                        className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-8'>
                                <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                                    <label htmlFor={`location${index}`} className='font-nu font-semibold'>Location </label>
                                    <input
                                        id={`location${index}`}
                                        name="location"
                                        value={training.location}
                                        onChange={(e) => handleChangeTraining(index, e)}
                                        className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
                                        type="text"
                                    />
                                </div>
                                <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                                    <label htmlFor={`fromDate${index}`} className='font-nu font-semibold'>Duration </label>
                                    <div className='flex justify-between items-center gap-2'>
                                        <input
                                            id={`fromDate${index}`}
                                            name="fromDate"
                                            value={training.duration.from}
                                            onChange={(e) => handleChangeTraining(index, e)}
                                            className='outline-none font-normal bg-[#FFFFFF] p-1 rounded-sm border border-[#00000050]'
                                            type="date"
                                        />
                                        <p className='font-nu font-light text-[15px] md:text-[14px] xsm:text-[10px]'>To</p>
                                        <input
                                            id={`toDate${index}`}
                                            name="toDate"
                                            value={training.duration.to}
                                            onChange={(e) => handleChangeTraining(index, e)}
                                            className='outline-none font-normal bg-[#FFFFFF] p-1 rounded-sm border border-[#00000050]'
                                            type="date"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    {user.trainingInternships.length > 1 && (
                                        <button
                                            onClick={() => handleDeleteTraining(index)}
                                            className='text-red-500 font-semibold text-[15px] md:text-[12px] xsm:text-[8px] self-end'>
                                            Delete
                                        </button>
                                    )}
                                </div>
                                <button
                                    onClick={handleAddTraining}
                                    className='font-nu font-extrabold md:text-[14px] xsm:text-[10px]'>
                                        + Add
                                </button>
                            </div>
                        </div>
                    ))}
                    
                </div>
                {/* Projects Section */}
                <div className='flex flex-col gap-4 w-full'>
                    <div>
                        <p className='font-pop font-semibold text-[18px] text-[#1DBF73] md:text-[14px] xsm:text-[10px]'>Projects</p>
                    </div>
                    {user.projects.map((project, index) => (
                        <div key={index} className='flex flex-col gap-4'>
                            <div className='grid grid-cols-2 gap-8'>
                                <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                                    <label htmlFor={`projectName${index}`} className='font-nu font-semibold'>Project Name </label>
                                    <input
                                        id={`projectName${index}`}
                                        name="projectName"
                                        value={project.projectName}
                                        onChange={(e) => handleChangeProject(index, e)}
                                        className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
                                        type="text"
                                    />
                                </div>
                                <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                                    <label htmlFor={`projectRole${index}`} className='font-nu font-semibold'>Your Role </label>
                                    <input
                                        id={`projectRole${index}`}
                                        name="projectRole"
                                        value={project.projectRole}
                                        onChange={(e) => handleChangeProject(index, e)}
                                        className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                                <label htmlFor={`projectDescription${index}`} className='font-nu font-semibold'>Description </label>
                                <textarea
                                    id={`projectDescription${index}`}
                                    name="projectDescription"
                                    value={project.projectDescription}
                                    onChange={(e) => handleChangeProject(index, e)}
                                    className='outline-none font-normal bg-[#FFFFFF] p-1 rounded-sm border border-[#00000050]'
                                    rows="3"
                                />
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    {user.projects.length > 1 && (
                                        <button
                                            onClick={() => handleDeleteProject(index)}
                                            className='text-red-500 font-semibold text-[15px] md:text-[12px] xsm:text-[8px] self-end'>
                                            Delete
                                        </button>
                                    )}
                                </div>
                                <button
                                    onClick={handleAddProject}
                                    className='font-nu font-extrabold md:text-[14px] xsm:text-[10px]'>
                                    + Add 
                                </button>
                            </div>
                        </div>
                    ))}
                    
                </div>
                {/* Certifications Section */}
                <div className='flex flex-col gap-4 w-full'>
                    <div>
                        <p className='font-pop font-semibold text-[18px] text-[#1DBF73] md:text-[14px] xsm:text-[10px]'>Certifications</p>
                    </div>
                    {user.certifications.map((certification, index) => (
                        <div key={index} className='flex flex-col gap-4'>
                            <div className='grid grid-cols-2 gap-8'>
                                <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                                    <label htmlFor={`certificateName${index}`} className='font-nu font-semibold'>Certificate Name </label>
                                    <input
                                        id={`certificateName${index}`}
                                        name="certificateName"
                                        value={certification.certificateName}
                                        onChange={(e) => handleChangeCertification(index, e)}
                                        className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
                                        type="text"
                                    />
                                </div>
                                <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                                    <label htmlFor={`certifiedBy${index}`} className='font-nu font-semibold'>Certified By </label>
                                    <input
                                        id={`certifiedBy${index}`}
                                        name="certifiedBy"
                                        value={certification.certifiedBy}
                                        onChange={(e) => handleChangeCertification(index, e)}
                                        className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    {user.certifications.length > 1 && (
                                        <button
                                            onClick={() => handleDeleteCertification(index)}
                                            className='text-red-500 font-semibold text-[15px] md:text-[12px] xsm:text-[8px] self-end'>
                                            Delete
                                        </button>
                                    )}
                                </div>
                                <button
                                    onClick={handleAddCertification}
                                    className='font-nu font-extrabold md:text-[14px] xsm:text-[10px]'>
                                        + Add
                                </button>
                            </div>
                        </div>
                    ))}
                    
                </div>
                {/* Skills Section */}
                <div className='flex flex-col gap-4 w-full'>
                    <div>
                        <p className='font-pop font-semibold text-[18px] text-[#1DBF73] md:text-[14px] xsm:text-[10px]'>Skills</p>
                    </div>
                    {user.skills.map((skill, index) => (
                        <div key={index} className='flex flex-col gap-4'>
                            <div className='grid grid-cols-2 gap-8'>
                                <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                                    <label htmlFor={`skill${index}`} className='font-nu font-semibold'>Skill </label>
                                    <input
                                        id={`skill${index}`}
                                        name="skill"
                                        value={skill.skill}
                                        onChange={(e) => handleChangeSkill(index, e)}
                                        className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
                                        type="text"
                                    />
                                </div>
                                <div className='flex flex-col gap-1 text-[15px] md:text-[12px] xsm:text-[8px]'>
                                    <label htmlFor={`skill_lever${index}`} className='font-nu font-semibold'>Skill Level </label>
                                    <input
                                        id={`skill_lever${index}`}
                                        name="skill_lever"
                                        value={skill.skill_lever}
                                        onChange={(e) => handleChangeSkill(index, e)}
                                        className='outline-none font-normal bg-[#FFFFFF] py-1 px-2 rounded-sm border border-[#00000050]'
                                        type="number"
                                        max={10}
                                    />
                                </div>
                            </div>
                            
                            <div className='flex justify-between'>
                                <div>
                                    {user.skills.length > 1 && (
                                        <button
                                            onClick={() => handleDeleteSkill(index)}
                                            className='text-red-500 font-semibold text-[15px] md:text-[12px] xsm:text-[8px] self-end'>
                                            Delete
                                        </button>
                                    )}
                                </div>
                                <button
                                    onClick={handleAddSkill}
                                    className='font-nu font-extrabold md:text-[14px] xsm:text-[10px]'>
                                        + Add
                                </button>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
            <div className='flex justify-between mt-6 w-full'>
                <div onClick={handlePrev} className='bg-[#1DBF73] flex items-center rounded-full px-4 py-2 gap-4 cursor-pointer xsm:gap-0 xsm:px-2 xsm:py-1'>
                    <img className='w-7 md:w-6 xsm:w-5' src="../Icons/resumeleftarrow.svg" alt="" />
                    <button className="text-white font-pop font-medium text-[18px] xsm:text-[10px] xsm:py-1 xsm:px-2 md:text-[14px]">Previous</button>
                </div>
                <div onClick={handleNext} className='bg-[#1DBF73] flex items-center rounded-full px-4 py-2 gap-4 cursor-pointer xsm:gap-0 xsm:px-2 xsm:py-1'>
                    <button className="text-white font-pop font-medium text-[18px] xsm:text-[10px] xsm:py-1 xsm:px-2 md:text-[14px]">Next</button>
                    <img className='w-7 md:w-6 xsm:w-5' src="../Icons/resumerightarrow.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default CYPTechnical;
