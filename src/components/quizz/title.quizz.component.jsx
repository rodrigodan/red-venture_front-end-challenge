import React from 'react';
import {Row, Col} from 'react-bootstrap';

const TitleQuizz = (props) => {
    if(props.name !== "chew"){
        return(

            <div className="title-quizz-question">
                <Row>
                    <Col md = "4">
                    </Col>
                    
                    <Col md = "4">
                    <h3>{props.questionPart1} <span> {props.name}</span> {props.questionPart2}</h3>
                    </Col>

                    <Col md = "4">
                    </Col>
                    </Row>
            </div>
        )

    }

    else{
        return(

            <div className="title-quizz-question">
                <Row>
                    <Col md = "3">
                    </Col>
                    
                    <Col md = "6">
                    <h3>{props.questionPart1} <span> {props.name}</span> {props.questionPart2}</h3>
                    <p className = {`${props.name}-subtitle`}>We are asking because some plants can be <span>toxic</span> for your buddy. </p>
                    </Col>

                    <Col md = "3">
                    </Col>
                    </Row>
            </div>
        )
    }
}

export default TitleQuizz;