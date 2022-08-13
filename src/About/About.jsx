import React from "react";
import aboutpic from "../images/aboutpic.png";
import pic from "../images/pic.png";
import "./About.css"
const About = () =>{
    return(
        <div className="d-flex" id="about">
            <img className="about-pic" src={aboutpic} alt="about us pic"/>
            
            <div className="container-sm">
            <p id="about-p">
            We specialize in building powerful, easy-to-use web apps and internet applications using React.
            A component-based architecture, latest technical tools and equipment provides developmental satisfaction.
            Now its time to move on in Mern stack development to further build some quality applications with these tools.
            Many thousands of users worldwide use the products we developed. <br/><p id="quote">"By Shehryar Irshad"</p> </p>
            <img id="person-pic" src={pic}/>
            </div>
       </div>
    );
}
export default About