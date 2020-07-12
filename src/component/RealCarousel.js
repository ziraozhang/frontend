import React, { Component } from 'react';

import {Card, CardColumns, Col, Row} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

class RealCarousel extends Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props)
        return (
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={this.props.src}
                alt={this.props.alt}
                style={{maxHeight:"80vh"}}
                />
                <Carousel.Caption>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                </Carousel.Caption>
            </Carousel.Item>
        );
    }
};

export default RealCarousel;