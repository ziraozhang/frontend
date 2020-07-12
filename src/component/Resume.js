import React, { Component } from 'react';

import {Card, CardColumns, Image, Col, Row} from 'react-bootstrap'

class WorkPage extends Component {
    constructor(props){
        super(props);
        this.state={
            data:{
                selfy:"",
                intro:"",
                phone:"",
                email:"",
		resume:"",
                font:{
                    intro:"",
                    contact:""
                }
            }
        }
    }

    componentDidMount(){
        console.log("Getting Data")
        this.getdata()
    }

    getdata(){
        console.log("Getting Data")
        let mycomp = this;
        fetch('/data/data.json').then(
            function(response){
                return response.json()
            }
        ).then(
            function(responseData){
                console.log(responseData)
                mycomp.setState({data:responseData["resume"]})
            }
        ).catch(
            function(error){
                console.log(error)
            }
        )
    }

    render(){
        return (
	<Row style={{justifyContent:"center",alignItems:"center"}}>
            <Row style={{marginTop:"3vh",justifyContent:"center",alignItems:"center"}}>
                <Col style={{borderColor:"white", backgroundColor:"transparent", textAlign:"center", justifyContent:"flex-end",alignItems:"flex-end"}} xs={4}>
                    <Image style={{maxWidth:"75%"}} src={this.state.data.selfy} rounded/>
                </Col>
                <Col style={{borderColor:"white", backgroundColor:"transparent", textAlign:"left"}} xs={4}>
                    <h1 style={{fontFamily:this.state.data.font.intro}}>About Me</h1>
                    <p style={{fontFamily:this.state.data.font.intro, fontSize:"18px", textAlign:"left"}}>{this.state.data.intro}</p>
                    <h1 style={{fontFamily:this.state.data.font.contact, marginTop:"2.5vh"}}>Contact</h1>
                    <p style={{fontFamily:this.state.data.font.contact}}>Phone:{this.state.data.phone} <br /> Email:{this.state.data.email}</p>
                </Col>
            </Row>
	    <Row style={{justifyContent:"center",alignItems:"center"}}>
		<Col style={{borderColor:"white", textAlign:"center"}} xs={8}>
			<Image style={{maxWidth:"100%"}} src={this.state.data.resume} />
		</Col>
	    </Row>
	</Row>
        );
    }
};

export default WorkPage;