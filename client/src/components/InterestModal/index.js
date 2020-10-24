import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { INTEREST_INFO } from '../../store/actions';
import { useStoreContext } from '../../store/store';

function InterestModal({
    show,
    closeInterestModal,
}) {
    const [state, dispatch] = useStoreContext();
    const [interestArray, setInterestArray] = useState({
        name: '',
        email: '',
        message: '',
    })

    async function handleSubmit(e) {
        e.preventDefault();
        closeInterestModal();
        await axios
            .put('/api/users/addInterest', state.interestItem)
            .then((response) => {
                console.log('success');
            })
            .catch((error) => {
                console.log(error);
            });
        window.location.reload()
    };

    const handleConfirm = () => {
        dispatch({
            type: INTEREST_INFO, interestItem: {
                name: state.interestItem.name,
                description: state.interestItem.description,
                price: state.interestItem.price,
                imgUrl: state.interestItem.imgUrl,
                itemId: state.interestItem.itemId,
                interest: interestArray,
                username: state.user_name,
            }
        })
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInterestArray({ ...interestArray, [name]: value });
    };
    return (
        <Row>
            <Col>
                <Button className="m-2" variant="primary" onClick={handleShowInterest}>
                    Interested?
                </Button>
                <Modal show={show}>
                    <Modal.Header>
                        <Row>
                            <Col>
                                Please provide your information below
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button onClick={closeInterestModal} variant="light">X</Button>
                            </Col>
                        </Row>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="p-2" id="intf">
                            <Form.Label className="pt-1">Your Name</Form.Label>
                            <Form.Control
                                type="input"
                                id="name"
                                className="form-control"
                                name="name"
                                placeholder="Your name"
                                value={interestArray.name}
                                onChange={handleChange}
                            />
                            <Form.Label className="pt-1">Your Email</Form.Label>
                            <Form.Control
                                type="input"
                                id="email"
                                className="form-control"
                                name="email"
                                placeholder="Your Email"
                                value={interestArray.email}
                                onChange={handleChange}
                            />
                            <Form.Label className="pt-1">Item or item description</Form.Label>
                            <Form.Control
                                type="input"
                                id="message"
                                className="form-control"
                                name="message"
                                placeholder="Item"
                                value={interestArray.message}
                                onChange={handleChange}
                            />
                            <Button
                                color="dark"
                                style={{ marginTop: '2rem' }}
                                onClick={handleConfirm}
                            >Confirm Interest</Button>
                            <Button
                                color="dark"
                                style={{ marginTop: '2rem' }}
                                onClick={handleSubmit}
                            >Submit Form</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Col>
        </Row>
    );
}

export default InterestModal;