import React from 'react'
import { Link } from 'react-router-dom'
import {BiSolidRightArrow} from "react-icons/bi"
const SideBar = () => {
    const iconStyles = {fontSize:"20",margin:"10px",marginBottom:"15px",color:"navy"}
  return (
    <>
<nav id="sidebar" className="col-md-3 col-lg-2 d-md-block sidebar _sidebar text-">
    <div className="position-sticky p-4">
        <ul className="nav flex-column gap-4 mt-1">
            <li className="nav-item">
                <Link className="nav-link" href="#!" to="/dashboard">
                    Dashboard<BiSolidRightArrow style={iconStyles}/>
                </Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#!" >
                    Student Management
                </a>
                <ul className="nav flex-column ml-3">
                    <li className="nav-item">
                        <Link className="nav-link" href="#!" to="/student/addStudent">
                            Add Student<BiSolidRightArrow style={iconStyles}/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#!" to="/student/viewStudent">
                            View Students<BiSolidRightArrow style={iconStyles}/>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#!">
                    Teacher Management
                </a>
                <ul className="nav flex-column ml-3">
                    <li className="nav-item">
                        <Link className="nav-link" href="#!" to="/teacher/addTeacher">
                            Add Teacher<BiSolidRightArrow style={iconStyles}/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#!" to="/teacher/viewTeacher">
                            View Teachers<BiSolidRightArrow style={iconStyles}/>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#!">
                    Course Management
                </a>
                <ul className="nav flex-column ml-3">
                    <li className="nav-item">
                        <Link className="nav-link" href="#!" to="/course/addCourse">
                            Add Course<BiSolidRightArrow style={iconStyles}/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#!" to="/course/viewCourse">
                            View Courses<BiSolidRightArrow style={iconStyles}/>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="#!" to="/calendar">
                    Calendar<BiSolidRightArrow style={iconStyles}/>
                </Link>
            </li>
            
        </ul>
    </div>
</nav>

    </>
  )
}

export default SideBar