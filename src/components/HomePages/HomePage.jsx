import React from 'react'
import './stlye.css';
import {Link} from 'react-router-dom';
function LandingPage() {
    return (
        <div className='background' href="#">
            <nav className='navig'>
                <h1 className='logo'>T<span className='sub'>H </span></h1>
                <ul>
                    <li ><a className='btn1' href='#'>Home</a></li>
                    <li><a className='btn2' href='#'>About Us</a></li>
                    <li><a className='btn3' href='#'>Contact Us</a></li>
                </ul>

            </nav>


            <div className='content'>
                <h1>Share & Buy   </h1>
                <h6>In Talent <span className='rer'>Hub</span></h6>
                <p className='par'>Boost your Talent By showing What You can <br/>talent Hub Is Here For You </p>
                <p className='para'>You May Like Some Potrait , Some Scripts Of Songs <br/>Some Dancing People <br/>Here You Are At The Right Place BuyWhat You Like </p>
                 <Link   className='button1'  to="/SignUp">Join Us</Link>  
            </div>
          <div className='left'>
          <div className='appl '>
           <h5>Comedy</h5>
             
          </div>
          <div className='appl1 '>
           <h5>Song Writter</h5>
             
          </div>
          <div className='appl2 '>
           <h5>Singer</h5>
             
          </div>
          <div className='appl3 '>
           <h5>Audio</h5>
             
          </div>
          <div className='appl4 '>
           <h5>Drawing</h5>
             
          </div>
          <div className='appl5 '>
           <h5>Dancer</h5>
             
          </div>
          </div>

        </div>
    )
}

export default LandingPage;