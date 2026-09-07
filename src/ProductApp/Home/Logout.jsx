import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem("user");
        navigate('/login')
    }
  return (
   <button onClick={handleLogout}
   className="rounded-lg bg-black px-4 py-2 text-white">
    Logout
   </button>
  )
}

export default Logout