import React from 'react';
import ItemModal from '../components/ItemModal/index'
import BrowseContainer from '../components/BrowseContainer/index'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoggedInAs from '../components/LoggedInAs/loggedInAs'

function Browse() {
    return (
        <Container>
            <Row className="border">
                <Col>
                    <Row className="d-inline-flex">
                        <Col className="col" >
                            <ItemModal />
                        </Col>
                        <Col className="col float-right">
                            <LoggedInAs />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <BrowseContainer />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Browse;