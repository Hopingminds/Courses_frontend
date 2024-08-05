import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ProfileIcon from "../../Assets/Images/ProfileIcon.png";
import Edit from "../../Assests/Icons/edit.svg";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from "../../Api/api";

const INITIAL_FORM_STATE = {
  logoUrl: "",
  position: "",
  employmentType: "",
  departmentRoleCategory: "",
  company: "",
  workMode: "",
  workExperience: { from: "", to: "",isFresher:false },
  annual_salary_range: { currency: "INR", from: "", to: "" },
  companyIndustry: "",
  educationalQualification: "",
  specialization: "",
  interviewmode: "",
  aboutCompany: "",
  websiteurl: "",
  publishDate:"",
  lastDate:"",
  companyAddress: "",
  jobDescription: "",
  annualSalary: "",
  uptoPackage: "",
  key_skills:[]
};
const degrees={
  "B.Tech/B.E":["CSE","ECE","IT","Any"],
  "MCA":[],
  "BCA":[],
  "MBA":["HR","Marketing"],
}
const PostJobsForm = () => {
  const jobTitles = [
    "Assistant Software Engineer",
    "Web Engineer Trainee",
    "Jr System Administrator",
    "SDE/ React Dev.",
    "Jr. Software Engineer Trainee / Jr. QA Trainee",
    "Software Associate",
    "Trainee QA",
    "Software Consultant",
    "Associate Business Analyst",
    "Admission Counsellor",
    "Business Development Associate",
    "Coordinator Tech. Support/ Engineering Assistant/ Coordinator: EV Services",
    "Fashion Consultant- Assisted Business",
    "DEVOPS & SRE",
    "System Developer",
    "Software Engineer Trainee",
    "Frontend Developer",
    "Jr. Software Developer",
    "Jr. Research and data mining analyst",
    "Business Development Executive",
    "DotNet Developer",
    "Client Relationship",
    "Software Developer",
    "Software Development Engineer",
    "Jr, Java Developer/ Full Stack Developer",
    "Full Stack Developer/Strategy & Operations Executive & Business Development Executiv/Electronics Associate Engineer",
    "Application Developer Associate /Application Engineer Associate",
    "Sales",
    "Intern- Frontend Developer and Intern- Backend Developer",
    "Trainee, Information Security/Software Developer",
    "SDE, UI/UX",
    "Jr. DevOps Engineer",
    "Backend Engineer and Full Stack Engineer",
    "Cyber Security Associate",
    "MERN Stack Developer/Python Developer",
    "Web Developer / Web Designer",
    "Software Developement Executive/Associate Software Developer",
    "Support Trainee",
    "BDE",
    "BDA",
    "Application Engineer 1",
    "Full Stack Web Developer",
    "Interns-Data Analyst, Business Development, Sales and Marketing, D 365 BC Functional Consultant, D 365 CE Functional Consultant, D 365 FO Functional Consultant, D 365 BC Developer, D 365 FO Developer and .Net Developer",
    "International- Customer Service",
    "Frontend Web Technologies Intern, Marketing Research and Business Development Executive",
    "Cloud Admininstration Intern"
];
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [uploadLoader, setUploadLoader] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [jd, setJd] = useState("");
  const [keySkill, setKeySkill] = useState("");
  const [addedSkills, setAddedSkills] = useState([]);
  const [jobLocation, setJobLocation] = useState("");
  const [addedLocations, setAddedLocations] = useState([]);
  const [experiencetype, setexperiencetype] = useState("Fresher")
  const [salaryType, setsalaryType] = useState("Salary Range")
  const [formData, setFormData] = useState({
    logoUrl: "",
    position: "",
    employment_type: "Full Time, Permanent",
    departmentRoleCategory: jobTitles[0],
    company: "",
    workMode: "In office",
    workExperience: { from: "", to: "",isFresher:true },
    annual_salary_range: {
      currency: "INR",
      from: "",
      to: "",
    },
    companyIndustry: "IT Services & Consulting",
    educationalQualification: "Under Graduate",
    interviewmode: "Virtual",
    specialization: "CSE",
    aboutCompany: "",
    websiteurl: "",
    publishDate:"",
    lastDate:"",
    companyAddress: "",
    annualSalary: "",
  uptoPackage: "",
  salaryType: "",
  degree: "B.Tech",
    jobDescription: "",
    key_skills:[]
  });

 

  const handleSalary = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      annual_salary_range: {
        ...formData.annual_salary_range,
        [name]: value,
      },
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "from" || name === "to") {
      // Update workExperience state when min/max experience changes
      setFormData({
        ...formData,
        workExperience: {
          ...formData.workExperience,
          [name]: value,
          isFresher:false
        },
      });
    } else {
      // Update other form data fields normally
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleAddSkill = () => {
    if (keySkill.trim() !== "") {
      setAddedSkills([...addedSkills, keySkill.trim()]);
      setKeySkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    const updatedSkills = addedSkills.filter(
      (skill) => skill !== skillToRemove
    );

    setAddedSkills(updatedSkills);
  };

  const handleAddLocation = () => {
    if (jobLocation.trim() !== "") {
      setAddedLocations([...addedLocations, jobLocation.trim()]);
      setJobLocation("");
    }
  };

  const handleRemoveLocation = (locationToRemove) => {
    const updatedLocations = addedLocations.filter(
      (location) => location !== locationToRemove
    );
    setAddedLocations(updatedLocations);
  };

  const handleKeyPress = (e, handler) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handler();
    }
  };

  // console.log(formData);
  // console.log(addedLocations);

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(addedSkills);
    const requiredFields = [
      "position",
      "employmentType",
      "departmentRoleCategory",
      "company",
      "workMode",
      "workExperience.from",
      "workExperience.to",
      "annual_salary_range.from",
      "annual_salary_range.to",
      "companyIndustry",
      "educationalQualification",
      "interviewmode",
      "specialization",
      "aboutCompany",
      "websiteurl",
      "publishDate",
      "lastDate",
      "companyAddress",
      "annualSalary",
      "uptoPackage",
      "salaryType",
      "degree",

    ];

    // Check if any required field is empty
    const isEmpty = requiredFields.some((field) => {
      const nestedFields = field.split(".");
      let value = formData;
      for (let nestedField of nestedFields) {
        value = value[nestedField];
        if (value === "" || value === undefined) {
          return true;
        }
      }
      return false;
    });

    // Check if job description (value) is empty or only whitespace
    if (!jd || jd.trim() === "") {
      toast.error("Please provide a job description.");
      return;
    }

    const newFormData = {
      publichedBy: "",
      position: formData?.position,
      employment_type: formData?.employment_type,
      logoUrl: formData?.logoUrl,
      company: formData?.company,
      role_category: formData?.departmentRoleCategory,
      work_mode: formData?.workMode,
      company_address: addedLocations[0],
      work_experience: formData?.workExperience,
      annual_salary_range: formData?.annual_salary_range,
      company_industry: formData?.companyIndustry,
      educational_qualification: formData?.educationalQualification,
      specialization: formData?.specialization,
      interview_mode: formData?.interviewmode,
      about_company: formData?.aboutCompany,
      company_website_link: formData.websiteurl,
      company_address: formData?.companyAddress,
      publishDate: formData?.publishDate,
      annualSalary: formData?.annualSalary,
      uptoPackage: formData?.uptoPackage,
      lastDate: formData?.lastDate,
      degree: formData?.degree,
      salaryType: salaryType,
      key_skills: addedSkills,
      job_description: jd,
    };
