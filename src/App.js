import React, { Component } from 'react';
//import Form from 'react-bootstrap/Form'
//import Button from 'react-bootstrap/Button'
//import Bootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from 'react-router-dom';


import './App.css';
import  Navbar from './components/Navbar';
//import  Product from './components/Product';
import  Productlist from './components/Productlist';
import  ProductDetail from './components/ProductDetail';
import  Cart from './components/Cart';
import  Default from './components/Default';
import  Modal from './components/Modal';




class App extends Component {
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   email: "",
  //   //   password: ""
  //   // };
  // }
  //validateForm() { 
  //   return this.state.email.length > 0 && this.state.password.length > 0;
  // }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   });
  // }

  // handleSubmit = event => {
  //   event.preventDefault();
  // }
  render() {
      return( 
          <React.Fragment>
            <Navbar/>
            <Switch>

            <Route exact path="/" component={Productlist}/>
            <Route path="/ProductDetail" component={ProductDetail}/>
            <Route path="/cart" component={Cart}/>
            <Route component={Default}/>
            
           
            </Switch>
            <Modal/>
          </React.Fragment>





          // <div className="Login">

          //   <Form onSubmit={this.handleSubmit}>
          //     <Form.Group controlId="email" bsSize="large">
          //     <label>Email</label>
          //       <Form.Control
          //         autoFocus
          //         type="email"
          //         value={this.state.email}
          //         onChange={this.handleChange}
          //       />
          //     </Form.Group>
          //     <Form.Group controlId="password" bsSize="large">
          //     <label>Password</label>
          //       <Form.Control
          //         value={this.state.password}
          //         onChange={this.handleChange}
          //         type="password"
          //       />
          //     </Form.Group>
          //     <Button
          //       block
          //       bsSize="large"
          //       disabled={!this.validateForm()}
          //       type="submit"
          //     >
          //       Login
          //     </Button>
          //   </Form>
          // </div>
          );
        
  }
}

export default App;
