import React from 'react';
import axios from 'axios'
import { Col, Row } from 'react-bootstrap';

function BrowseContainer() {

    axios
    .get('/api/user:items')
    .then(items => {
        console.log(items);
    })
    .catch(err => console.log(err));
    
    return(
        <Row>
            <Col className="col bg-light p-3 border rounded itemTable">
            <Row className="m-2 ">
                <Col className="col bg-white m-1 pt-1 border rounded">
                    <h4>Image</h4>
                </Col>
                <Col className="col bg-white m-1 pt-1 border rounded">
                    <h4>Item</h4>
                </Col>
                <Col className="col bg-white m-1 pt-1 border rounded">
                    <h4>Description</h4>
                </Col>
                <Col className="col bg-white m-1 pt-1 border rounded">
                    <h4>Price</h4>
                </Col>
            </Row>
            <Row>
                <h1>Items will load from API here</h1>
            </Row>
            </Col>
        </Row>
    )
}

export default BrowseContainer;