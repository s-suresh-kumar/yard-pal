import React from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

function BrowseContainer({ itemArray, setItemArray }) {
    const handleDelete = (_id) => {
        axios
            .put('/api/users/delItem', {
                itemId: _id
            })
            .then(() => {
                async function fetchData() {
                    // Async get request from axios
                    const request = await axios
                        .get('/api/users/browseItems');
                    // setItemArray pushes request to itemArray
                    setItemArray(request.data.items);
                    return request;
                }
                fetchData();
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <Row>
                <Col className="col bg-light p-3 border rounded itemTable">
                    <Row className="m-2 ">
                        <table>
                            <tbody>
                                <tr>
                                    <th><h4>Image</h4></th>
                                    <th><h4>Item</h4></th>
                                    <th><h4>Description</h4></th>
                                    <th><h4>Price</h4></th>
                                </tr>
                                {/* Map through Item array into table */}
                                {itemArray.map((entry, index) =>
                                    <tr key={index}>
                                        <td className="entry-id">{entry._id}</td>
                                        <td className="entry-name">{entry.name}</td>
                                        <td className="entry-description">{entry.description}</td>
                                        <td className="entry-price"><h4>$ {entry.price}</h4></td>
                                        <button
                                            onClick={() => handleDelete(entry._id)}
                                        >X</button>
                                    </tr>

                                )}
                            </tbody>
                        </table>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default BrowseContainer;