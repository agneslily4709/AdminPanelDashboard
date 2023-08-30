import './App.css';
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';
import {Routes,Route} from "react-router-dom"
import MyCalendar from './Pages/Calendar';
import Dashboard from './Components/Dashboard';
import AddTeacher from './Pages/AddTeacher';
import AddStudent from './Pages/AddStudent';
import AddCourse from './Pages/AddCourse';
import React,{useState} from 'react';
import ViewTeacher from './Pages/ViewTeacher';
import ViewCourse from './Pages/ViewCourse';
import ViewStudent from './Pages/ViewStudent';
import EditStudent from './Pages/EditStudent';
import EditTeacher from './Pages/EditTeacher';
import EditCourse from './Pages/EditCourse';

export const UserContext = React.createContext();
function App() {
  let [student,setStudent] = useState([
    {
      student_id:"S101",
      name:"Alice",
      email:"alice@gmail.com",
      number:9876542345,
      level:"1",
      course:"Data Science"
    },
    {
      student_id:"S102",
      name:"Mark",
      email:"mark@gmail.com",
      number:9876545678,
      level:"2",
      course:"Devops"
    },
  ])
  let [course,setCourse] = useState([
    {
      course_id:"C01",
      title:"Data Science",
      instructor:"Evangeline",
      duration:"2hrs",
      level:"1",
      learners:"Sam, Chris, Alice"
    },
    {
      course_id:"C02",
      title:"MERN Stack",
      instructor:"Agnes Lily",
      duration:"4hrs",
      level:"2",
      learners:"John, Matt, Hannah"
    },
    
  ])
  let [teacher,setTeacher] = useState([
    {
      teacher_id:"T301",
      name:"Agnes Lily",
      email:"agneslily@gmail.com",
      number:9876543413,
      experience:"2",
      course:"MERN Stack"
    },
    {
      student_id:"T303",
      name:"Evangeline",
      email:"evangelin@gmail.com",
      number:9876545678,
      experience:"1",
      course:"Data Science"
    },
  ])
  let feedbacks = 30
  let tasks = 50
  return (
<div className="App">
  <Navbar/>
  <div style={{ display: 'flex' }}>
    <SideBar />
    <div style={{ flex: 1 }}>
      <UserContext.Provider value={{course,setCourse,student,setStudent,teacher,setTeacher,feedbacks,tasks}}>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/' element={<Dashboard/>}/>
            <Route path="/calendar" element={<MyCalendar />} />
            <Route path='/teacher'>
              <Route path='addTeacher' element={<AddTeacher/>}/>
              <Route path='viewTeacher' element={<ViewTeacher/>}/>
              <Route path='editTeacher/:id' element={<EditTeacher/>}/>
            </Route>
            <Route path='/student'>
              <Route path='addStudent' element={<AddStudent/>}/>
              <Route path='viewStudent' element={<ViewStudent/>}/>
              <Route path='editStudent/:id' element={<EditStudent/>}/>
            </Route>
            <Route path='/course'>
              <Route path='addCourse' element={<AddCourse/>}/>
              <Route path='viewCourse' element={<ViewCourse/>}/>
              <Route path='editCourse/:id' element={<EditCourse/>}/>
            </Route>
          </Routes>
      </UserContext.Provider>
    </div>
  </div>
</div>

  );
}

export default App;
