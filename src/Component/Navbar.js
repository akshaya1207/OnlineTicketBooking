import{BrowserRouter,Routes,Route,Link} from 'react-router-dom'

import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import Seating from './Seating';
import Book from './Booking';
import './Navbar.css';

function Navbar(){
    return(
        <BrowserRouter>
            <nav>
                <ul>
                &nbsp; &nbsp; &nbsp;
                    <li className='active'>
                        <Link to='/' className='Link'>Home</Link>
                    </li> &nbsp; &nbsp; &nbsp;
                    <li className='actives'>
                        <Link to='/Login' className='Link'>Login</Link>
                    </li> &nbsp; &nbsp; &nbsp; &nbsp;
                    <li className='activess'>
                        <Link to='/Signup' className='Link'>Signup</Link>
                    </li>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <li className='activess'>
                        <Link to='/Seating' className='Link'>Seating</Link>
                    </li> &nbsp; &nbsp; &nbsp; &nbsp;
                    <li className='activess'>
                        <Link to='/Book' className='Link'>Booking</Link>
                    </li>

                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/Login' element={<Login name="Name:" email="Email:" password="Password:"/>}/>
                <Route exact path='/Signup' element={<Signup/>}/>
               
                <Route exact path='/Seating' element={<Seating/>}></Route>
                <Route exact path='/Book' element={<Book date="Date:" no="Phone_No:" name="Movie:" ticket="Ticket_No:"/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Navbar;