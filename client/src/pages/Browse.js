import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ItemModal from '../components/ItemModal/index'
import BrowseContainer from '../components/BrowseContainer/index'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoggedInAs from '../components/LoggedInAs/loggedInAs'

function Browse() {
    // Declare itemArray as a setState variable, set to empty array
    const [itemArray, setItemArray] = useState([]);
    //useEffect loads once when page renders calling async fetchData
    useEffect(() => {
        async function fetchData() {
            // Async get request from axios
            const request = await axios
                .get('/api/users/browseItems');
            // setItemArray pushes request to itemArray
            setItemArray(request.data.items);
            return request;
        }
        fetchData();
        // Calls useEffect anytime itemArray is changed
    }, []);

    return (
        <Container>
            <Row className="border">
                <Col>
                    <Row className="d-inline-flex">
                        <Col className="col" >
                            <ItemModal
                                setItemArray={setItemArray}
                                itemArray={itemArray}
                            />
                        </Col>
                        <Col className="col float-right">
                            <LoggedInAs />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <BrowseContainer
                                itemArray={itemArray}
                                setItemArray={setItemArray}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Browse;