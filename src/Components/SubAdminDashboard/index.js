import { useEffect, useLayoutEffect } from "react";
import BannarSubAdmin from "./BannarSubAdmin";
import LoginSubAdmin from "./LoginSubAdmin";
import { useNavigate } from "react-router-dom";

export default function SubAdmin() {
  const navigate=useNavigate()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/college-dashboard')
    }
  }, [])
  return <div className="flex flex-col justify-center items-center">
    <BannarSubAdmin />
    <LoginSubAdmin />
  </div>;
}
