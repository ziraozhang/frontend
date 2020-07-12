import React, { Component } from 'react';

import {Button} from 'react-bootstrap';

class Img extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        // console.log(this.props.index)
        this.props.onClick(this.props.index)
    }

    render(){
        return (
            <Button as="img" onClick={this.handleClick} index={this.props.index} style={this.props.style} src={this.props.src}/>
        );
    }
};

export default Img;