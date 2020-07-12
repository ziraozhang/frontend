import React, { Component } from 'react';

import {Card, CardColumns, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Albums extends Component {
    constructor(props){
        super(props);

        this.state={
            data:null,
            type:null
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.props.type !== nextProps.type){
            console.log(this.props.type)
            this.setState({type:nextProps.type})
            this.getdata()
        }
    }

    getdata(){
        let mycomp = this;
        fetch('/data/data.json').then(
            function(response){
                return response.json()
            }
        ).then(
            function(responseData){
                // console.log(responseData)
                mycomp.setState({data:responseData[mycomp.state.type]})
            }
        ).catch(
            function(error){
                console.log(error)
            }
        )
    }

    componentDidMount(){
        this.setState({type:this.props.type})
        this.getdata()
    }

    render(){
        var items,i;
        items=[];
        if(this.state.data != null){
            for(i=0;i<this.state.data.content.length;i++){
                // console.log(this.state.data.homepage[i])
                var _url="/"+this.state.type.substring(0,this.props.type.length-1)+"/"+this.state.data.content[i].id
                items.push(
                    <Link key={_url} to={_url} style={{color:"black"}}>
                        <Card border="white" className="bg-dark text-white">
                            <Card.Img src={this.state.data.content[i].src} alt={this.state.data.content[i].src} />
                            <Card.ImgOverlay>
                                <Card.Title style={{fontFamily:this.state.data.content[i].font.title}}>{this.state.data.content[i].title}</Card.Title>
                                <Card.Text style={{fontFamily:this.state.data.content[i].font.text}}>
                                {this.state.data.content[i].text}
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Link>
                )
            }
        } 
        return (
            <Row style={{minHeight:"80vh",justifyContent:"center",alignItems:"center"}}>
            <Col style={{borderColor:"black"}} xs={10}>
            <CardColumns>
            {items}
            </CardColumns>
            </Col>
            </Row>
        );
    }
};

export default Albums;