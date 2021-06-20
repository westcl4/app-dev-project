import React, { Component, useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { Switch, Route, Router, Link } from "react-router-dom";
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
              <Link to="pages/models">Models</Link>
            </li>
            <li>
              <Link to="pages/customer">Customer</Link>
            </li>
          </ul>

          <Switch>
            <Route path="pages/models">
              <About />
            </Route>
            <Route path="pages/customer">
              <Topics />
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
