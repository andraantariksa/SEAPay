import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Col, Row, Button, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";

function Home() {
  return (
    <Row>
      <Col xs={6} md={4}>
      </Col>
      <Col xs={6} md={4}>
        <h1>Welcome to SEA Pay</h1>
      </Col>
      <Col xs={6} md={4}>
      </Col>
    </Row>
  )
}

function Signin() {
  return (<Container><Row>
    <Col xs={6} md={4}>
    </Col>
    <Col xs={6} md={4}>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
    <Col xs={6} md={4}>
    </Col>
  </Row></Container>)
}

function Signup() {
  return (<Container><Row>
    <Col xs={6} md={4}>
    </Col>
    <Col xs={6} md={4}>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" pattern="[A-Z]{3,4}" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
    <Col xs={6} md={4}>
    </Col>
  </Row></Container>)
}

function NotFound({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default class App extends React.Component {
  render() {
    return (
    <Router>
      <header style={{ marginBottom: 50, }}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <Link to="/" className="navbar-brand">
              <img
                alt=""
                src="https://react-bootstrap.github.io/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            {' SEA Pay'}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <NavLink to="/signin" className="nav-link">Signin</NavLink>
              <NavLink to="/signup" className="nav-link">Signup</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
    )
  }
}