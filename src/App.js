import React from 'react';
// import './App.css';
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Layout from './components/Layout/layout.component'
import data from './Data';

import Quizz from './components/quizz/quizz.component'

class App extends React.Component {
  render() {
    return (
        // <React.Fragment>
          
            <Layout>
                <Router>
                  <Switch>
                    {/* Route for the initial page */}
                    <Route exact path = "/" component = {Home} data={data} /> 
                      {/* Route for the quiz */}
                    <Route path = "/quizz" component = {Quizz}  />   
                  </Switch>
                </Router>
                  
            </Layout>

            
        // </React.Fragment>
     
    );
  }
}

export default App;
