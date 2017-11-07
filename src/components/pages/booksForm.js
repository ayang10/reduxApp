"use strict"
import React, { Component } from 'react';
import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { findDOMNode } from 'react-dom';
import { postBooks } from '../../actions/booksActions';

class BooksForm extends Component {

    handleSubmit(){
        const book=[{
            title: findDOMNode(this.refs.title).value,
            description: findDOMNode(this.refs.description).value,
            price: findDOMNode(this.refs.price).value
        }];
        this.props.postBooks(book);
    }

    render() {
        return(
            <Well>
                <Panel>
                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl 
                        type="text"
                        placeholder="Enter Title"
                        ref="title">
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl 
                        type="text"
                        placeholder="Enter Description"
                        ref="description">
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="price">
                        <ControlLabel>Price</ControlLabel>
                        <FormControl 
                        type="text"
                        placeholder="Enter Price"
                        ref="price">
                        </FormControl>
                    </FormGroup>
                    <Button onClick={this.handleSubmit.bind(this)} bsStyle="primary">Save book</Button>
                </Panel>
            </Well>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({postBooks}, dispatch)
}

export default connect(null, mapDispatchToProps)(BooksForm);