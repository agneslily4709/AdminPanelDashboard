import React,{useContext} from 'react'
import {UserContext} from './../App';
import {BiEdit} from "react-icons/bi"
import {AiOutlineDelete} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import "../App.css"
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
            <td className='table-data'>{i + 1}</td>
            <td className='table-data'>{item.name}</td>
            <td className='table-data'>{item.email}</td>
            <td className='table-data'>{item.number}</td>
            <td className='table-data'>{item.level}</td>
            <td className='table-data'>{item.course}</td>
            <td className='table-data'>
                <button className='btn btn-success action-button d-inline-block m-1' onClick={()=>navigate(`/student/editStudent/${i}`)}> <BiEdit/> </button>
                <button className='btn btn-danger action-button d-inline-block m-1' onClick={()=>handleDelete(i)}><AiOutlineDelete/></button>
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