import React,{useContext} from 'react'
import {UserContext} from './../App'
import { useNavigate } from 'react-router-dom';

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
            <td>{i + 1}</td>
            <td>{item.title}</td>
            <td>{item.instructor}</td>
            <td>{item.duration}</td>
            <td>{item.level}</td>
            <td>{item.learners}</td>
            <td>
                <button className='btn btn-success' onClick={()=>navigate(`/course/editCourse/${i}`)}> Edit</button>
                &nbsp;
                &nbsp;
                <button className='btn btn-danger' onClick={()=>handleDelete(i)}>Delete</button>
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