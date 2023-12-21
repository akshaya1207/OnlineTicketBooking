import React,{Component} from "react";
import './App.css';
import { Link } from "react-router-dom";
export default class Login extends Component
{
    render()
    {
      return (
       
             <div className="b1">
               
              <form>
                <div className="b2">
                <h3 style={{color:"purple"}}>Welcome!</h3>
               
               <label style={{fontSize:"17px",color:"black"}}>{this.props.name} </label>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <input type="email"></input>
                </div>
                <br></br>
                
                <div className="b3">
                <label style={{fontSize:"17px",color:"black"}}>{this.props.password} </label>
                &nbsp;
                &nbsp;
                <input type="password"></input>
                </div>
                <br></br>
            
                
              
                <label style={{fontSize:"17px",color:"black"}}>Don't have an Account : </label>
                <br></br>
                <br></br>
                <center>
                    <div className="b5">
      <Link to='/Signup'><button>Signup</button></Link>
      </div>
      </center>
                &nbsp;
                &nbsp;
               <br></br>
               
            </form>
            </div>
        )
    }
}