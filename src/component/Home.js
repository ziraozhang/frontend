import React, { Component } from 'react';
import CarouselPage from './Carousel'
import {Col,Row} from 'react-bootstrap';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            data:null
        }
    }

    componentDidMount(){
        let mycomp = this;
        fetch('/data/data.json').then(
            function(response){
                return response.json()
            }
        ).then(
            function(responseData){
                // console.log(responseData)
                mycomp.setState({data:responseData.homepage})
            }
        ).catch(
            function(error){
                console.log(error)
            }
        )
    }

    render(){
        // console.log("homepage data parent",this.state.data)
        return (
            <Row style={{minHeight:"80vh",justifyContent:"center",alignItems:"center"}}>
            <Col style={{borderColor:"transparent",backgroundColor:"transparent"}} xs={10}>
                <CarouselPage data={this.state.data} interval={null} />
            </Col>
            </Row>
        );
    }
};

export default HomePage;