import React,{useState,useContext} from 'react'
import {UserContext} from './../App';
import "../App.css"
import { useNavigate } from 'react-router-dom';
const AddStudent = () => {
  const navigate = useNavigate()
  let context = useContext(UserContext)
  const [data,setData] = useState({})
  const handleSubmit = (e) => {
      e.preventDefault()
      let students = [...context.student]
      students.push(data)
      context.setStudent(students)
      navigate("/student/viewStudent")
  }
  const handleInput = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  }
  return (
    <div className='form-container'>
    <form  className='form-component col-md-6'onSubmit={handleSubmit}>
        <h3 className='form-title'>Add Student</h3>
    <div className="form-group row ">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" name='name' className="form-control" id="inputEmail3" placeholder="Name" onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row ">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" name='email' className="form-control" id="inputEmail3" placeholder="Email" onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row ">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label form-label">Number</label>
    <div className="col-sm-10">
      <input type="text" name='number' className="form-control" id="inputEmail3" placeholder="Number" onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row ">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label form-label">Level</label>
    <div className="col-sm-10">
      <input type="number" name='level' className="form-control" id="inputEmail3" placeholder="Level"onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row ">
  <label htmlFor="exampleInputEmail1" className='col-sm-2 col-form-label form-label'>Course</label>
    <div className='col-sm-10'>
    <select name='course' onChange={handleInput} className="custom-select form-control">
  <option defaultValue="">Open this select menu </option>
  <option value="MERN Stack">MERN Stack</option>
  <option value="Data Science">Data Science</option>
  <option value="DevOps">DevOps</option>
</select>
    </div>
  </div>
  <button type="submit" className="mt-4 btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default AddStudent