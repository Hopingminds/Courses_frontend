import React, { useEffect, useState } from 'react';
import { ReactComponent as Cap } from '../../Assets/Icons/cap.svg';
import { ReactComponent as Coin } from '../../Assets/Icons/coin.svg';
import { ReactComponent as Upload } from '../../Assets/Icons/upload.svg';
import { ReactComponent as Download } from '../../Assets/Icons/download.svg';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver'
import { BASE_URL } from '../../Api/api';
import toast, { Toaster } from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';

const DetailTableDashboard = ({ data,FetchData }) => {
  // console.log(data);
  const [selectedFile, setSelectedFile] = useState(null);
  const [Coins, setCoins] = useState([])
  async function Fetchdata(){
    let token=localStorage.getItem('token')
    if(token){
      const temp=await fetch(BASE_URL+'/collegeUser?email='+jwtDecode(token)?.email)
      const response=await temp.json()
      setCoins(response?.data)
      // console.log(response);
    }
  }
  useEffect(() => {
   
    Fetchdata()
  }, [])
  

  const handleFileChange = async(event) => {
    const file = event.target.files[0];
    const formData=new FormData()
    // Validate file type
    if (file && (file.type === 'application/vnd.ms-excel' || file.type === 'text/csv')) {
      // setSelectedFile(file);
      try {
        formData.append('file',event.target.files[0])
        const fetchdata=await fetch(BASE_URL+'/upload-students',{
          method:'POST',
          headers:{
            'Authorization':'Bearer '+localStorage.getItem('token')
          },
          body:formData
        })
        const response=await fetchdata.json()
        if(response.success){
          toast.success(response.msg)
          FetchData()
          Fetchdata()
        }
        else{
          toast.success(response.msg)

        }
      } catch (error) {
        console.log(error);
      }
    } else {
      // Show error message or handle invalid file type
      alert('Please select a csv file type.');
    }
  };

  const handleDownload = () => {
    let fileurl='/upload-dummy - Sheet1.csv'
    fetch(fileurl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = fileurl || "downloaded-file";
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  };
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Buffer to store the generated Excel file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });

    saveAs(blob, "data.csv");
};

  // Example table content

  return (
    <>
    <Toaster/>
      <div className='px-[4%] flex flex-col gap-4 w-full'>
        <div className='flex w-full justify-end'>
          <button className='py-2 bg-[#1DBF73] text-white rounded mt-3 px-3' onClick={handleDownload}>Download format</button>
        </div>
        <div className='w-full flex justify-between'>
          <div className='h-32 w-56 flex justify-center items-center shadow-xl'>
            <Cap className='h-20 w-20' />
            <div className='flex flex-col '>
              <p className='font-bold text-center text-xl'>{data?.length}</p>
              <p className='text-xs font-semibold'>Enrolled students</p>
            </div>
          </div>
          <div className='h-32 w-56 flex justify-center items-center shadow-xl gap-1'>
            <Coin className='h-12 w-16' />
            <div className='flex flex-col '>
              <p className='font-bold text-center text-xl '><span className='text-gray-500 text-2xl'>{Coins?.used_coins}</span>/{Coins?.coins}</p>
              <p className='text-xs font-semibold'>Total coins</p>
            </div>
          </div>
          <label htmlFor='fileInput' className='text-xs font-semibold cursor-pointer'>
          <div className='h-32 w-56 flex justify-center items-center shadow-xl gap-1'>
            <Upload className='h-16 w-12' />
            <div className='flex flex-col '>
                Upload Sheet
                <input
                  id='fileInput'
                  type='file'
                  accept='.csv'
                  onChange={handleFileChange}
                  className='hidden'
                />
              
            </div>
          </div>
          </label>
          <div onClick={exportToExcel} className='h-32 cursor-pointer w-56 flex justify-center items-center shadow-xl gap-1'>
            <Download className='h-16 w-12' />
            <div className='flex flex-col '>
              <p className='text-xs font-semibold'>Download Sheets</p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-5 bg-[#000000] py-6 text-center w-full'>
          <p className='text-[#FFFFFF] text-[20px] font-pop font-semibold'>Student Id</p>
          <p className='text-[#FFFFFF] text-[20px] font-pop font-semibold'>Name</p>
          <p className='text-[#FFFFFF] text-[20px] font-pop font-semibold'>Batch</p>
          <p className='text-[#FFFFFF] text-[20px] font-pop font-semibold'>Branch</p>
          <p className='text-[#FFFFFF] text-[20px] font-pop font-semibold'>Action</p>
        </div>
        {/* Render table rows */} 
        {data?.map((row) => (
          <div key={row.id} className='grid grid-cols-5 bg-[#fff] py-3 text-center shadow-lg w-full'>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>{row._id.slice(-10)}</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>{row.name}</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>{row.batch || 2024}</p>
            <p className='text-[#000] text-[16px] font-pop font-semibold'>{row.stream || "CSE"}</p>
            <Link to={`/subadmin-studentdata?email=${row.email}`} className='text-[#000] text-[16px] font-pop font-semibold'>View</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailTableDashboard;
