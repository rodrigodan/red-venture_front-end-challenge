import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Option from './option.component';
import LeftLogo from '../../left-logo/Left.log.component';
import {Link} from 'react-router-dom';


const OptionsList = (props) => {

    const name = props.name;
    const myAnswer = props.myAnswer;
    const checkAnswer = props.checkAnswer;  
    const categoryItemQuiz = props.categoryItemQuiz;
    const currentQuestion = props.currentQuestion;
    // alert(currentQuestion);
    // alert(categoryItemQuiz);
    
        if(props.name === "sunlight" || props.name === "water"){

        
   
       return(

            <Row className = "quizz-options">
              <Link to='/'>
                  <LeftLogo />
                </Link>

                <Col md = "3">
                </Col>
                {[0,1,2].map(option => (
                    
                    <Col md = "2">
                    
                        <p
                            key={option.id}
                            className={`ui floating message options
                                ${myAnswer === option ? "selected" : null} ${name}`
                            }
                            onClick={() => checkAnswer(option,categoryItemQuiz,currentQuestion)}
                        >

                            <Option 
                                name = {name}
                                option = {option}
                            />
                            <span className = "text-option-item">
                            {categoryItemQuiz[option]}
                            </span>
                            {/* {    
                            <Option 
                                name = {name}
                                option = {option}
                            />
                        } */}


                        </p>

                    </Col>
                
                            
                ))}
                <Col md = "3">
                </Col>

            </Row>
        )
    }
    else{
        return (
            <Row className = "quizz-options">

            <Link to='/'>
                  <LeftLogo />
                </Link>

            <Col md = "4">
            </Col>
            {[0,1].map(option => (
                
                <Col md = "2">
                
                    <p
                        key={option.id}
                        className={`ui floating message options
                            ${myAnswer === option ? "selected" : null} ${name}`
                        }
                        onClick={() => checkAnswer(option,categoryItemQuiz,currentQuestion)}
                    >

                        <Option 
                            name = {name}
                            option = {option}
                        />
                        <span className = "text-option-item">
                            {categoryItemQuiz[option]}
                        </span>
                        {/* {    
                        <Option 
                            name = {name}
                            option = {option}
                        />
                    } */}


                    </p>

                </Col>
            
                        
            ))}
            <Col md = "4">
            </Col>

        </Row>



        )
    }


}

export default OptionsList;