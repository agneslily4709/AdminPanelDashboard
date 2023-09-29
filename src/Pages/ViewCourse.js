import React,{useContext} from 'react'
import {UserContext} from './../App'
import { useNavigate } from 'react-router-dom';
import {BiEdit} from "react-icons/bi"
import {AiOutlineDelete} from "react-icons/ai"
const ViewCourse = () => {
  const navigate = useNavigate()
  const handleDelete = (i) => {
    let data = [...context.course]
    data.splice(i,1)
    context.setCourse(data)
}
  let context = useContext(UserContext);
    const renderPage = () => {
        return context.course.map((item, i) => (
          <tr key={item.course_id}>
            <td className='table-data'>{i + 1}</td>
            <td className='table-data'>{item.title}</td>
            <td className='table-data'>{item.instructor}</td>
            <td className='table-data'>{item.duration}</td>
            <td className='table-data'>{item.level}</td>
            <td className='table-data'>{item.learners}</td>
            <td className=''>
                <button className='btn btn-success action-button d-inline-block m-1' onClick={()=>navigate(`/course/editCourse/${i}`)}><BiEdit/> </button>
                <button className='btn btn-danger action-button d-inline-block m-1' onClick={()=>handleDelete(i)}><AiOutlineDelete/></button>
            </td>
          </tr>
        ));
      };

  return (
    <div className='table-component'>
      <h3 className='text-center'>Courses</h3>
        <table className="table text-center table-bordered border-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Instructor</th>
      <th scope="col">Duration</th>
      <th scope="col">Level</th>
      <th scope="col">Learners</th>
      <th scope='col'>Actions</th>
    </tr>
  </thead>
  <tbody>
    {renderPage()}
  </tbody>
  </table>

        </div>
  )
}

export default ViewCourse