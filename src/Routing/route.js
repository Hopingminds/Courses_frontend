import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from '../Components/Header'

import DetailCourses from '../Components/DetailCourses'
import Home from '../Components/Home'
import AboutUs from '../Components/AboutUs/AboutUs'
import Footer from '../Components/Footer/Footer'
import ProfilEdit from '../Components/ProfileEdit/ProfilEdit'
import MyLearning from '../Components/MyLearning/MyLearning'
import Login from '../Components/Login/login'
import Register from '../Components/Register/register'
import CDDetails from '../Components/courseDetails/courseDetails.js'
import AllCourses from '../Components/AllCourses/AllCourses.js'
import ShopingCart from '../Components/Cart/ShopingCart.js'
import CartCheckout from '../Components/Checkout/Cart.jsx'
import ScrollToTop from '../Components/ScrollToTop.js'
import AssignmentMeet from '../Components/Meeting/AssignmentMeet.js'
import AssignmentStart from '../Components/Meeting/AssignmentStart.js'
import NavSubAdmin from '../Components/SubAdminDashboard/NavSubAdmin.js'
import DashboardSubAdmin from '../Components/SubAdminDashboard/DashboardSubAdmin.js'
import Success from '../Components/Success/success.js'
// import DashboardSubAdmin from '../Components/SubAdminDashboard/DashboardSubAdmin.js'
import SubAdmin from '../Components/SubAdminDashboard/index.js'


// subadmin
// import SubAdmin from '../Components/SubAdminDashboard/index.js'
import Pap from '../Components/PAP/Pap.js'
import Modal from '../Components/PAP/modal.jsx'
import Forgotpassword from '../Components/forgotPassword/forgotPassword.js'
import CareerServices from '../Components/HireFromUs/CarrerServices.jsx'
import AiMinds from '../Components/AiMinds/AiMinds.jsx'
import ReturnPolicy from '../Components/policies/ReturnPolicy.js'
import ShippingPolicy from '../Components/policies/ShippingPolicy.js'
import HireFromUs from '../Components/HireFromUs/HireFromUs.jsx'
import Temp from '../Components/temp.js'
import Newinstructor from '../Components/Newinstructor/index.js'
import Button from '../Components/ResumeBuilder/Button.jsx'
import ResumeBuilder from '../Components/ResumeBuilder/ResumeBuilder.jsx'
import MinorCourse from '../Components/MinorCourses/minorCourses.jsx'
import MinorDegree from '../Components/MinorCourses/minordegree.js'
import CodeEditor from '../Components/CodeEditor/index.js'
import Enterance from '../Components/Assignments/Entrancepage/Entrance.jsx'
import Modules from '../Components/Assignments/Modules/index.js'
import Question from '../Components/Assignments/Questions/index.js'
import SubmittedSuccess from '../Components/Assignments/Submittedpage/submitted.js'
import ManageJobsmain from '../Components/ManageJobs/ManageJobsmain.jsx'
import PostJobsForm from '../Components/PostJobsForm/PostJobsForm.jsx'
import CVBuilder from '../Components/cvBuilder/index.jsx'
import JobPreview from '../Components/JobPreview/JobPreview.jsx'
import HRDashboard from '../Components/HRDashboard/index.jsx'
import HRNavbar from '../Components/HRDashboard/HRNavbar/HRNavbar.jsx'
import Internship from '../Components/Internship/Index.js'
import StudentSection from '../Components/SubAdminDashboard/Studentsection.js'
import TPHome from '../Components/TeacherPanel/TPHome.jsx'
import Dashboard from '../Components/TeacherPanel/Dashboard/Dashboard.jsx'
import LiveClasses from '../Components/TeacherPanel/LiveClasses/LiveClasses.jsx'
import AddCourses from '../Components/TeacherPanel/AddCourses/AddCourses.jsx'
import Batches from '../Components/TeacherPanel/Batches/Batches.jsx'
import Courses from '../Components/TeacherPanel/Batches/Courses.jsx'
import CourseBatches from '../Components/TeacherPanel/Batches/CourseBatches.jsx'
import UserProfile from '../Components/TeacherPanel/UserProfile/UserProfile.jsx'
import Assignment from '../Components/TeacherPanel/Assignment/Assignment.jsx'
import ScheduledAssignments from '../Components/TeacherPanel/Assignment/ScheduledAssignments/ScheduledAssignments.jsx'
import History from '../Components/TeacherPanel/Assignment/History/History.jsx'
import LiveClassDetailPage from '../Components/LiveClass/liveclassDetail.jsx'
import Pdfaudio from '../Components/Restrictions/pdfaudio.js'
import PDFViewer from '../Components/Restrictions/pdf.js'
import Instruction from '../Components/Assignments/Instruction/Instruction.jsx'
import Assessmentinstruction from '../Components/Assessments/Instruction/assessmentInstruction.jsx'
import AssessmentQuestion from '../Components/Assessments/Questions/index.js'
import ProtectedAssessmentQuestion from '../Components/Assessments/ProtectedQuestions/index.js'
import CourseMedia from "../Components/TeacherPanel/CourseMedia/CourseMedia.jsx"
import {AuthProvider} from "../Components/contexts/AuthContext.js"
import Loginpage from '../Components/TeacherPanel/LoginPage/LoginPage.jsx'
import MyTimer from '../Components/mytimer.js'
import PaymentFailed from '../Components/PaymentFailed/PayementFailed.jsx'
import LiveStream from '../Components/LiveStream/LiveStream.jsx'
import Submittedassessment from '../Components/Assignments/Submittedpage/submitassessment.js'
import Suspended from '../Components/Assignments/Submittedpage/suspended.js'
import Suspendedassessment from '../Components/Assessments/Submitted/suspended.js'
import MediaCheck from '../Components/Assignments/Hardwarecheck/index.js'
import DeviceCheckPage from '../Components/Assignments/Modules/DeviceCheckModal/DeviceCheckModal.jsx'
import AllModules from '../Components/Assignments/Submodules/index.js'
import NewQuestion from '../Components/Assignments/newpatternquestion/index.js'
import Normalassessment from '../Components/Assignments/normalassessment/index.js'
import LoginNSDC from '../Components/NSDCTesting/LoginNSDC.jsx'
import AuthProtected  from './AuthProtected.js'

