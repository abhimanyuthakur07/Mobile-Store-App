import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import logo from '../logo.svg';
import styled from "styled-components";
import {ButtonContainer} from "./Button";



//import './App.css';

class Navbar extends Component {
//1 rem = 16 pixels.

render() {
      return( 
          <NavWrapper className = "navbar navbar-expand-sm  navbar-dark px-sm-5">
          	
          		<Link to="/">
          		<img src="https://cdn4.iconfinder.com/data/icons/desktop-app-free/32/Desktop_Desktop_App_Telephone_Phone_Comunication-15-512.png" width = "34"          		alt="store" className="navbar-brand" />
          </Link>
          <ul className="navbar-nav align-items center">
          	<li className="nav-item ml-5">
          	<Link to="/" className="nav-link">
          		products
          		
          	</Link>	
          	</li>
          </ul>
           <Link to="/cart" className="ml-auto">
          	<ButtonContainer >
          	<span className="mx">
          		<i className="fas fa-cart-plus"/>
          		
          	</span>
          		my cart	
          	</ButtonContainer>
          	</Link>
          </NavWrapper>
          

	   ); 
        
  }
}
const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
	color: var(--mainWhite)!important;
	fontsize: 1.3rem; 
	text-transform: capitalize!important; 
}

`;																			
export default Navbar;