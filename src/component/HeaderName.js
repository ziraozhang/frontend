import React, { Component } from 'react';

import {Image, Button} from 'react-bootstrap'

class HeaderName extends Component {
    constructor(props){
        super(props);
        this.state={
            data:{
                logo:"",
                name:"",
                title:"",
                font:{
                    name:"",
                    title:""
                }
            }
        }
        // this.redirect=this.redirect.bind(this)
    }

    componentWillMount(){
        this.getdata()
    }

    componentDidMount(){
        // console.log("Getting Data")
        this.getdata()
    }

    getdata(){
        // console.log("Getting Data")
        let mycomp = this;
        fetch('/data/data.json').then(
            function(response){
                return response.json()
            }
        ).then(
            function(responseData){
                // console.log(responseData)
                mycomp.setState({data:responseData["header"]})
            }
        ).catch(
            function(error){
                console.log(error)
            }
        )
    }

    render(){
        // console.log(this.state.data)
        return (
            <div style={{display:"flex", flexDirection:"column", backgroundColor:"transparent", width:"100%", height:"100%", color:'black', alignItems:"flex-start" ,justifyContent:"flex-end"}}>
                <Button as="div" href="/home/" style={{background:"transparent",borderColor:"transparent",display:"flex", flexDirection:"row", width:"100%", height:"100%", alignItems:"flex-end" ,justifyContent:"flex-start", color:'black'}}>
                    <img src={this.state.data.logo} style={{background:"transparent", marginBottom:"2vh",width:"4vh",height:"4vh"}} />
                    <h1 style={{marginLeft:"1vw", background:"transparent", fontFamily:this.state.data.font.name,fontSize:"5vh"}}> {this.state.data.name}</h1>
                </Button>
                <h5 as="h5" style={{backgroundColor:"transparent",marginLeft:"1vh",borderColor:"transparent",color:"black",fontFamily:this.state.data.font.title}}>
                    {this.state.data.title}
                </h5>
            </div>
        );
    }
};

export default HeaderName;