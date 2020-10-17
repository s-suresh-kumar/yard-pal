import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

function ItemModal({ itemArray, setItemArray }) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const history = useHistory();

    const [newItemInfo, setNewItemInfo] = useState({
        name: '',
        description: '',
        price: 0,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewItemInfo({ ...newItemInfo, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShow(false);
        axios
            .put('/api/users/addItem', {
                item: {
                    name: newItemInfo.name,
                    description: newItemInfo.description,
                    price: newItemInfo.price
                }
            })
            .then((response) => {
                console.log(response.data.items);
                setItemArray(response.data.items)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Row>
            <Col>
                <Button className="mt-1" variant="primary" onClick={handleShow}>
                    Add
                    </Button>
                <Modal show={show}>
                    <Modal.Header>
                        Add item for Sale
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>

                                <Form.Label>Item</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="item"
                                    className="form-control"
                                    name="name"
                                    placeholder="Item Name"
                                    value={newItemInfo.name}
                                    onChange={handleChange} />

                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="description"
                                    className="form-control"
                                    name="description"
                                    placeholder="Item Description"
                                    value={newItemInfo.description}
                                    onChange={handleChange} />



                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="price"
                                    className="form-control"
                                    name="price"
                                    placeholder="Item Price"
                                    value={newItemInfo.price}
                                    onChange={handleChange} />

                                <Form.Label>Upload Images</Form.Label>
                                <Form className="mt-4 p-2 border shadow"
                                    action="/upload"
                                    method="POST"
                                    enctype="multipart/form-data"
                                >
                                    <Form.Group class="form-group">
                                        <Form.Control
                                            type="file"
                                            name="file"
                                            id="input-files"
                                            className="form-control-file border"
                                        />
                                    </Form.Group>
                                    <Button type="submit" className="btn btn-primary">Submit</Button>
                                </Form>
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }}
                                    onClick={handleSubmit}
                                >Add Item</Button>
                            </Form.Group>
                        </Form>
                        <Row className="row">
                            <Col class="col-sm-12">
                                <div class="preview-images">Preview Images Here</div>
                            </Col>
                        </Row>

                    </Modal.Body>
                </Modal>
            </Col>
        </Row>
    );
}

export default ItemModal;