import React,{ Component } from "react";
import MainContent from "./Header/header";
import {HashRouter as Router, Link, Route, Routes} from "react-router-dom"
import NavBar from "./navbar/Navbar";
import About from "./About/About"
import Form from "./Form/form";
import Work from "./Work/work";
import Footer from "./Footer/Footer";
import "./custom.css";
export default class App extends Component{
    render(){
    
        return(
          <Router>     
              <div className="App"> 
              <NavBar/>
              <MainContent/>
              <About/>
              <Form/>
              <Work/>
              <Footer/>
              </div>
              <div>
              <Routes>
                <Route exact path={"/About/About"} element={<About/>}/>
                <Route path={"/Form/form"} element={<Form/>}/>
                <Route path={"/Work/work"} element={<Work/>}/>
              </Routes>
              </div>
          </Router>
        );
    }
}