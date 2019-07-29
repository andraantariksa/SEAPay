import React from 'react';
import {Row,Col} from 'react-bootstrap';

const Home = (props) => {
    return ( 
        <Row className="justify-content-center">
          <Col xs={6} md={4}>
            <h1 className="text-center">Welcome to SEA Pay {props.user}</h1>
          </Col>
        </Row>
      )
}

export default Home;