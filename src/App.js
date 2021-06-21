import React, { Component, useState, useEffect } from "react";
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
import Customer from "./pages/Customer";
import Models from "./pages/Models";
import Homepage from "./pages/Homepage";
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Container>
          <Navbar color="inverse" light expand="md">
            <Col>
              <NavbarBrand href="/">Dunedin3D</NavbarBrand>
            </Col>
            <Col>
              <Nav>
                <NavItem>
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/Customer">Customer</Link>
                </NavItem>
                <NavItem>
                  <Link to="/Models">Models</Link>
                </NavItem>
              </Nav> 
            </Col>
          </Navbar>
        </Container>
        <Header />
        <main className="content">
          <Container>
            <Switch>
              <Route exact path="/">
              <Homepage />
              </Route>
              <Route exact path="/Customer">
                <Customer />
              </Route>
              <Route exact path="/Models">
                <Models />
              </Route>
            </Switch>
          </Container>
        </main>
      </Router>
    </>
  );
}

export default App;
