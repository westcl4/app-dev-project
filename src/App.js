import React, { Component, useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
} from "reactstrap";
import Customer from "./pages/Customer.js";
import Models from "./pages/Models.js";
import Home from "./pages/Home.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="pages/Models">Models</Link>
            </li>
            <li>
              <Link to="pages/Customer">Customer</Link>
            </li>
          </ul>

          <Switch>
            <Route path="pages/Models">
              <Models />
            </Route>
            <Route path="pages/Customer">
              <Customer />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      //   <div>
      //     <Router>
      //       <Navbar color="inverse" light expand="md">
      //         <NavbarBrand href="/">Dunedin3D</NavbarBrand>
      //         <NavbarToggler onClick={this.toggle} />
      //         <Collapse isOpen={this.state.isOpen} navbar>
      //           <nav>
      //             <ul>
      //               <li>
      //                 <NavLink to="/">Home</NavLink>
      //               </li>
      //               <li>
      //                 <NavLink to="/about">About</NavLink>
      //               </li>
      //               <li>
      //                 <NavLink to="/contact">Contact</NavLink>
      //               </li>
      //             </ul>
      //           </nav>
      //         </Collapse>
      //       </Navbar>
      //     </Router>
      //     <Jumbotron>
      //       <Container>
      //         <Row>
      //           <Col>
      //             <Header />
      //             <p>
      //               <Button
      //                 tag="a"
      //                 color="success"
      //                 size="large"
      //                 href="http://reactstrap.github.io"
      //                 target="_blank"
      //               >
      //                 Make a new Order
      //               </Button>
      //             </p>
      //           </Col>
      //         </Row>
      //       </Container>
      //     </Jumbotron>
      //   </div>
      //);
    );
  }
}

export default App;
