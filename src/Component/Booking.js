import React,{Component} from "react";
import './Booking.css';
import { Link } from "react-router-dom";
export default class Login extends Component
{
    render()
    {
      return (
             <div className="d1">
              <form>
                <h2>Book</h2>
               <div>
                <label style={{fontSize:"15px",color:"black"}}>{this.props.name} </label>
               
                <input type="text"></input>
                </div>
                <br></br>
                <br></br>
                <div className="d2">
            <label style={{fontSize:"15px",color:"black"}}>{this.props.no} </label>
                
                <input type="number"></input>
                </div>
                <br></br>
                <br></br> 
                <div className="d3">
            <label style={{fontSize:"15px",color:"black"}}>{this.props.ticket} </label>
              
                <input type="number"></input>
                </div>
                <br></br>
                <br></br> 
                <div className="d4">
                <label style={{fontSize:"15px",color:"black"}}>{this.props.date} </label>
                &nbsp;
               
                <input type="date"></input>
                </div>
                <br></br>
                <br></br>
               
            <center>
              <div className="d5">
      <button>Book</button>
      </div>
              </center>
               
            </form>
            </div>
        )
    }
}