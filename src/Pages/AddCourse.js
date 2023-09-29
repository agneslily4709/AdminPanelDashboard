import React,{useState,useContext} from 'react'
import {UserContext} from './../App';
import { useNavigate } from 'react-router-dom';
import "../App.css"


const AddCourse = () => {
  const navigate = useNavigate()
  let context = useContext(UserContext)
  const [data,setData] = useState({})
  const handleSubmit = (e) => {
      e.preventDefault()
      let courses = [...context.course]
      courses.push(data)
      context.setCourse(courses)
      navigate("/course/viewCourse")

  }
  const handleInput = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  }
  return (
    <div className='form-container'>
    <form  className='form-component col-md-6'onSubmit={handleSubmit}>
        <h3 className='form-title'>Add Course</h3>
        <div className="form-group row ">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label form-label">CourseId</label>
    <div className="col-sm-10">
      <input type="text" name='course_id' className="form-control" id="inputEmail3" placeholder="Course Id" onChange={handleInput}/>
    </div>
  </div>    
    <div className="form-group row ">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label form-label">Title</label>
    <div className="col-sm-10">
      <input type="text" name='title' className="form-control" id="inputEmail3" placeholder="Title" onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row ">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label form-label">Instructor</label>
    <div className="col-sm-10">
      <input type="text" name='instructor' className="form-control" id="inputEmail3" placeholder="Instructor" onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row ">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label form-label">Duration</label>
    <div className="col-sm-10">
      <input type="text" name='duration' className="form-control" id="inputEmail3" placeholder="Duration" onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row ">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label form-label">Level</label>
    <div className="col-sm-10">
      <input type="number" name='level' className="form-control" id="inputEmail3" placeholder="Level"onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row ">
  <label htmlFor="exampleInputEmail1" className='col-sm-2 col-form-label form-label'>Learners</label>
    <div className='col-sm-10'>
    <input type="text" name='learners' className="form-control" id="inputEmail3" placeholder="Learners"onChange={handleInput}/>

    </div>
  </div>
  <button type="submit" className="mt-3 btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default AddCourse