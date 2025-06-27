import {useState} from 'react'
import { useNavigate } from "react-router-dom"

import { useAuth } from './authProvider';
import logo1 from '../assets/nouuu.png';
const LoginPage=()=>{

    
    const Navigate=useNavigate();
    const [email,setemail]=useState("");
    const[password,setpassword]=useState("");

    const {loginAction}=useAuth()


const actionSubmit=async(e)=>{
    e.preventDefault()
    e.preventDefault()
    const data={
        email,
        password
    }
    loginAction(data);

       
}

 return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-xl">
        <div className="flex flex-col items-center">
          <img src={logo1}   className="w-36 h-35   bg-white"/>
          <h2 className="text-3xl font-bold text-yellow-600">NoQu HRMS Login</h2>
        </div>
        <form onSubmit={actionSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              required
              onChange={(e) => setemail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              required
              onChange={(e) => setpassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="text-right">
          <button
            type="button"
            className="text-sm text-yellow-600 hover:underline"
            onClick={() => { Navigate("/Email"); }}
          >
            Forgot Password?
          </button>
        </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 font-semibold"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <span className="text-yellow-600 font-semibold">Contact Admin</span>
        </p>
      </div>
    </div>
  );
};

export {LoginPage}