import React from 'react';
import ItemModal from '../components/ItemModal/index'
import BrowseContainer from '../components/BrowseContainer/index'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Browse() {
    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col className="d-inline-flex m-3">
                            <ItemModal />
                            <h3 className="pleaseClick">Click here to add an item to your sale.</h3>
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