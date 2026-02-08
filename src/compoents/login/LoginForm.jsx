import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const {login,setEmail,setPassword,email,password,fullName,setFullName}=useAuth();
    const navigate =  useNavigate(); 

   
    function onSubmit(event){
        event.preventDefault();

        console.log("email:", email);
        console.log("password:",password);
        console.log("fullName:", fullName);

        if(email && password){
            login();
            navigate("/");
        }

        setEmail("");
        setPassword("");

    }

    function setEmailFn(event){
        setEmail(event.target.value)
    }

    function setPasswordFn(event){
        setPassword(event.target.value)
    }
     
    function setFullNameFn(event){
        setFullName(event.target.value)
    }


  return (
    <form onSubmit={onSubmit} className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/20">

        <label className="block text-white font-semibold text-sm mb-2 tracking-wide">Full Name</label>
        <input
        type='text'
        placeholder='Enter your full name'
        onChange={setFullNameFn}
        value={fullName}
        className="w-full px-4 py-3 mb-6 rounded-xl bg-white/90 backdrop-blur-sm border-none shadow-lg transition-all duration-300 outline-none text-gray-800 font-medium focus:shadow-2xl focus:-translate-y-1 focus:bg-white/95 focus:ring-2 focus:ring-purple-400/50"
        />


        <label className="block text-white font-semibold text-sm mb-2 tracking-wide">Email:</label>
        <input
        type='email'
        placeholder='Enter your email'
        onChange={setEmailFn}
        value={email}
        className="w-full px-4 py-3 mb-6 rounded-xl bg-white/90 backdrop-blur-sm border-none shadow-lg transition-all duration-300 outline-none text-gray-800 font-medium focus:shadow-2xl focus:-translate-y-1 focus:bg-white/95 focus:ring-2 focus:ring-purple-400/50"
        />

        <label className="block text-white font-semibold text-sm mb-2 tracking-wide">Password:</label>
        <input
        type='password'
        placeholder='Please enter your password'
        onChange={setPasswordFn}
        value={password}
        className="w-full px-4 py-3 mb-6 rounded-xl bg-white/90 backdrop-blur-sm border-none shadow-lg transition-all duration-300 outline-none text-gray-800 font-medium focus:shadow-2xl focus:-translate-y-1 focus:bg-white/95 focus:ring-2 focus:ring-purple-400/50"
        />

        <button type='submit' className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:from-purple-700 hover:to-pink-700">
            Submit
            </button>

    </form>
  )
}

export default LoginForm