import React,{useContext} from 'react'
import {UserContext} from './../App';
import { useNavigate } from 'react-router-dom';
const ViewStudent = () => {
    let context = useContext(UserContext);
    const handleDelete = (i) => {
      let data = [...context.student]
      data.splice(i,1)
      context.setStudent(data)
  }
    const navigate = useNavigate()
    const renderPage = () => {
        return context.student.map((item, i) => (
          <tr key={item.course_id}>
            <td>{i + 1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.number}</td>
            <td>{item.level}</td>
            <td>{item.course}</td>
            <td>
                <button className='btn btn-success' onClick={()=>navigate(`/student/editStudent/${i}`)}> Edit</button>
                &nbsp;
                &nbsp;
                <button className='btn btn-danger' onClick={()=>handleDelete(i)}>Delete</button>
            </td>
          </tr>
        ));
      };
  
  return (
    <div className='table-component'>
            <h3 className='text-center'>Students</h3>
        <table className="table text-center table-bordered border-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Number</th>
      <th scope="col">Level</th>
      <th scope="col">Course</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {renderPage()}
  </tbody>
  </table>
  
        </div>
  )
  }

export default ViewStudent