import React from 'react';
import Button from 'react-bootstrap/Button';

function Logout() {
    const handleClick = () => {
        console.log('click');
    }
    return(
        <Button onClick={handleClick} className="btn btn-primary ml-1 logout">Logout</Button>
    )
}

export default Logout;