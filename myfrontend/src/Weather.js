import React from 'react';

import { Button, Form } from 'react-bootstrap';

export class Weather extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Search Weather</Form.Label>
                        <Form.Control type="search" placeholder="Enter city" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
            </div>
        )
    }
}