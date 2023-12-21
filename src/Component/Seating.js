import React from 'react'
import './Seating.css';
import {Link} from 'react-router-dom';
export default function Seating()
{
    return(
        <div >
            <h3 style={{color:"white"}}>Pick the Seat</h3>
            <p style={{color:"white"}}>One Ticket Cost:250</p>
            <div className="nu">
            <center>
         < input type="text" placeholder="UserName"></input>
          <br></br>
          <br></br>
          
          <input type="number" placeholder="Enter number of seats"></input>
         </center>
         <br></br>
         
         <label>Timing:</label>
         <input type="text" placeholder="11.00 am"></input> &nbsp; &nbsp;
         <input type="text" placeholder="2.00 pm"></input> &nbsp; &nbsp;
         <input type="text" placeholder="6.00 pm"></input> &nbsp; &nbsp;
         <input type="text"placeholder="10.00 pm"></input>
         <br></br>
         <br></br>
         <label>Date:</label>
         <input type="datetime-local"></input>
         </div>
       <p style={{color:"white"}}>Choose your Screen</p>
<label placeholder="screen1">Screen1</label>
<input type="checkbox"></input>
<label placeholder="screen2">Screen2</label> 
<input type="checkbox"></input>
<label placeholder="screen3">Screen3</label> 
<input type="checkbox"></input>
          <br></br>
          <br></br>
          <br></br>
        <div className="a1">
            <p style={{color:"white"}}>Select the Seat</p>
        <label>A</label>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
       
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <br></br>
            <br></br>
        <label>B</label>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <br></br>
            <br></br>
        <label>C</label>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <br></br>
            <br></br>
        <label>D</label>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <br></br>
            <br></br>
        <label>E</label>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <br></br>
            <br></br>
        <label>F</label>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <br></br>
            <br></br>
           </div>
            <center>
                <div className="lo">
            <Link to='/Book'><button>Confirm</button></Link>
            </div>
            </center>
        </div>
    )
}