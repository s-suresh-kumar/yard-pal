import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Signup() {
  const history = useHistory();

  const [signUpCreds, setSignUpCreds] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);

    setSignUpCreds({ ...signUpCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    console.log('Handle Click');
    event.preventDefault();

    axios
      .post('/api/users', {
        
        username: signUpCreds.username,
        password: signUpCreds.password,
      })
      .then((response) => {
        if (!response.data.error) {
          history.replace('/Login');
        } else {
          console.log('USERNAME TAKEN');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <Container>
      <Row>
        <Col className="col col-md-4 mx-auto mt-4">Please sign up by entering an email address and a desired password</Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col className="col col-md-6 col-lg-4 border signup bg-light mx-auto mt-4">
              <Form>
                <Form.Group>
                  <Form.Label
                    htmlFor="inputEmail" className="sr-only"
                  >Email address</Form.Label>
                  <Form.Control
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    name="username"
                    placeholder="Email address"
                    value={signUpCreds.username}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label
                    htmlFor="inputEmail" className="sr-only"
                  >Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={signUpCreds.password}
                    onChange={handleChange} />
                </Form.Group>
                <Button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleSubmit}>
                  Sign Up
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup;