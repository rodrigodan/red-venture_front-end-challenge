// Importing various compnent
// This component is responsible for managing most of others components:
import React from "react";
import { quizData } from "./quizzData";

import MainIcon from './quizz.main.icon.component'
import TitleQuizz from './title.quizz.component'
import OptionsList from './quizz-questions-list/options.list.components'
import CardList from '../card-list/card-list.components'
import {Row, Col,Container} from 'react-bootstrap';

import {Link} from 'react-router-dom';
import NavigationBar from '../navigationBar/navigationBar.component';

// variable myAnswers2 is an array that stores temporarily the user's answers to the quiz:
let myAnswers2 = [];
// This flag define what kind of logo it will be using(lateral for desktops or on top for mobile)
let flag = false; //line of the logo left
// defines the quantity of elements was got after a get request based on the user's quiz answers 
let sizeItens = 0;
class MainQuiz extends React.Component {

    state = {
      questionPart1: null,
      questionPart2: null,
      currentQuestion: 0,
      name: null,
      answer: null,
      myAnswer: null,
      options: [],
      disabled: true,
      isEnd: false,
      plants: null,
      fomulario: false,
      errors: false
    };
  
    // loading the quiz data at the beginning: 
    loadQuizData = () => {
      this.setState(() => {
        return {
          questionPart1: quizData[this.state.currentQuestion].questionpart1,
          questionPart2: quizData[this.state.currentQuestion].questionpart2,
          name: quizData[this.state.currentQuestion].name,
          answer: quizData[this.state.currentQuestion].answer,
          options: quizData[this.state.currentQuestion].options
        };
      });
    };
  
    // The componentDiMount is executed exactly after the component is mounted
    componentDidMount() {
      this.loadQuizData();
    }
    // method to go to the next quiz question:
    nextQuestionHandler = () => {
  
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        myAnswer: null
      });
    };

    // method to be back to the previous quiz question:
    PreviousQuestionHandler = () => {
      if(this.state.currentQuestion !== 0){
        this.setState({
          currentQuestion: this.state.currentQuestion - 1,
          myAnswer: null
        });
      }
    }
    
    // calling immidiately when updates occurs:
    componentDidUpdate(prevProps, prevState) {
      if (this.state.currentQuestion !== prevState.currentQuestion) {
        this.setState(() => {
          return {
            disabled: true,
            questionPart1: quizData[this.state.currentQuestion].questionpart1,
            questionPart2: quizData[this.state.currentQuestion].questionpart2,
            name: quizData[this.state.currentQuestion].name,
            options: quizData[this.state.currentQuestion].options,
            answer: quizData[this.state.currentQuestion].answer
          };
        });
      }
    }

    //check answer
    // this method is called everytime that an answer is sent by user on quiz:
    checkAnswer = (answer, categoryItemQuiz,currentQuestion) => {
      
      this.setState({ myAnswer: answer, disabled: false});

      myAnswers2[currentQuestion] = categoryItemQuiz[answer];
    };

    // this method is required if and only if I'm in the last question in the quiz:
    finishHandler = () => {
      
      if (this.state.currentQuestion === quizData.length - 1) {

        let getIt = [];
        let i = 0;
        while(i < 3){

          getIt[i] = myAnswers2[i].split(" ")[0].toLowerCase();
          i += 1;

        }

        console.log("0::" + getIt[0]);
        console.log("1::" + getIt[1])
        getIt[2] = getIt[2].split("/")[0];
        getIt[2] = getIt[2] === "no" ? "false": "true";
        console.log("2::" + getIt[2]);
        myAnswers2 = getIt;
      
        let temp;
        // doing a get request using a url and the answers to the quiz given by the user:
        fetch(`https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=${getIt[0]}&water=${getIt[1]}&pets=${getIt[2]}`)
          .then(response => response.json())          
          .then(users => {
            temp = users;
            sizeItens = temp.length;
            
            if(temp.length === 7){
              flag = true;
            }
            if(!temp.status){
              this.setState({
                plants:users,
                isEnd: true,
                errors:false
              });
            }
            else{
              this.setState({
                plants:users,
                isEnd: true,
                errors:true
              });
            }
        } )
      }
    };
    // where the componant will render the application:
    render() {
      // const { options, myAnswer, currentQuestion, isEnd } = this.state;
      const {currentQuestion, isEnd } = this.state;
     
      // those one first if's are for the list of the plants based on user choices obtained by the the get request?
      if(this.state.errors){
        return(
          <CardList errors = {this.state.errors} plants = {this.state.plants} featureforplants = {myAnswers2} flag = {flag} sizeItens = {sizeItens}/>
        )
      }
  
      else if (this.state.plants && isEnd && !this.state.formulario) {
        let plants = this.state.plants; 

            return(
              <div>
    
                {/* list of plants based on the user's choice: */}
                <CardList errors = {this.state.errors} plants = {plants} featureforplants = {myAnswers2} flag = {flag} sizeItens = {sizeItens}/>

                {/* Details of a plant indivially from the previous list:  */}
                
      
              </div>
            )
      }
       
      // at the beginning the application will run this else:
      else{

        return ( 
  
            <div className="App">
              <Container>
                {/* the logo */}
              <NavigationBar />
              {/* Icon quiz image */}
              <MainIcon name = {this.state.name} />
       
              {/* title quiz image */}
              <TitleQuizz 
                questionPart1 = {this.state.questionPart1}
                questionPart2 = {this.state.questionPart2}
                name = {this.state.name}
              />
              {/* list of itens in the quizz */}
              <OptionsList 
                    name = {this.state.name}
                    myAnswer = {this.state.myAnswer}
                    categoryItemQuiz = {this.state.options}
                    checkAnswer = {this.checkAnswer}
                    currentQuestion = {this.state.currentQuestion}
                  />
  
                {/* buttons to return or go atraight in the quiz: */}
  
                <Row>
                  <Col md = "2"></Col>
                  <Col md = "4">  
  
                    {/* Return to the home page */}
                    {currentQuestion === 0 && (
                      <Link to='/'>
                        <button
                          className="ui inverted button"
                          onClick={this.PreviousQuestionHandler}
                        >
  
                          &#10229; &nbsp;&nbsp; home
                      
                    </button>
                    </Link>
                    )}
                    {/* be back to the previous quizz question: */}
                    {currentQuestion > 0 && (
  
                    <button
                      className="ui inverted button"
                      onClick={this.PreviousQuestionHandler}
                    >
                        &#10229; &nbsp;&nbsp; previous
  
                    </button>
                    )}
  
                  </Col>
  
  
                  <Col md = "4">
  
                    {/* button to the next quiz question */}
                    {currentQuestion < quizData.length - 1 && (
                    <button
                      className="ui inverted button"
                      disabled={this.state.disabled}
                      onClick={this.nextQuestionHandler}
                    >
               
                          &#10230; &nbsp;&nbsp; next
                  
                    </button>
                    )}
  
                {/* adding a finish button */}
                {currentQuestion === quizData.length - 1 && (
                  <button 
                  className="ui inverted button"
                  disabled={this.state.disabled} 
                  onClick={this.finishHandler}>
                    Finish
                  </button>
                )}
                </Col>
  
                <Col md = "2"></Col>
  
  
              </Row>
            </Container>  
            </div>
          );
      }
      }
    }

  
  export default MainQuiz;
  