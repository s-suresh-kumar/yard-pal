import axios from 'axios';
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { LOADING, SET_USER } from '../store/actions';
import { useStoreContext } from '../store/store';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Login() {
  const [, /* state */ dispatch] = useStoreContext();
  const history = useHistory();

  const [loginCreds, setLoginCreds] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginCreds({ ...loginCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: LOADING });

    axios
      .post('/api/users/login', {
        username: loginCreds.username,
        password: loginCreds.password,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: SET_USER, user: response.data });
          history.replace('/Browse');
        }
      })
      .catch((error) => {
        console.log('login error: ');
        console.log(error);
      });
  };
  


  return (
    <Container>
      <Row>
        <Col className="col col-md-4 mx-auto mt-4">Please login by entering an email address and a desired password</Col>
      </Row>
      <Row >
        <Col>
          <Row>
            <Col className="col col-md-6 col-lg-4 border login bg-light mx-auto mt-4">
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
                  value={loginCreds.username}
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
                  value={loginCreds.password}
                  onChange={handleChange}
                   />
                </Form.Group>
                <Button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleSubmit}>
                  Login
                </Button>
                <Link className="btn btn-lg btn-primary btn-block" type="submit" as={Link} to="/Signup" >
                  Sign Up
                </Link>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default Login;