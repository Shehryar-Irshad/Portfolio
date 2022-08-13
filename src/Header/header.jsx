import React from "react";
// import header from "../images/header.jpg";
import pic from "../images/pic.png";
import headback2 from "../images/headback2.gif";

import "./header.css"  

const MainContent = () =>{

     return(
       <div className="container-fluid text-center" id="main">
        <img src={headback2} className="image"/>
        <div className="main2">
        <div id="head">
         <img id="pic" src={pic} alt="My pic"/>
         <h1>My Name is Shehryar Irshad</h1></div>
           <h4>Here's my portfolio</h4>
          <div id="btn">
           <button id="btn2" class="btn-outline-dark">Get Started</button>
           </div>
         
        </div>
    
       </div>
     );
}
export default MainContent