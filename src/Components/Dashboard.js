import React, { useContext, useEffect } from 'react'
import {FaUserTie,FaUserAlt} from "react-icons/fa"
import {MdMessage,MdTask} from "react-icons/md"
import { UserContext } from '../App'
const Dashboard = () => {
    let context = useContext(UserContext)
    const iconStyles = {fontSize:"30",marginLeft:"20px",marginBottom:"10px",color:"grey"}
    useEffect(()=>{

    },[])
  return (
    <>
    <div className="container mt-5">
    <div className="row">
        <div className="col-md-3">
            <div className="card info-card">
                <div className="card-body">
                    <h5 className="card-title">Students<FaUserAlt style={iconStyles}/></h5>
                    <p className="card-text text-center font-italic">{context.student.length}</p>
                </div>
            </div>
        </div>

        <div className="col-md-3">
            <div className="card info-card">
                <div className="card-body">
                    <h5 className="card-title">Feedbacks<MdMessage style={iconStyles}/></h5>
                    <p className="card-text text-center font-italic">{context.feedbacks}</p>
                </div>
            </div>
        </div>

        <div className="col-md-3">
            <div className="card info-card">
                <div className="card-body">
                    <h5 className="card-title">Teachers<FaUserTie style={iconStyles}/></h5>
                    <p className="card-text text-center font-italic">{context.teacher.length}</p>
                </div>
            </div>
        </div>

        <div className="col-md-3">
            <div className="card info-card">
                <div className="card-body">
                    <h5 className="card-title">Tasks<MdTask style={iconStyles}/></h5>
                    <p className="card-text text-center font-italic">{context.tasks}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Dashboard