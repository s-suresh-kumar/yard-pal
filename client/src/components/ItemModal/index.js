import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

function ItemModal() {
    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);

    const history = useHistory();

    const [ newItemInfo, setSetNewItemInfo ] = useState({
      name: '',
      description: '',
      price: 0, 
    });
  
    const handleChange = (event) => {
    //   const { name, value } = event.target;
  
    //   setSetNewItemInfo({ ...newItemInfo, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setShow(false);
      axios
        .put('/api/users:items', {
          name: newItemInfo.name,
          description: newItemInfo.description,
          price: newItemInfo.price
        })
        .then((response) => {
          if (!response.data.error) {
            history.replace('/Browse');
          } else {
            console.log('error: post ItemModal');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return (
            <Row>
                <Col>
                    <Button variant="primary" onClick={handleShow}>
                        Add Item
                    </Button>
                    <Modal show={show}>
                        <Modal.Header>
                            Add item for Sale
                    </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label for="item">Item</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="newItem-name"
                                        id="newItem-name"
                                        placeholder="Add Item"
                                        value={newItemInfo.name}
                                        // onChange={handleChange}
                                    />
                                    <Form.Label for="item">Item Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="newItem-description"
                                        id="newItem-description"
                                        placeholder="Add Description"
                                        value={newItemInfo.description}
                                        // onChange={handleChange}
                                    />
                                    <Form.Label for="item">Item Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="newItem-price"
                                        id="newItem-price"
                                        placeholder="Add Price"
                                        value={newItemInfo.price}
                                        // onChange={handleChange}
                                    />
                                    <Button
                                        color="dark"
                                        style={{ marginTop: '2rem' }}
                                        onClick={handleSubmit}
                                    >Add Item</Button>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </Col>
            </Row>
    );
}

export default ItemModal;