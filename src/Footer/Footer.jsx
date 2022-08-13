import React from "react";
import fblogo from "../images/fblogo.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import "./Footer.css";
const Footer = () =>{
    return(
        <div className="div-footer">
        <div className="container-xxl " style={{height:"111px", textAlign:"center", fontSize:"25px", paddingTop:"20px", marginTop:"10px", backgroundColor:"black"}}>
              <p class="text-light">@copyright 2022-23</p>
              
           <a href="https://www.facebook.com/shehryar.irshad.5">   <img id="logo" src={fblogo} /></a>
           <a href="https://www.linkedin.com/in/shehryar-irshad-176b231a0/"><img id="link-logo" src={linkedin}/></a>
           <a href="https://github.com/Shehryar-Irshad"><img id="git-logo" src={github}/></a>

        </div>
      
        </div>
    );
}
export default Footer