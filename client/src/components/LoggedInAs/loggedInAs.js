import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LoggedInAs() {

    const [loggedInAs, setLoggedInAs] = useState('');

    useEffect(() => {
        async function fetchData() {
            const request = await axios
                .get('/api/users');
            console.log(request.data)
            setLoggedInAs(request.data.user.username);
            return request;
        }
        fetchData();
    }, [loggedInAs]);

    return (
        <>
            <Row>
                <Col className="col">Logged in as: {loggedInAs}</Col>
            </Row>
        </>
    )
}

export default LoggedInAs;