import React, { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../Components/Login/login'

function AuthProtected({Component,path}) {
    const login=localStorage.getItem('COURSES_USER_TOKEN')
    localStorage.setItem('current',path)
    localStorage.setItem('history',path)
  return (<>
  {
    login?  <Component/> : <Login/>
  }
  </>)
}

export default AuthProtected;