import React, { useContext, useState } from 'react'
import { UserContext } from '../App'
import { useNavigate,useParams } from 'react-router-dom'

const EditTeacher = () => {
  const navigate = useNavigate()
  let context = useContext(UserContext)
  const params = useParams();
  let [data,setData] = useState({name:context.teacher[params.id].name,
    email:context.teacher[params.id].email,
    number:context.teacher[params.id].number,
    experience:context.teacher[params.id].experience,
    course:context.teacher[params.id].course})
  const handleSubmit = (e) => {
      e.preventDefault()
      let teachers = [...context.teacher]
      teachers.splice(params.id,1,data)
      context.setTeacher(teachers)
      navigate("/teacher/viewTeacher")
  }
  const handleInput = (e) => {
    setData({...data,[e.target.name]:e.target.value})
  }

  return (
    <>
        <form  className='form-component col-md-6'onSubmit={handleSubmit}>
        <h3 className='text-center'>Add Student</h3>
    <div className="form-group row mt-4">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" name='name' className="form-control" id="inputEmail3" placeholder="Name" value={data.name} onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row mt-4">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" name='email' className="form-control" id="inputEmail3" placeholder="Email" value={data.email} onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row mt-4">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Number</label>
    <div className="col-sm-10">
      <input type="text" name='number' className="form-control" id="inputEmail3" placeholder="Number" value={data.number} onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row mt-4">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Level</label>
    <div className="col-sm-10">
      <input type="number" name='experience' className="form-control" id="inputEmail3" placeholder="Level" value={data.experience} onChange={handleInput}/>
    </div>
  </div>
  <div className="form-group row mt-4">
  <label htmlFor="exampleInputEmail1" className='col-sm-2 col-form-label'>Course</label>
    <div className='col-sm-10'>
    <select name='course' onChange={handleInput} className="custom-select form-control">
  <option defaultValue={data.course}>Open this select menu </option>
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

export default EditTeacher