import React from 'react';
// import { setState } from 'expect/build/jestMatchersObject';
import './form.styles.scss';
import axios from 'axios'

// let isValid = true;

class Form extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            nameError: '',
            emailError: '',
            isValidName: true,
            isValidEmail: true
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name:event.target.value,
            nameError: '',
            isValidName:true
        })
    }
    
    handleEmailChange = (event) =>{
        this.setState({
            email:event.target.value,
            emailError: '',
            isValidEmail:true
        })
    }

    validate = () =>{
        let nameError = "Type your full name correctly";
        let emailError = "insert a valid email";
        // regular
        
        let regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
        let regexName = /(\w.+\s).+/i;
        let noValidated = true;
        if(!regexName.test(this.state.name)){
            this.setState({nameError:nameError, isValidName:false});
            noValidated = false;
        }
        
        if(!regexEmail.test(this.state.email)){
            this.setState({emailError:emailError,isValidEmail:false});
            noValidated = false;
        }
        return noValidated;
    }

    
    
    submitHandler = e =>{
        // alert("gooo: " + this.props.featureforplants);

        let [sun, water, pet] = this.props.featureforplants;
        
        let validationError = false;
        let valid;

        e.preventDefault();
        console.log("iddddd: " + this.props.id);
        axios.post(`https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=${sun}&water=${water}&pets=${pet}`
        ,{name : this.state.name, email : this.state.email, id:this.props.id})
        .then(response =>{
            console.log(response);
            valid = this.validate();
            if(!validationError){
                this.props.codEnd();
            }
        })
        .catch(error => {
            validationError = true;
            console.log(error);
            valid = this.validate();
            if(!validationError){
                this.props.codEnd();
            }
        })
        

    }

    render(){
        return(
            <form onSubmit={this.submitHandler} className = "form-plants">
                <div >
                    <label> Name </label>
                    <br />
                    <input 
                        type="text"
                        placeholder = "Crazy Plant Person"
                        value={this.state.name}
                        onChange = {this.handleNameChange}
                        className = {`${this.state.isValidName}Element`}
                    />
                    <div style = {{color:"red", fontSize:12}}>{this.state.nameError} </div>
                </div>

                <div>
                    <label> E-mail </label>
                    <br />
                    <input 
                        type="email"
                        placeholder="plantperson@gmail.com"
                        value={this.state.email}
                        onChange = {this.handleEmailChange}
                        className = {`${this.state.isValidEmail}Element`}

                    />
                    <div style = {{color:"red", fontSize:12}}>{this.state.emailError} </div>
                </div>
                <button type = "submit" className = "button-form">send</button>
            </form>


        )
    }
}

export default Form;