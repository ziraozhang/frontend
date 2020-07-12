import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

class HeaderNav extends Component {
    constructor(props){
        super(props);
        this.state={
            data:{
                font:"",
                content:[]
            }
        }
    }

    componentDidMount(){
        this.getdata()
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
                mycomp.setState({data:responseData["headermenu"]})
            }
        ).catch(
            function(error){
                console.log(error)
            }
        )
    }

    render(){
        var items ,i;
        items=[]
        for(i=0;i<this.state.data.content.length;i++){
            items.push(
                
                <Link key={this.state.data.content[i].path} to={this.state.data.content[i].path} style={{marginRight:"10px",color:"black"}}><h5 style={{fontSize:"1.8vh"}}>{this.state.data.content[i].name}</h5></Link>
                
            )
        }
        return (
            <div style={{display:"flex",flexDirection:"row",fontFamily:this.state.data.font, width:"100%", height:"100%", color:'black', alignItems:"flex-end", justifyContent:"flex-end"}}>
                {items}
            </div>
        );
    }
};

export default HeaderNav;