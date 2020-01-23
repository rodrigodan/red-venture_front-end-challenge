import React from 'react';
import { Navbar } from 'react-bootstrap';
import {ReactComponent as Logo} from '../../assets/assets/logo/logo-greenthumb.svg'

// navigation bar with the logo
const NavigationBar = () => (
  
            <Navbar.Brand href="/" className = "logo">
                <Logo />
            </Navbar.Brand>
   
)

export default NavigationBar;