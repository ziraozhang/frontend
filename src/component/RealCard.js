import React, { Component } from 'react';

import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class RealCard extends Component {
    constructor(props){
        super(props);
    }

    render(){
        var link = this.props.url
        if(this.props.piconly===true){
            return (
                <Card border="white" className="bg-white text-black">
                    <Card.Img src={this.props.src}/>
                    <p style={{textAlign:"center"}}>{this.props.text}</p>
                </Card>
            );
        }else{
            return (
                <Link to={link} style={{color:"black"}}>
                    <Card border="white" className="bg-dark text-white">
                        <Card.Img src={this.props.src} alt={this.props.alt} />
                        <Card.ImgOverlay>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                            {this.props.text}
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Link>
            );
        }
    }
};

export default RealCard;