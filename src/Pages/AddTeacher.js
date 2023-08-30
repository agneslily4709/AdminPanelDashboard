import React, { useState,useContext } from 'react'
import {UserContext} from './../App'
import {useNavigate} from "react-router-dom"
const AddTeacher = () => {
    const navigate = useNavigate()
    let context = useContext(UserContext)
    const [data,setData] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault()
        let teachers = [...context.teacher]
        teachers.push(data)
        context.setTeacher(teachers)
        navigate("/teacher/viewTeacher")
  
    }
    const handleInput = (e) => {
      setData({...data,[e.target.name]:e.target.value})
    }
  return (
    <>
    <form  className='form-component col-md-6'onSubmit={handleSubmit}>
        <h3 className='text-center'>Add Teacher</h3>
    <div className="form-group row mt-4">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" name='name' className="form-control" id="inputEmail3" placeholder="Name" onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row mt-4">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" name='email' className="form-control" id="inputEmail3" placeholder="Email" onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row mt-4">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Number</label>
    <div className="col-sm-10">
      <input type="text" name='number' className="form-control" id="inputEmail3" placeholder="Number" onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row mt-4">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Experience</label>
    <div className="col-sm-10">
      <input type="number" name='experience' className="form-control" id="inputEmail3" placeholder="Experience"onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row mt-4">
  <label htmlFor="exampleInputEmail1" className='col-sm-2 col-form-label'>Course</label>
    <div className='col-sm-10 w-75'>
    <select name='course' onChange={handleInput} className="custom-select form-control">
  <option defaultValue="">Open this select menu</option>
  <option value="MERN Stack">MERN Stack</option>
  <option value="Data Science">Data Science</option>
  <option value="DevOps">DevOps</option>
</select>
    </div>
  </div>
  <button type="submit" className="mt-4 btn btn-primary">Submit</button>
</form>
    </>
  )
}

export default AddTeacher