// console.log("newformdata",newFormData);
    // console.log("Submitting Form Data:", newFormData);

   await postAJob(newFormData);

    // setFormData(INITIAL_FORM_STATE);
    // setAddedSkills([]);
    // setAddedLocations([]);
    // setJd("");
    // setKeySkill("");
    // setJobLocation("");
    // toast.success("Job Posted Successfully");

    // setTimeout(() => {
    //   navigate("/managejobs");
    // }, 2000);
  };

  const postAJob = async (newFormData) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/createjobopening  
`,
        newFormData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("RECTR_TOKEN")}`,
          },
        }
      );
      // console.log(res);
      toast.success("Job Posted Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    setUploadLoader(true);
    // console.log(e.target.files[0])
    const file = e.target.files[0];
    // console.log(file);
    setSelectedImage(file);
    // console.log(file)
    if (file) {
      // console.log(file);
      try {
        const res = await axios.post(
          `${BASE_URL}/uploadCompanyLogo`,
          { file },
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("RECTR_TOKEN")}`,
            },
          }
        );
        // console.log(res);
        if (res.data.success) {
          // console.log(res.data);
          setUploadLoader(false);
          toast.success("Profile Picture Updated");
          setFormData({ ...formData, logoUrl: res.data.url });
        }
      } catch (error) {
        console.log(error);
        setUploadLoader(false);
      }
    }

    // setUser({ ...user, profile: URL.createObjectURL(file) })
  };

  return (
    <div className="bg-[#e6e6e6] py-[3%] px-[20%] xsm:px-[10%] pr ">
      <div className="bg-[#fafafa] ">
        <div className="bg-white px-12 py-2 text-[12px] font-pop flex flex-col gap-6 w-full ">
          {/* Heading */}
          <div className="flex flex-col ">
            <p className="text-[24px] text-gray-600 xsm:text-center xsm:text-[18px]">
              Post a Job Vacancy
            </p>
          </div>
          <div className="relative w-[160px] h-[160px] rounded-full  xsm:h-[80px] xsm:w-[80px] xsm:top-1 bg-[#FFFFFF] md:w-[120px] md:h-[120px] md:top-24 mx-auto xsm:mb-10">
            {uploadLoader ? (
              <div className="grid items-center justify-center h-[100%] w-[100%]">
                <p>uploading... </p>{" "}
              </div>
            ) : (
              <img
                src={formData.logoUrl ? formData.logoUrl : ProfileIcon}
                alt="profile"
                className="w-full h-full rounded-full object-cover xsm:h-[80px] xsm:w-[80px]"
              />
            )}
            <div
              className="absolute w-[40px] h-[40px] bg-[#E2FFF1] text-[#E2FFF1] shadow-sm rounded-full top-[65%] right-[0%] flex justify-center items-center cursor-pointer
            xsm:w-[20px] xsm:h-[20px]"
            >
              <img
                src={Edit}
                className=" absolute w-[20px] h-[20px] xsm:w-[10px] xsm:h-[10px]"
                onClick={handleEditClick}
                alt=""
              />
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-[1.5fr,1fr] gap-4 xsm:grid-cols-1 xsm:font-pop">
            <div>
              <p className="font-pop font-semibold ">
                Job title / Designation{" "}
                <span className="text-red-500 text-[16px]">*</span>
              </p>
              <input
                type="text"
                placeholder="Enter the Job Title"
                className="border outline-none px-4 py-2 text-[14px] xsm:text-[12px] w-full xsm:text-[12px] "
                value={formData.position}
                onChange={handleChange}
                name="position"
              />
            </div>
            {/* Employment type */}
            <div>
              <p className="font-pop  font-semibold ">
                Employment type{" "}
                <span className="text-red-500 text-[16px]">*</span>
              </p>
              <select
                name="employment_type"
                className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px] w-full"
                value={formData.employment_type}
                onChange={handleChange}
              >
                <option value="" disabled hidden selected>
                  Select Employment Type
                </option>
                <option value="Full Time, Permanent">
                  Full Time, Permanent
                </option>
                <option value="Full Time, Temporary/Contractual">
                  Full Time, Temporary/Contractual
                </option>
                <option value="Full Time, Freelance/Homebased">
                  Full Time, Freelance/Homebased
                </option>
                <option value="Part Time, Permanent">
                  Part Time, Permanent
                </option>
                <option value="Part Time, Temporary/Contractual">
                  Part Time, Temporary/Contractual
                </option>
                <option value="Part Time, Freelance/Homebased">
                  Part Time, Freelance/Homebased
                </option>
              </select>
            </div>
          </div>
          {/* Key skills */}
          <div className="w-full">
            <p className="font-pop font-semibold">
              Key Skills{" "}
              <span className="font-normal">
                (To add any Skill press Enter)
              </span>{" "}
              <span className="text-red-500 text-[16px]">*</span>
            </p>
            <input
              type="text"
              placeholder="Add skills that are crucial for this job"
              className="border outline-none px-2 py-4 xsm:py-3 text-[14px] xsm:text-[12px] w-full"
              value={keySkill}
              onChange={(e) => setKeySkill(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e, handleAddSkill)}
            />
          </div>
          {/* Display added key skills as tags */}
          {addedSkills.length > 0 && (
            <div className="flex flex-col">
              <p className="font-pop font-semibold">
                Added Key Skills{" "}
                <span className="font-normal">
                  (to remove any skill click on it)
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {addedSkills.map((skill, index) => (
                  <p
                    key={index}
                    onClick={() => handleRemoveSkill(skill)}
                    className="bg-green-500 text-white w-max px-2 py-1 cursor-pointer rounded-full"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          )}
          {/* Company Name */}
          <div className="w-[65%] xsm:w-[100%]">
            <p className="font-pop font-semibold ">
              Company Name
              <span className="text-red-500 text-[16px]">*</span>
            </p>
            <input
              type="text"
              placeholder="Enter the Company Name"
              className="border outline-none px-4 py-2 text-[14px] xsm:text-[12px] w-full"
              value={formData.company}
              onChange={handleChange}
              name="company"
            />
          </div>
          {/* Department & Role category */}
          <div className="w-[65%] xsm:w-[100%]">
            <p className="font-pop  font-semibold">
              Role category{" "}
              <span className="text-red-500 text-[16px]">*</span>
            </p>
            <select
              name="departmentRoleCategory"
              className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px] w-full"
              value={formData.departmentRoleCategory}
              onChange={handleChange}
            >
              <option className="border-none" value="" selected disabled hidden>
                Select Your Department Role
              </option>
              {jobTitles?.map((item,ind)=>{
               return <option key={ind} className="border-none" value={item}>{item}</option>
              })}
            </select>
          </div>
          {/* Work mode */}
          <div className="w-[65%] xsm:w-[100%]">
            <p className="font-pop  font-semibold">
              Work mode <span className="text-red-500 text-[16px]">*</span>
            </p>
            <select
              name="workMode"
              className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px] w-full"
              value={formData.workMode}
              onChange={handleChange}
            >
              <option className="border-none" value="" selected disabled hidden>
                Select Your Work Mode
              </option>
              <option className="border-none" value="In office">
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
          <div className="w-[65%] xsm:w-[100%]">
            <p className="font-pop font-semibold">
              Job Location{" "}
              <span className="font-normal">
                (To add any location press Enter)
              </span>
              <span className="text-red-500 text-[16px]">*</span>
            </p>
            <input
              type="text"
              placeholder="Add locations"
              className="border outline-none px-4 py-2 text-[14px] xsm:text-[12px] w-full"
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e, handleAddLocation)}
            />
          </div>
          {/* Display added job locations as tags */}
          {addedLocations.length > 0 && (
            <div className="flex flex-col">
              <p className="font-pop font-semibold">
                Added Job Locations{" "}
                <span className="font-normal">
                  (to remove any Locations click on it)
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {addedLocations.map((location, index) => (
                  <p
                    key={index}
                    className="bg-blue-500 text-white w-max px-2 py-1 cursor-pointer rounded-full"
                    onClick={() => handleRemoveLocation(location)}
                  >
                    {location}
                  </p>
                ))}
              </div>
            </div>
          )}
          {/* Work experience */}
          <div className="w-[65%] xsm:w-[100%]">
            <p className="font-pop font-semibold">
              Work experience (years){" "}
              <span className="text-red-500 text-[16px]">*</span>
            </p>
            <div className="flex items-center gap-2">
              <select
                 
                 className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px] w-full"
                 value={experiencetype}
                 onChange={(e)=>setexperiencetype(e.target.value)}
              >
                <option value="Fresher">Fresher</option>
                <option value="Experienced">Experienced</option>
              </select>
              {
                experiencetype==="Experienced" ?
              <>
              <input
                name="from"
                type="number"
                 placeholder="Years"
                className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px] w-full"
                value={formData.workExperience.from}
                onChange={handleChange}
              />               
              <p className="text-gray-500 text-[16px]">To</p>
              <input
                name="to" type="number"
                placeholder="Years"
                className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px] w-full"
                value={formData.workExperience.to}
                onChange={handleChange}
              /></>:''}
            </div>
          </div>

          {/* Start and end date  */}
          <div className="w-[65%] xsm:w-[100%]">
            <p className="font-pop font-semibold">
             Registeration Dates{" "}
              <span className="text-red-500 text-[16px]">*</span>
            </p>
            <div className="flex items-center gap-5">
            <p className="text-gray-500 text-[16px] ">From</p>
              <input className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px] w-full" name="publishDate" value={formData?.publishDate} onChange={handleChange} type="date" placeholder="Post Date" defaultValue={new Date()}/>
              <p className="text-gray-500 text-[16px]">To</p>
              <input className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px] w-full" name="lastDate" value={formData?.lastDate} onChange={handleChange} type="date" placeholder="Expire Date" defaultValue={new Date()}/>

            </div>
          </div>


          {/* Annual salary range */}
          <div className="w-[65%] xsm:w-[100%]">
            <p className="font-pop font-semibold">
              Annual salary {" "}
              <span className="text-red-500 text-[16px]">*</span>
            </p>
            <div className="flex items-center gap-2">
            <select
                 
                 className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px] w-full"
                 value={salaryType}
                 onChange={(e)=>setsalaryType(e.target.value)}
              >
                <option value="Salary Range">Salary Range</option>
                <option value="Fixed Package">Fixed Package</option>
                <option value="uptoPackage">Upto</option>
              </select>
              {/* <select
                name="currency"
                className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px]"
                value={formData.annual_salary_range.currency}
                onChange={handleSalary}
              >
                <option value="INR" selected>
                  LPA
                </option>
              </select> */}
              {salaryType=="Salary Range" ?
              <>
              <input
                name="from"
                type="number"
                placeholder="LPA"
                className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px] w-full"
                value={formData.annual_salary_range.from}
                onChange={handleSalary}
              />
              <p className="text-gray-500 text-[16px]">To</p>
              <input
                name="to"
                  type="number"
                  placeholder="LPA"
                className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px] w-full"
                value={formData.annual_salary_range.to}
                onChange={handleSalary}
              />
              </>:
              salaryType=="Fixed Package" ?
              <input
              name="annualSalary"
                type="number"
                placeholder="LPA"
              className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px] w-full"
              value={formData.annualSalary}
              onChange={handleChange}
            />:      <input
            name="uptoPackage"
              type="number"
              placeholder="LPA"
            className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px] w-full"
            value={formData.uptoPackage}
            onChange={handleChange}
          />
              }
              
            </div>
          </div>

          {/* Company industry */}
          <div className="w-[65%] xsm:w-[100%] ">
            <p className="font-pop  font-semibold">
              Company industry{" "}
              <span className="text-red-500 text-[16px]">*</span>
            </p>
            <select
              name="companyIndustry"
              className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px] w-full"
              value={formData.companyIndustry}
              onChange={handleChange}
            >
              <option className="border-none" value="" selected disabled hidden>
                Select Your Company industry
              </option>
              <option className="border-none" value="IT Services & Consulting">
                IT Services & Consulting
              </option>
              <option
                className="border-none"
                value="Electronic Components / Semiconductors"
              >
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
          <div className="w-[65%] xsm:w-[100%]">
            <p className="font-pop  font-semibold">
              Educational qualification
              <span className="text-red-500 text-[16px]">*</span>
            </p>
            <select
              name="educationalQualification"
              className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px] w-full"
              value={formData.educationalQualification}
              onChange={handleChange}
            >
              <option className="border-none" value="Under Graduate">
                Under Graduate
              </option>
              <option className="border-none" value="Post Graduate">
                Post Graduate
              </option>
              <option className="border-none" value="Doctoral/Ph.D">
                Doctoral/Ph.D
              </option>
            </select>
          </div>
          <div className="w-[65%] xsm:w-[100%]">
            <p className="font-pop  font-semibold">
              Degree
              <span className="text-red-500 text-[16px]">*</span>
            </p>
            <select
              name="degree"
              className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px] w-full"
              value={formData.degree}
              onChange={handleChange}
            >
              {Object.entries(degrees).map(([key, value]) => (
                <option className="border-none" value={key}>
               {key}
               </option>
               ))}
              
            </select>
          </div>
          {/* Specialization */}
         {degrees[formData.degree]?.length>0 ? <div className="w-[65%] xsm:w-[100%]">
            <p className="font-pop font-semibold ">
              Specialization
              <span className="text-red-500 text-[16px]">*</span>
            </p>
            <select
              name="specialization"
              className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px] w-full"
              value={formData.specialization}
              onChange={handleChange}
            >
              {degrees[formData.degree]?.map((item)=>{
                return(  <option className="border-none" value={item}>
                  {item}
               </option>)
              })}
              
              
            </select>
          </div>:''}
          {/* Interview Mode */}
          <div className="w-[65%] xsm:w-[100%]">
            <p className="font-pop  font-semibold">
              Interview Mode
              <span className="text-red-500 text-[16px]">*</span>
            </p>
            <select
              name="interviewmode"
              className="border outline-none px-2 py-2 text-[14px] xsm:text-[12px] w-full"
              value={formData.interviewmode}
              onChange={handleChange}
            >
              <option className="border-none" value="Virtual" selected>
                Virtual
              </option>
              <option className="border-none" value="Walk-In">
                Walk-In
              </option>
              <option className="border-none" value="Remote">
                Remote
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
          {/* ABOUT COMPANY */}
          <div className="w-full">
            <p className="font-pop font-semibold ">
              About Company
              <span className="text-red-500 text-[16px]">*</span>
            </p>
            <textarea
              type="text"
              placeholder="Tell us about your Company"
              className="border outline-none px-4 py-2 text-[14px] xsm:text-[12px] w-full "
              value={formData.aboutCompany}
              onChange={handleChange}
              name="aboutCompany"
            />
          </div>
          {/* COMPANY Website Link */}
          <div className="w-full">
            <p className="font-pop font-semibold ">
              Company Website Link
              <span className="text-red-500 text-[16px]">*</span>
            </p>
            <input
              type="text"
              placeholder="Company Link/Url"
              className="border outline-none px-4 py-2 text-[14px] xsm:text-[12px] w-full "
              value={formData.websiteurl}
              onChange={handleChange}
              name="websiteurl"
            />
          </div>
          {/* COMPANY Address */}
          <div className="w-full">
            <p className="font-pop font-semibold ">
              Company Address
              <span className="text-red-500 text-[16px]">*</span>
            </p>
            <input
              type="text"
              placeholder="Company Address"
              className="border outline-none px-4 py-2 text-[14px] xsm:text-[12px] w-full "
              value={formData.companyAddress}
              onChange={handleChange}
              name="companyAddress"
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="font-pop text-[18px] w-max text-white bg-[#1FC074] px-16 py-2 rounded-xl xsm:text-[12px] xsm:px-6"
            >
              Post Job
            </button>
          </div>
        </div>
      </div>
      <Toaster toastOptions={{
         duration: 500,
      }}  position="top-center" />
    </div>
  );
};

export default PostJobsForm;
