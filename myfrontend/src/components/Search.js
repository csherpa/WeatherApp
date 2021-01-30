import React from 'react'
import { Button, Form } from 'react-bootstrap';

export class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            input: event.target.value
        });
    }
    handleSubmit(event){
        event.preventDefault()
        this.setState({
            submit: this.state.input
        }); 
    }
    render(){
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label>Search Weather</Form.Label>
                    <Form.Control onChange={this.handleChange} value={this.state.input} type="search" placeholder="Enter city" />
                    <Button variant="primary" type="submit">Search</Button>             
                </Form>

                <p>{this.state.submit}</p>
            </div>
        )
    }
    // render(){
    //     return (
    //         <div>
    //             
    //         </div>
    //     )
    // }
    
}

