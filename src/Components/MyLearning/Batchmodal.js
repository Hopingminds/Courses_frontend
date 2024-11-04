import React from 'react';
import Modal from 'react-modal';
import { BASE_URL } from '../../Api/api';
import  { Toaster } from 'react-hot-toast';

Modal.setAppElement('#root'); // Ensure to bind modal to your app element (for accessibility reasons)

const BatchModal = ({ isOpen, onRequestClose,Data ,fetchUserData}) => {
    function formatDate(dateString) {
        const dateObj = new Date(dateString);
        
        const day = String(dateObj.getDate()).padStart(2, '0');
        const year = dateObj.getFullYear();
    
        const monthNames = [
            "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"
        ];
        const month = monthNames[dateObj.getMonth()];
    
        let hours = dateObj.getHours();
        const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        
        const time = `${hours}.${minutes}${ampm}`;
    
        return `${day} ${month} ${year} ${time}`;
    }
// async function Fetchdata(){
//     try {
//         const data=await fetch(BASE_URL+'/getUpcomingBatchesForCourse/'+courseid)
//         const response=await data.json()
// if(response.success){
//     setData(response?.batches)
// }
//     } catch (error) {
        
//     }
// }
async function handleChoose(batchid,courseid){
    try {
        const data=await fetch(BASE_URL+'/setBatchForStudent',{
            method:"POST",
            headers:{
                'Content-type':'application/json',
                Authorization:`Bearer ${localStorage.getItem('COURSES_USER_TOKEN')}`
            },
            body:JSON.stringify({courseId:courseid,batchId:batchid})

        })
        const response=await data.json()
        if(response.success){
            // toast.success(response.message);
            // let {email}=jwtDecode(localStorage.getItem('COURSES_USER_TOKEN'))
            fetchUserData()
            onRequestClose()
        }
    } catch (error) {
        
    }
}
  return (<>
  <Toaster/>
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Batch selection"
      className="flex items-center justify-center  w-[80%] h-[400px]"
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg  w-full cursor-pointer">
        <h2 className="text-2xl font-semibold mb-4">Batch selection</h2>
        <div className='flex justify-between overflow-y-auto w-full gap-10'>

        {
            Data?.map((item)=>{
                return(<>
            <div className='h-[300px] w-[500px] border flex flex-col gap-5 p-3 rounded shadow-lg'>
            <div className='font-semibold'>{item?.batchName}</div>
            <div>Start date : {formatDate(item?.startDate)}</div>
            <div>End date : {formatDate(item?.endDate)}</div>
            <div>Batch limit : {item?.batchlimit}</div>
            <button className='bg-black text-white p-2 mx-auto rounded' onClick={()=>handleChoose(item?._id,item?.course)}>Choose</button>
        </div>
                </>)
            })
        }
             </div>


      </div>
    </Modal>
    </>
  );
};

export default BatchModal;
