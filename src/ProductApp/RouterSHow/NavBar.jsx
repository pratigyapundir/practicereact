import { Link, useNavigate } from "react-router-dom";
import logo from "../IMGAE/images.jpg";
import { useEffect, useState } from "react";

const NavBar = () => {
  const navi=useNavigate();
 const token=localStorage.getItem("token")
 const handleLogout=()=>{
  const confirmMsg=confirm("Are you sure")
  if(confirmMsg){
    localStorage.removeItem("token")
    navi("/login");
  }
 }
 
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <img
            src={logo}
            alt="Store Logo"
            className="h-12 w-12 rounded-full object-cover shadow-sm"
          />

          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-gray-900">
              MyStore
            </h1>

            <p className="text-xs text-gray-500">
              Shop Smart. Shop Easy.
            </p>
          </div>

        </Link>


        


        {/* Navigation */}
        <div className="flex items-center gap-2 sm:gap-5">

          <Link
            to="/"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Home
          </Link>

          <Link
            to="/product"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Products
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative rounded-lg px-3 py-2 text-xl transition hover:bg-blue-50"
          >
            🛒

         
          </Link>

          {/* Login */}
          {token ?(<>
           <Link
              to="/edit"
               className="
        inline-flex items-center gap-2
        rounded-lg
        border border-blue-200
        bg-blue-50
        px-4 py-2
        text-sm font-semibold
        text-blue-700
        shadow-sm
        transition-all duration-200
        hover:border-blue-300
        hover:bg-blue-100
        hover:text-blue-800
        hover:shadow
        active:scale-95
      "
            >
              Edit
            </Link>

            <button
              onClick={handleLogout}
            className="
        inline-flex items-center gap-2
        rounded-lg
        border border-red-200
        bg-red-50
        px-4 py-2
        text-sm font-semibold
        text-red-600
        shadow-sm
        transition-all duration-200
        hover:border-red-300
        hover:bg-red-100
        hover:text-red-700
        hover:shadow
        active:scale-95"
            >
              Logout
            </button>
          </>):(<>
          <Link
            to="/login"
            className="hidden rounded-lg bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 sm:block"
          >
            Login
          </Link>
           <Link
            to="/signup"
            className="hidden rounded-lg bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 sm:block"
          >
            Signup
          </Link>
          </>)}

        </div>

      </div>


   

    </nav>
  );
};

export default NavBar;