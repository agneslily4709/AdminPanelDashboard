import React, { useContext, useState } from 'react'
import { UserContext } from '../App'
import { useNavigate,useParams } from 'react-router-dom'

const EditCourse = () => {
  const navigate = useNavigate()
  let context = useContext(UserContext)
  const params = useParams();
  let [data,setData] = useState({
    course_id:context.course[params.id].course_id,
    title:context.course[params.id].title,
    instructor:context.course[params.id].instructor,
    duration:context.course[params.id].duration,
    level:context.course[params.id].level,
    learners:context.course[params.id].learners})
  const handleSubmit = (e) => {
      e.preventDefault()
      let course = [...context.course]
      course.splice(params.id,1,data)
      context.setCourse(course)
      navigate("/course/viewCourse")
  }
  const handleInput = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  }

  return (
    <>
    <form  className='form-component col-md-6'onSubmit={handleSubmit}>
        <h3 className='text-center'>Add Course</h3>
        <div className="form-group row mt-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">CourseId</label>
    <div className="col-sm-10">
      <input type="text" name='course_id' className="form-control" id="inputEmail3" placeholder="Course Id" value={data.course_id} onChange={handleInput}/>
    </div>
  </div>    
    <div className="form-group row mt-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Title</label>
    <div className="col-sm-10">
      <input type="text" name='title' className="form-control" id="inputEmail3" placeholder="Title" value={data.title} onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row mt-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Instructor</label>
    <div className="col-sm-10">
      <input type="text" name='instructor' className="form-control" id="inputEmail3" placeholder="Instructor" value={data.instructor} onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row mt-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Duration</label>
    <div className="col-sm-10">
      <input type="text" name='duration' className="form-control" id="inputEmail3" placeholder="Duration" value={data.duration} onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row mt-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Level</label>
    <div className="col-sm-10">
      <input type="number" name='level' className="form-control" id="inputEmail3" placeholder="Level" value={data.level} onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row mt-3">
  <label htmlFor="exampleInputEmail1" className='col-sm-2 col-form-label'>Learners</label>
    <div className='col-sm-10 w-75'>
    <input type="text" name='learners' className="form-control" id="inputEmail3" placeholder="Learners" value={data.learners} onChange={handleInput}/>

    </div>
  </div>
  <button type="submit" className="mt-3 btn btn-primary">Submit</button>
</form>
    </>
  )
}

export default EditCourse