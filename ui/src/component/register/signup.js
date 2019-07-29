import React,{Component} from 'react';
import {Container,Row,Col,Form,Button,Alert} from 'react-bootstrap';

class Signup extends Component{
    state={
        email:null,
        password:null,
        confirmPassword:null,
        type:"user",
        validated:false,
        description:null
    }
    changeType = (e) =>{
        this.setState({
            type:e.target.id
        })
    }
    handleInputChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    checkPassword = (e) => {
        this.setState({
            confirmPassword:e.target.value === this.state.password
        })
    }
    handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false){
            e.preventDefault();
            e.stopPropagation();
        }else {
            e.preventDefault(); //stop refresh page
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
                <Row className="justify-content-center">
                <Col xs={6} md={4}>
                    <div className="mb-2 text-center">
                        <Button variant={this.state.type === "user" ? "secondary" : "outline-secondary"} className="mx-2" id="user" onClick={this.changeType}>
                                Create User
                        </Button>
                        <Button variant={this.state.type === "merchant" ? "secondary" : "outline-secondary"} className="mx-2" id="merchant" onClick={this.changeType}>
                                Create Merchant
                        </Button>
                    </div>
                  <Form noValidate validated={this.state.validated} onSubmit ={this.handleSubmit} style={{"transition":"0.5s"}}>
                    <Form.Group controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control required type="email" placeholder="Enter email" onChange={this.handleInputChange}/>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">Email required!</Form.Control.Feedback>
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
            
                    <Form.Group controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control required type="password" placeholder="Password" onChange={this.handleInputChange}/>
                      <Form.Control.Feedback type="invalid">Password required!</Form.Control.Feedback>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="ConfirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control required type="password" placeholder="Retype Password" onChange={this.checkPassword}/>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">Retype the password!</Form.Control.Feedback>
                        <Alert className="mt-2" variant={this.state.confirmPassword ? "success" : "danger" } style={{"transition":"0.5s"}} show={this.state.confirmPassword !== null}>
                            Password is {this.state.confirmPassword ? "same." : "different!" }
                        </Alert>
                    </Form.Group>
                    {this.state.type === "merchant" ? 
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control required type="text" placeholder="Description" onChange={this.handleInputChange}/>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">Type your merchant description</Form.Control.Feedback>
                    </Form.Group>
                     : null}
                    <Button variant="primary" type="submit">
                      Create
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
            )
    }
}

export default Signup;