function Locationpath(){
    const location=useLocation()
    useEffect(() => {
      if(location.pathname!=='/login-2' && location.pathname!=='/register' && location.pathname!=='/forgot-password'){
        localStorage.setItem("current",location.pathname)
      }
  
    }, [location.pathname])
}

const Router = () => {
    let pathname = window.location.pathname;
    
    useEffect(() => {
        // console.log('cytraewsdlfghl');
        ReturnNavbar()
    }, [pathname])
    const ReturnNavbar = () => {
        if (pathname.includes('college')) {
            return <NavSubAdmin />
        }
        else if ((pathname.includes('hrdashboard') || pathname.includes('managejobs') || pathname.includes('jobpreview') || pathname.includes('postjob'))) {
            return <HRNavbar />
        }
        else if ((pathname.includes('teacherpanel')) || pathname.includes('questions') || pathname.includes('nmquestion') || pathname.includes('question')  || pathname.includes('assessmentquestions') || pathname.includes('prassessmentquestions')) {
            return <></>
        }
        else {
            return (<div className='h-20 md:h-14 xsm:h-10 sm:h-12'>
                <Navbar />
            </div>)
        }

    }
    return (
    <AuthProvider>
        <BrowserRouter >
            <ScrollToTop />
            <Locationpath/>
            {/* <Navbar /> */}

            {ReturnNavbar()}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login-2' element={<Login />} />
                <Route path='/detailcourse/:slug' element={<DetailCourses />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/profile' element={<AuthProtected  path={'/profile'} Component={ProfilEdit} />} />
                <Route path='/learning' element={<AuthProtected   path={'/learning'} Component={MyLearning} />} />
                <Route path='/register-user' element={<Register />} />
                <Route path='/forgot-password' element={<Forgotpassword />} />
                <Route path='/cart' element={<AuthProtected path={'/cart'}  Component={ShopingCart}   />} />
                <Route path='/courses' element={<AllCourses />} />
                <Route path='/course/:slug' element={<AuthProtected path={'/learning'} Component={CDDetails} />} />
                <Route path='/liveclass/:slug' element={<AuthProtected path={'/learning'} Component={LiveClassDetailPage}   />} />
                <Route path='/checkout' element={<AuthProtected path={'/checkout'} Component={CartCheckout}  />} />
                <Route path='/AssignmentMeet' element={<AssignmentMeet />} />
                <Route path='/AssignmentStart' element={<AssignmentStart />} />
                <Route path='/MyTimer' element={<MyTimer />} />

                <Route path='/college-login' element={<SubAdmin />} />
                <Route path='/college-dashboard' element={<DashboardSubAdmin />} />

                <Route path='/success' element={<Success />} />
                <Route path='/cv-builder' element={<CVBuilder />} />
                {/* <Route path='/subadmin-dashboard' element={<DashboardSubAdmin />} /> */}
                <Route path='/pap' element={<Pap />} />
                {/* <Route path='/career' element={<CareerServices />} /> */}
                <Route path='/ai' element={<AiMinds />} />
                <Route path='/privacy' element={<ReturnPolicy />} />
                <Route path='/terms' element={<ShippingPolicy />} />
                <Route path='/enterance' element={<Enterance />} />
                <Route path='/instruction' element={<Instruction />} />
                <Route path='/assessmentinstruction' element={<Assessmentinstruction />} />
                <Route path='/hire-from-us' element={<HireFromUs />} />
                <Route path='/career' element={<CareerServices />} />
                <Route path='/resumebuilder' element={<ResumeBuilder />} />
                <Route path='/minorCourse' element={<MinorCourse />} />
                <Route path='devicecheckpage' element={<AuthProtected path={'/devicecheckpage'} Component={DeviceCheckPage}  />} />
                <Route path='/questions' element={<Question ReturnNavbar={ReturnNavbar} />} />
                <Route path='/submitted' element={<SubmittedSuccess />} />
                <Route path='/suspended' element={<Suspended />} />
                <Route path='/suspendedassessment' element={<Suspendedassessment />} />
                <Route path='/submittedassessment' element={<Submittedassessment />} />
                <Route path='/modules' element={<AuthProtected path={'/modules'} Component={Modules}  />} />
                <Route path='/questions' element={<AuthProtected path={'/questions'} Component={Question}  />} />
                <Route path='/question' element={<AuthProtected path={'/question'} Component={NewQuestion}   />} />
                <Route path='/nmquestion' element={<AuthProtected path={'/nmquestion'} Component={Normalassessment}    />} />
                <Route path='/assessmentquestions' element={<AuthProtected path={'/assessmentquestions'} Component={AssessmentQuestion}   />} />
                <Route path='/prassessmentquestions' element={<AuthProtected path={'/prassessmentquestions'} Component={ProtectedAssessmentQuestion}   />} />
                <Route path='/submitted' element={<SubmittedSuccess />} />
                <Route path='/managejobs' element={<ManageJobsmain />} />
                <Route path='/postjob' element={<PostJobsForm />} />
                <Route path='/jobpreview' element={<JobPreview />} />
                <Route path='/pdf' element={<Pdfaudio />} />
                <Route path='/pdftext' element={<PDFViewer />} />
                <Route path='/hrdashboard' element={<HRDashboard />} />
                <Route path='/internship' element={<Internship />} />
                <Route path='/hardwarecheck' element={<MediaCheck />} />
                <Route path='/college-studentdata' element={<StudentSection />} />
                <Route path='/error' element={<PaymentFailed />} />
                <Route path='/stream/:slug' element={<AuthProtected path={'/learning'} Component={LiveStream}   />} />
                <Route path='/allsubmodules' element={< AuthProtected path={'/allsubmodules'} Component={AllModules}   />} />
                <Route path="/nsdctest" element={<LoginNSDC />} />


                <Route path="/teacherlogin" element={<Loginpage/>}/>
                <Route path="/teacherpanel" element={<TPHome/>}>
                    {/* Redirect to /dashboard after login */}
                    <Route path="dashboard" index element={<Dashboard />} />
                    <Route path="tohome" element={<TPHome />} />
                    <Route path="liveclass" element={<LiveClasses />} />
                    <Route path="addcourse" element={<AddCourses />} />
                    <Route path="assignment" element={<Assignment />}>
                        <Route path="scheduledassignments" element={<ScheduledAssignments />} />
                        <Route path="history" element={<History />} />
                    </Route>
                    <Route path="batch" element={<Batches />}>
                        {/* <Route path="courses" element={<Courses />} /> */}
                        <Route path="batches" element={<CourseBatches />} />
                    </Route>
                    <Route path="userprofile" element={<UserProfile />} />
                    <Route path="media" element={<CourseMedia />} />
                   
                </Route>
                {/* <Route path='devicecheckpage' element={<DeviceCheckPage/>} /> */}
            </Routes>
            {pathname.includes('college') ||  pathname.includes('nmquestion') || pathname.includes('teacherpanel') || pathname.includes('questions') || pathname.includes('question')  || pathname.includes('assessmentquestions') || pathname.includes('prassessmentquestions')? <></> : <Footer />}

        </BrowserRouter >
    </AuthProvider>

    )
}

export default Router;