import React from 'react'
import HighSun from '../../images/Suns/high.sun.component'
import LowSun from '../../images/Suns/low.sun.component'
import NoAnswer from '../../images/Suns/no.answer.component'

import Rarely from '../../images/water/rarely.watering.component'
import Regularly from '../../images/water/regularly.watering.component'
import Daily from '../../images/water/daily.watering.component'

import Pet from '../../images/dogs/pet.component'




const Option = (props) => {
    const name = props.name;
    const option = props.option;
    // return <p>{option}</p>;
    if(name === "sunlight"){
        return(
            (function() {
            
                switch(option) {
                  case 0:
                  return <HighSun />;
                 
                  case 1:
                  return <LowSun />;
                  
                  default:
                  return <NoAnswer />;
                  
                };
            })()

        ) 
    }
    if(name === "water"){
        return(
            (function() {
            
                switch(option) {
                  case 0:
                  return <Rarely />;
                  
                  case 1:
                  return <Regularly />;
                  
                  default:
                  return <Daily />;
                };
            })()

        ) 
    }
    else{
        return(
            (function() {
            
                switch(option) {
                  case 0:
                  return <Pet />;
                  
                  case 1:
                  return <NoAnswer />;
                  
                  default:
                  return null;
                };
            })()

        ) 
    }
}

export default Option;