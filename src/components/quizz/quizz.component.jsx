import React from 'react';
import './quizz.styles.scss';
import MainQuiz from "./main.quiz.component";
import './quiz.before.scss';

const Quizz = () => (

    <div className="quizz2">
        {/* call the MainQuiz component: */}
        <MainQuiz />
    </div>
);

export default Quizz;