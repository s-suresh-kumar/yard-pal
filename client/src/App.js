import axios from 'axios';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import NavBar from './components/NavBar/index';
import Jumbo from './components/Jumbotron/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LOADING, SET_USER, UNSET_USER } from './store/actions';
import { useStoreContext } from './store/store';
import "./App.css";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Browse from './pages/Browse';


import About from './pages/About';

const App = () => {
  const history = useHistory();
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    dispatch({ type: LOADING });

    axios.get('/api/users').then((response) => {
      if (response.data.user) {
        dispatch({ type: SET_USER, user: response.data.user });
        history.push('/');
      } else {
        dispatch({ type: UNSET_USER });
        // history.push('/login');
      }
    });
  }, [dispatch, history]);

    return (
      <>
        <Container>
          <Row>
            <Col>
              <Jumbo />
              <NavBar />
            </Col>
          </Row>
        </Container>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Browse" component={Browse} />
          <Route exact path="/About" component={About} />
        </Switch>
      </>
    );
  }

export default App;
