import React,{Component} from 'react';
import {Form,Col,Button, Container,Row} from 'react-bootstrap';

class Signin extends Component{
  state = {
    email:"",
    password:"",
    validated:false
  }
  handleChangeInput = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false){
      e.preventDefault();
      e.stopPropagation();
    }else{
      e.preventDefault();
      e.stopPropagation();
      this.props.loggedIn(this.state.email);
      this.props.history.push("/") //Mencoba redirect
    }
    this.setState({
      validated:true
    })
  }
  render(){
    return (
      <Container>
          <Row>
          <Col xs={6} md={4}>
          </Col>
          <Col xs={6} md={4}>
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" onChange={this.handleChangeInput}/>
                <Form.Control.Feedback type="invalid">Email required!</Form.Control.Feedback>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
      
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" onChange={this.handleChangeInput}/>
                <Form.Control.Feedback type="invalid">Password required!</Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit">
                Log In
              </Button>
            </Form>
          </Col>
          <Col xs={6} md={4}>
          </Col>
        </Row>
        </Container>
        );
  }
}

export default Signin;