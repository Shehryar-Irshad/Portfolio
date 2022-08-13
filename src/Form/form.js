import React,{ Component } from "react";
import formpic from "../images/formpic.jpg";
import "./form.css";
class Form extends Component{
    state = {
        Name: null, Email: null, Message: null
    }
    handleName = (e) =>{
        this.setState({
           Name: e.target.value
        });
    }
    handleEmail = (e) =>{
        this.setState({
            Email: e.target.value
         });
    }
    handleMessage = (e) =>{
        this.setState({
            Message: e.target.value
         });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <section id="port-frm">
            <div className="div-bg">
        <div className="frm-img-div">
            <img id="frm-img" src={formpic} alt="contat us" />
        </div>

        <div className="div-frm">


            <form className="frm">
                <div className="form-head">
                    <h3 id="frm-head">Contact US</h3>
                </div>

                <div className="div-name">

                    <input type="text" onChange={this.handleName} id="name" placeholder="Name" />
                </div>

                <div className="div-email">

                    <input type="email" onChange={this.handleEmail} id="email" placeholder="Email" />
                </div>

                <div className="div-msg">

                    <input type="textbox" onChange={this.handleMessage} id="msg" placeholder="Message" />
                </div>

                <div className="div-frm-btn"><button id="frm-btn" class="btn-outline-dark"
                        onClick={this.handleSubmit}>Submit</button></div>


            </form>
        </div>
        </div>

    </section>
        );
    }
}
export default Form