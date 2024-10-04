import React from "react";
import './Nav.css'
export default class NavF extends React.Component {
    render() {
        return(
            <>
            <div style={{height:"58px",width:"100%",backgroundColor:"#f1f1f1"}}>
                <p style={{display:"inline-block", width:"60%",marginLeft:"20px"}}>QTrip</p>
                <p style={{display:"inline-block",marginRight:"50px"}}>Home</p>
                <p style={{display:"inline-block",marginRight:"50px"}}>Reservation</p>
                <p style={{display:"inline-block",marginRight:"50px",color:"orange"}}>Login Here</p>
                <button id="btnn">Register</button>
            </div>
            </>
        )
    }
}