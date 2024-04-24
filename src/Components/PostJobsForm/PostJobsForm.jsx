import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const INITIAL_FORM_STATE = {
    jobTitle: '',
    employmentType: '',
    departmentRoleCategory: '',
    workMode: '',
    workExperience: { minExperience: '', maxExperience: '' },
    annualSalaryRange: { currency: 'INR', minSalary: '', maxSalary: '' },
    companyIndustry: '',
    educationalQualification: '',
    jobDescription: ''
};

const PostJobsForm = () => {
    const navigate = useNavigate();
    const [jd, setJd] = useState('');
    const [keySkill, setKeySkill] = useState('');
    const [addedSkills, setAddedSkills] = useState([]);
    const [jobLocation, setJobLocation] = useState('');
    const [addedLocations, setAddedLocations] = useState([]);
    const [formData, setFormData] = useState({
        jobTitle: '',
        employmentType: '',
        departmentRoleCategory: '',
        workMode: '',
        workExperience: { minExperience: '', maxExperience: '' },
        annualSalaryRange: { currency: 'INR', minSalary: '', maxSalary: '' },
        companyIndustry: '',
        educationalQualification: '',
        jobDescription: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'currency' || name === 'minSalary' || name === 'maxSalary') {
            // Update annualSalaryRange state when currency or salary values change
            setFormData({
                ...formData,
                annualSalaryRange: {
                    ...formData.annualSalaryRange,
                    [name]: value
                }
            });
        }
        else if (name === 'minExperience' || name === 'maxExperience') {
            // Update workExperience state when min/max experience changes
            setFormData({
                ...formData,
                workExperience: {
                    ...formData.workExperience,
                    [name]: value
                }
            });
        }
        else {
            // Update other form data fields normally
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleAddSkill = () => {
        if (keySkill.trim() !== '') {
            setAddedSkills([...addedSkills, keySkill.trim()]);
            setKeySkill('');
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        const updatedSkills = addedSkills.filter(skill => skill !== skillToRemove);
        setAddedSkills(updatedSkills);
    };

    const handleAddLocation = () => {
        if (jobLocation.trim() !== '') {
            setAddedLocations([...addedLocations, jobLocation.trim()]);
            setJobLocation('');
        }
    };

    const handleRemoveLocation = (locationToRemove) => {
        const updatedLocations = addedLocations.filter(location => location !== locationToRemove);
        setAddedLocations(updatedLocations);
    };

    const handleKeyPress = (e, handler) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handler();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const requiredFields = [
            'jobTitle',
            'employmentType',
            'departmentRoleCategory',
            'workMode',
            'workExperience.minExperience',
            'workExperience.maxExperience',
            'annualSalaryRange.minSalary',
            'annualSalaryRange.maxSalary',
            'companyIndustry',
            'educationalQualification'
        ];
    
        // Check if any required field is empty
        const isEmpty = requiredFields.some(field => {
            const nestedFields = field.split('.');
            let value = formData;
            for (let nestedField of nestedFields) {
                value = value[nestedField];
                if (value === '' || value === undefined) {
                    return true;
                }
            }
            return false;
        });
    
        // Check if job description (value) is empty or only whitespace
        if (!jd || jd.trim() === '') {
            toast.error('Please provide a job description.');
            return;
        }
    
        // If any required field is empty, display error toast and prevent submission
        if (isEmpty) {
            toast.error('Please fill out all required fields.');
            return;
        }
    
        // Proceed with form submission if all validations pass
        const newFormData = {
            ...formData,
            addedSkills: addedSkills,
            addedLocations: addedLocations,
            jobDescription: jd
        };
    
        console.log('Submitting Form Data:', newFormData);
    
        // Perform further actions with the form data, such as submitting to an API
        // Reset form state after successful submission
        setFormData(INITIAL_FORM_STATE);
        setAddedSkills([]);
        setAddedLocations([]);
        setJd('');
        setKeySkill('');
        setJobLocation('');
        toast.success("Job Posted Successfully");
    
        setTimeout(() => {
            navigate("/managejobs");
        }, 2000);
    };
    
    


    return (
        <div className="bg-[#e6e6e6] py-[3%] px-[20%] pr">
            <div className="bg-[#fafafa] ">
                <div className="bg-white px-4 py-2 text-[12px] font-pop flex flex-col gap-6">
                {/* Heading */}
                <div className="flex flex-col ">
                    <p className="text-[24px] text-gray-600">
                    Post a Job - Hot Vacancy
                    </p>
                    {/* <p className="text-gray-500 text-[14px]">
                    Begin from scratch or{" "}
                    <span className="text-blue-600">prefill from previous jobs</span>
                    </p> */}
                </div>
                {/* Job title */}
                <div className="grid grid-cols-[1.5fr,1fr] gap-4">
                    <div>
                    <p className="font-pop font-semibold ">
                        Job title / Designation{" "}
                        <span className="text-red-500 text-[16px]">*</span>
                    </p>
                    <input
                        type="text"
                        placeholder="Enter the Job Title"
                        className="border outline-none px-4 py-2 text-[14px] w-full"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        name="jobTitle"
                    />
                    </div>
                    {/* Employment type */}
                    <div>
                        <p className="font-pop  font-semibold ">
                            Employment type{" "}
                            <span className="text-red-500 text-[16px]">*</span>
                        </p>
                        <select
                            name="employmentType"
                            className="border outline-none px-2 py-2 text-[14px] w-full"
                            value={formData.employmentType}
                            onChange={handleChange}
                        >
                            <option value="" disabled hidden selected>Select Employment Type</option>
                            <option value="Full Time, Permanent">Full Time, Permanent</option>
                            <option value="Full Time, Temporary/Contractual">Full Time, Temporary/Contractual</option>
                            <option value="Full Time, Freelance/Homebased">Full Time, Freelance/Homebased</option>
                            <option value="Part Time, Permanent">Part Time, Permanent</option>
                            <option value="Part Time, Temporary/Contractual">Part Time, Temporary/Contractual</option>
                            <option value="Part Time, Freelance/Homebased">Part Time, Freelance/Homebased</option>
                        </select>
                    </div>
                </div>
                {/* Key skills */}
                <div className="w-full">
                    <p className="font-pop font-semibold">
                    Key skills <span className="text-red-500 text-[16px]">*</span>
                    </p>
                    <input
                    type="text"
                    placeholder="Add skills that are crucial for this job"
                    className="border outline-none px-2 py-4 text-[14px] w-full"
                    value={keySkill}
                    onChange={(e) => setKeySkill(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e, handleAddSkill)}
                    />
                </div>
                {/* Display added key skills as tags */}
                {addedSkills.length > 0 && (
                    <div className="flex flex-col">
                    <p className="font-pop font-semibold">Added Key Skills</p>
                    <div className="flex flex-wrap gap-2">
                        {addedSkills.map((skill, index) => (
                        <p
                            key={index}
                            onClick={() => handleRemoveSkill(skill)}
                            className="bg-green-500 text-white w-max px-2 py-1 cursor-pointer"
                        >
                            {skill}
                        </p>
                        ))}
                    </div>
                    </div>
                )}
                {/* Department & Role category */}
                <div className="w-[65%]">
                    <p className="font-pop  font-semibold">
                    Department & Role category{" "}
                    <span className="text-red-500 text-[16px]">*</span>
                    </p>
                    <select
                        name="departmentRoleCategory"
                        className="border outline-none px-2 py-2 text-[14px] w-full"
                        value={formData.departmentRoleCategory}
                        onChange={handleChange}
                    >
                    <option className="border-none" value="Engineering - Software & QA" selected>
                        Engineering - Software & QA
                    </option>
                    <option className="border-none" value="Customer Success, Service & Operations">
                        Customer Success, Service & Operations
                    </option>
                    <option className="border-none" value="IT & Information Security">
                        IT & Information Security
                    </option>
                    <option className="border-none" value="Human Resources">
                        Human Resources
                    </option>
                    <option className="border-none" value="Marketing & Communication">
                        Marketing & Communication
                    </option>
                    <option className="border-none" value="Sales & Business Development">
                        Sales & Business Development
                    </option>
                    </select>
                </div>
                {/* Work mode */}
                <div className="w-[65%]">
                    <p className="font-pop  font-semibold">
                    Work mode <span className="text-red-500 text-[16px]">*</span>
                    </p>
                    <select
                        name="workMode"
                        className="border outline-none px-2 py-2 text-[14px] w-full"
                        value={formData.workMode}
                        onChange={handleChange}
                    >
                    <option className="border-none" value="In office" selected>
                        In office
                    </option>
                    <option className="border-none" value="Hybrid">
                        Hybrid
                    </option>
                    <option className="border-none" value="Remote">
                        Remote
                    </option>
                    </select>
                </div>
                {/* Job location */}
                <div className="w-full">
                    <p className="font-pop font-semibold">
                    Job location (maximum 3){" "}
                    <span className="text-red-500 text-[16px]">*</span>
                    </p>
                    <input
                    type="text"
                    placeholder="Add locations"
                    className="border outline-none px-4 py-2 text-[14px] w-full"
                    value={jobLocation}
                    onChange={(e) => setJobLocation(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e, handleAddLocation)}
                    />
                </div>
                {/* Display added job locations as tags */}
                {addedLocations.length > 0 && (
                    <div className="flex flex-col">
                    <p className="font-pop font-semibold">Added Job Locations</p>
                    <div className="flex flex-wrap gap-2">
                        {addedLocations.map((location, index) => (
                        <p
                            key={index}
                            className="bg-blue-500 text-white w-max px-2 py-1 cursor-pointer"
                            onClick={() => handleRemoveLocation(location)}
                        >
                            {location}
                        </p>
                        ))}
                    </div>
                    </div>
                )}
                {/* Work experience */}
                <div className="w-[65%]">
                    <p className="font-pop font-semibold">
                        Work experience (years) <span className="text-red-500 text-[16px]">*</span>
                    </p>
                    <div className="flex items-center gap-2">
                        <select
                            name="minExperience"
                            className="border outline-none px-2 py-2 text-[14px] w-full"
                            value={formData.workExperience.min}
                            onChange={handleChange}
                        >
                            {/* Add options for minimum years of experience */}
                            {/* Example: */}
                            <option value="0" selected>0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            {/* Add more options as needed */}
                        </select>
                        <p className="text-gray-500 text-[16px]">To</p>
                        <select
                            name="maxExperience"
                            className="border outline-none px-2 py-2 text-[14px] w-full"
                            value={formData.workExperience.max}
                            onChange={handleChange}
                        >
                            {/* Add options for maximum years of experience */}
                            {/* Example: */}
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10+">10+</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                </div>
                {/* Annual salary range */}
                <div className="w-[65%]">
                    <p className="font-pop font-semibold">
                        Annual salary range <span className="text-red-500 text-[16px]">*</span>
                    </p>
                    <div className="flex items-center gap-2">
                        <select
                            name="currency"
                            className="border outline-none px-2 py-2 text-[14px]"
                            value={formData.annualSalaryRange.currency}
                            onChange={handleChange}
                        >
                            {/* Add options for currency selection */}
                            {/* Example: */}
                            <option value="INR" selected>₹</option>
                            <option value="USD">$</option>
                            {/* Add more currency options as needed */}
                        </select>
                        <select
                            name="minSalary"
                            className="border outline-none px-2 py-2 text-[14px] w-full"
                            value={formData.annualSalaryRange.minSalary}
                            onChange={handleChange}
                        >
                            {/* Add options for minimum salary range */}
                            {/* Example: */}
                            <option value="10000" selected>10,000</option>
                            <option value="20000">20,000</option>
                            {/* Add more salary options as needed */}
                        </select>
                        <p className="text-gray-500 text-[16px]">To</p>
                        <select
                            name="maxSalary"
                            className="border outline-none px-2 py-2 text-[14px] w-full"
                            value={formData.annualSalaryRange.maxSalary}
                            onChange={handleChange}
                        >
                            {/* Add options for maximum salary range */}
                            {/* Example: */}
                            <option value="50000" selected>50,000</option>
                            <option value="100000">100,000</option>
                            {/* Add more salary options as needed */}
                        </select>
                    </div>
                </div>
                {/* Company industry */}
                <div className="w-[65%]">
                    <p className="font-pop  font-semibold">
                    Company industry{" "}
                    <span className="text-red-500 text-[16px]">*</span>
                    </p>
                    <select
                        name="companyIndustry"
                        className="border outline-none px-2 py-2 text-[14px] w-full"
                        value={formData.companyIndustry}
                        onChange={handleChange}
                    >
                    <option className="border-none" value="IT Services & Consulting" selected>
                        IT Services & Consulting
                    </option>
                    <option className="border-none" value="Electronic Components / Semiconductors">
                        Electronic Components / Semiconductors
                    </option>
                    <option className="border-none" value="Software Product">
                        Software Product
                    </option>
                    <option className="border-none" value="Banking">
                        Banking
                    </option>
                    <option className="border-none" value="Financial Services">
                        Financial Services
                    </option>
                    <option className="border-none" value="E-Learning / EdTech">
                        E-Learning / EdTech
                    </option>
                    </select>
                </div>
                {/* Educational qualification */}
                <div className="w-[65%]">
                    <p className="font-pop  font-semibold">
                    Educational qualification
                    <span className="text-red-500 text-[16px]">*</span>
                    </p>
                    <select
                        name="educationalQualification"
                        className="border outline-none px-2 py-2 text-[14px] w-full"
                        value={formData.educationalQualification}
                        onChange={handleChange}
                    >
                    <option className="border-none" value="Graduation Not Required" selected>
                        Graduation Not Required
                    </option>
                    <option className="border-none" value="Graduate">
                        Graduate
                    </option>
                    <option className="border-none" value="Postgraduate">
                        Postgraduate
                    </option>
                    <option className="border-none" value="Doctoral/Ph.D">
                        Doctoral/Ph.D
                    </option>
                    </select>
                </div>
                {/* Starts From Job Description */}
                <div className="flex flex-col h-[230px]">
                    <p className="font-pop  font-semibold">
                    Job description{" "}
                    <span className="text-red-500 text-[16px]">*</span>
                    </p>
                    <ReactQuill
                    theme="snow"
                    value={jd}
                    onChange={setJd}
                    className="h-[150px]"
                    />
                </div>
                <div className="flex justify-center">
                    <button onClick={handleSubmit} className="font-pop text-[18px] w-max text-white bg-[#1FC074] px-16 py-2 rounded-xl ">
                    Post Job
                    </button>
                </div>
                </div>
            </div>
            <Toaster position="top-center" />
        </div>
    );
};

export default PostJobsForm;
