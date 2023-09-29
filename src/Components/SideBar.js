import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillDashboard} from"react-icons/ai"
import {BsPersonFillAdd,BsCalendarWeekFill} from "react-icons/bs"
import {FaSearch} from "react-icons/fa"
import {MdScreenSearchDesktop} from "react-icons/md"
import {GrChapterAdd} from "react-icons/gr"
const SideBar = () => {
    const iconStyles = {fontSize:"20",color:"navy"}
  return (
    <>
<nav id="sidebar" className="navbar navbar-expand-lg sidebar _sidebar">
    <div className="position-sticky">
        <ul className="nav flex-column mt-1">
            <li className="nav-item">
                <Link className="nav-link" href="#!" to="/dashboard">
                    <span className="sidebar-items">Dashboard</span><AiFillDashboard className='sidebar-icons' style={iconStyles}/>
                </Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#!" >
                    <span className="sidebar-subheading">Student</span>
                </a>
                <ul className="nav flex-column ml-3">
                    <li className="nav-item">
                        <Link className="nav-link" href="#!" to="/student/addStudent">
                            <span className='sidebar-items'>Add Student</span><BsPersonFillAdd className='sidebar-icons' style={iconStyles}/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#!" to="/student/viewStudent">
                           <span className="sidebar-items"> View Students</span><FaSearch className='sidebar-icons' style={iconStyles}/>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#!">
                    <span className="sidebar-subheading">Teacher</span>
                </a>
                <ul className="nav flex-column ml-3">
                    <li className="nav-item">
                        <Link className="nav-link" href="#!" to="/teacher/addTeacher">
                            <span className="sidebar-items">Add Teacher</span><BsPersonFillAdd className='sidebar-icons' style={iconStyles}/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#!" to="/teacher/viewTeacher">
                            <span className="sidebar-items">View Teachers</span><FaSearch className='sidebar-icons' style={iconStyles}/>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#!">
                    <span className="sidebar-subheading">Course</span>
                </a>
                <ul className="nav flex-column ml-3">
                    <li className="nav-item">
                        <Link className="nav-link" href="#!" to="/course/addCourse">
                            <span className="sidebar-items">Add Course</span><GrChapterAdd className='sidebar-icons' style={iconStyles}/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#!" to="/course/viewCourse">
                            <span className="sidebar-items">View Courses</span><MdScreenSearchDesktop className='sidebar-icons' style={iconStyles}/>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="#!" to="/calendar">
                    <span className="sidebar-items">Calendar</span><BsCalendarWeekFill className='sidebar-icons' style={iconStyles}/>
                </Link>
            </li>
            
        </ul>
    </div>
    
</nav>

    </>
  )
}

export default SideBar