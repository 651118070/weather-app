
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useForm} from "react-hook-form"
interface formData{
  email:string
  password:string
  fName:string
  lName:string
  phoneNumber:number
}
function Login() {
  const navigate=useNavigate()
  const { register, handleSubmit,formState:{errors}} = useForm<formData>({mode:"onChange"});
const onSubmit=handleSubmit(({email,password,fName,lName,phoneNumber})=>{
  console.log(fName,lName,email,password,phoneNumber)
  alert("Successfully registered")
  {navigate("/login")}
  
  



})
  return (
    
    <div className='max-w-md w-full mx-auto my-40 bg-white p-8  border-4 rounded-lg drop-shadow-xl'>
    <a href="" onClick={()=>{navigate("/")}}  className='hover:underline hover:border-b-blue-300 hover:text-blue-300 px-2 font-bold float-right '>LogOut</a>
    <form action="" className='space-y-5 my-4' onSubmit={onSubmit}>
    <div>
      
      <label htmlFor="" className='text-xl font-sans text-blue-300'>FirstName</label>
      <input {...register("fName", {required: true,minLength:5})} style={{borderColor:errors.fName?"red": ""}} name='fName' type="text"  className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ' placeholder='FirstName'></input>
      {errors.fName && "Must have atleast 5 characters"}
    </div>
    <div>
      
      <label htmlFor="" className='text-xl font-sans text-blue-300'>LastName</label>
      <input {...register("lName", {required: true,minLength:5})} style={{borderColor:errors.lName?"red": ""}} name='lName' type="text"  className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ' placeholder='LastName'></input>
      {errors.lName && "Must have atleast 5 characters"}
    </div>
    
        <div>
      
          <label htmlFor="" className='text-xl font-sans text-blue-300'>E-mail</label>
          <input {...register("email", {required: true, pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} style={{borderColor:errors.email?"red": ""}} name='email' type="email"  className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ' placeholder='you@example.com'></input>
          {errors.email && "email is invalid"}
        </div>
        <div>
          <label htmlFor="password" className='text-xl font-sans text-blue-300'>password</label>
          <input {...register("password", {required: true, pattern:/^[A-Za-z0-9!@#$%^&*_]{6,20}$/})} style={{borderColor:errors.password?"red":""}} name='password' type="password"  className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='password'></input>
        {errors.password && "At least 6 characters"}
        </div>
        <div>
      
      <label htmlFor="" className='text-xl font-sans text-blue-300'>PhoneNumber</label>
      <input {...register("phoneNumber", {required: true})} style={{borderColor:errors.phoneNumber?"red": ""}} name='phoneNumber' type="tel"  className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ' placeholder='PhoneNumber'></input>
      {errors.phoneNumber && "Invalid phone number"}
    </div>
        <div className='flex justify-between'>
        
        
        </div>
        <div>
          <input name="button"type="submit"  value="SignUp" className='w-full bg-blue-400 text-white font-serif rounded-lg p-2 text-xl focus:shadow-md' />
        </div>
       
      </form>
    </div>
    
  )
}

export default Login