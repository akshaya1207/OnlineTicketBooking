import React,{Component} from 'react'
import './Signup.css';
import {Link} from 'react-router-dom';
class Signup extends Component
{
    state={
        signup:"....."
        
          }
    handleChange=()=>{this.setState({signup:"Registered !"})}
    render()
    {
        return(
            <div className="c1">
            <form>
                <h2>Sign Up Page</h2>
                <br></br>
                <br></br>
                <div className="c2">
             <label style={{fontSize:"17px",color:"black"}}>Username :</label>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
     <input type="text" placeholder="Name"/>
     </div>
              <br />
            
              
            <label style={{fontSize:"17px",color:"black"}}> Email ID :</label>
               &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
               <input type="email" placeholder="Email id"/>
              <br />
              <br />
             
              <label style={{fontSize:"17px",color:"black"}}>  Password : </label>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
            <input type="password" placeholder="Password"/>
              <br />
              <br />
              <label style={{fontSize:"17px",color:"black"}}>  Phone No : </label>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
            <input type="number" placeholder="Phone Number"/>
              <br />
              <br />
              <label style={{fontSize:"17px",color:"black"}}>Already a member?</label>
             <br></br>
             <br></br>
             <center>
              <div className="u1">
           <Link to='/Seating'  > <button onClick={this.handleChange}>Sign Up</button></Link>
           </div>
              </center>
              &nbsp;
              &nbsp;
              &nbsp;
              <p>{this.state.signup}</p>
              
            </form>
           
          </div>
        )
    }
}
export default Signup;