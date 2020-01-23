import React from 'react';
import NavigationBar from '../components/navigationBar/navigationBar.component'
import {Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './Home.scss'

// main page:

const Home = ({props}) => (


    <div className = 'homepage'>
        <Container>
        {/* navbar with a logo */}
        <NavigationBar/>
        {/* where the aplication starts: */}
        <div className = "aplication">

            <div md = "4">
              
                {/* title of the first page */}
                <h2 className = "quizz"> Find your next green friend </h2>
                {/* button to starts responding the quiz */}
                <Link to='/quizz'>
                    <Button className = "branco" variant="branco">&#10230; &nbsp;&nbsp; start quizz</Button>
                </Link>    
            </div>
            {/* two images for the first page... One for desktop and the other for mobile: */}
            <div md = "8"  className="imageHeader">
                <img className = "image-desktop" alt="any" src={require('../assets/assets/illustrations/illustration-home.png')} />
                <img className = "image-mobile" alt="any" src={require('../assets/assets/illustrations/illustration-home-mobile.png')} />
            </div>
            
        </div>
        </Container>
    </div>
        
        
        
  )

  export default Home;