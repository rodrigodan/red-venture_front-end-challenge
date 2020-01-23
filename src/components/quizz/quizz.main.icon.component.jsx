import React from 'react';
import Sun from '../images/Suns/sun.component'
import Water from '../images/water/water.component'
import Dogs from '../images/dogs/dogs.component'

const MainIcon = (props) => {
    const name = props.name;
    if(name === "sunlight"){
       
        return (<Sun />);
    }
    if(name === "water"){
        return (<Water />);
    }

    else {
        return (<Dogs />);
    }
}

export default MainIcon;