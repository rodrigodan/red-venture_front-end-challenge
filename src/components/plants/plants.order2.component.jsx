import React from 'react'
import {Container} from 'react-bootstrap';
import Form from '../forms/form.component'

import Envelope from '../images/envelope/envelope.component'


class FormBackground extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            finalCode: false
        }
    }

    codEnd = () => {
       this.setState({
           finalCode: true
       }) 
    }


    render(){
        if(!this.state.finalCode){
            return(
                <Container>
                {/* <div className = "formulario-to-fill"> */}
                        {/* <Container> */}
                        <h1 className = "name-stop2">Nice pick!</h1>
                       
                            <p className = "formInfo">
                                Tell us your name and e-mail
                                and we will get in touch
                                regarding your order ;)
                            </p>
                        
                        <Form id = {this.props.id} 
                                    featureforplants = {this.props.featureforplants}
                                    codEnd = {this.codEnd}
                                    />
                        {/* </Container> */}
                {/* </div> */}
                    </Container>
            )  
        }
        else{
            return(
                <div>
                <h1 className = "name-stop2">Thank you</h1>
                 <p className = "formInfo">
                        You will hear from us soon. Please
                        check your e-mail!;)
                </p>
                <Envelope />
                </div>
            )
        }
    }
}

export default FormBackground;