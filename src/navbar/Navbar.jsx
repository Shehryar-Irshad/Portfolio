import React,{ Component } from "react";
import {HashLink as Link} from "react-router-hash-link";

import "./Navbar.css"

class NavBar extends Component{
    
    render(){
      return(
   
        <div className="container-xxl">
         <nav class="navbar navbar-expand-lg navbar-light">
         <a className="navbar-brand">My Portfolio</a>
         <div class="navbar navbar-right" className="icon-nav">
          
          <Link id="icon1" smooth={true} duration={500} to="#about">About</Link>
          <Link id="icon2" smooth={true} duration={500} to="#work">Work</Link>
          <Link id="icon3"  to="#port-frm">Contact</Link>
          </div>
         </nav>
        </div>
      );
    }
}
export default NavBar