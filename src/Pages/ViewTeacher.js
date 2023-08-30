import React,{useContext} from 'react'
import {UserContext} from './../App';
import { useNavigate } from 'react-router-dom';
const ViewTeacher = () => {
  const navigate = useNavigate()
  let context = useContext(UserContext);
  const handleDelete = (i) => {
    let data = [...context.teacher]
    data.splice(i,1)
    context.setTeacher(data)
}
  const renderPage = () => {
      return context.teacher.map((item, i) => (
        <tr key={item.course_id}>
          <td>{i + 1}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.number}</td>
          <td>{item.experience}</td>
          <td>{item.course}</td>
          <td>
                <button className='btn btn-success' onClick={()=>navigate(`/teacher/editTeacher/${i}`)}> Edit</button>
                &nbsp;
                &nbsp;
                <button className='btn btn-danger' onClick={()=>handleDelete(i)}>Delete</button>
            </td>
        </tr>
      ));
    };

return (
  <div className='table-component'>
    <h3 className='text-center'>Teachers</h3>
      <table className="table text-center table-bordered border-dark">
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">Email</th>
    <th scope="col">Number</th>
    <th scope="col">Experience</th>
    <th scope="col">Course</th>
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

export default ViewTeacher