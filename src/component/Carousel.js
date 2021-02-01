import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import {CaretRightFill, CaretLeftFill, ChevronLeft, ChevronRight} from 'react-bootstrap-icons'

class CarouselPage extends Component {
    constructor(props){
        super(props);
        // console.log(this.props)
        this.state={
            data:this.props.data,
            index:this.props.index,
            interval:5000,
        }
        this.handleSelect=this.handleSelect.bind(this)
    }

    // componentDidMount(){
    //     let mycomp = this;
    //     fetch('/data/data.json').then(
    //         function(response){
    //             return response.json()
    //         }
    //     ).then(
    //         function(responseData){
    //             // console.log(responseData)
    //             mycomp.setState({data:responseData.homepage})
    //         }
    //     ).catch(
    //         function(error){
    //             console.log(error)
    //         }
    //     )
    // }
    handleSelect(selectedIndex,e){
        this.setState({index:selectedIndex})
    }

    componentWillReceiveProps(nextprops){
        if(this.props.data != nextprops.data){
            this.setState({data:nextprops.data,index:nextprops.index,interval:nextprops.interval})
        }
    }

    render(){

        var items,i;
        items=[];
        // console.log("index",this.state.index)
        if(this.state.data != null && this.state.data.pics != null){
            for(i=0;i<this.state.data.pics.length;i++){
                // console.log(this.state.data.homepage[i])
                // calculate img height & width

                items.push(
                    <Carousel.Item
                    key={this.state.data.pics[i].src}
                    interval={100000}
                    >
                        <img
                        className="d-block w-100"
                        src={this.state.data.pics[i].src}
                        alt={this.state.data.pics[i].src}
                        // style={{height:realheight, width:realwidth}}
                        />
                        <Carousel.Caption>
                        <h3 style={{fontFamily:this.state.data.font.title}}>{this.state.data.pics[i].title}</h3>
                        <p style={{fontFamily:this.state.data.font.text}}>{this.state.data.pics[i].text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
        } 
        
        return (
            <Carousel nextIcon={<ChevronRight style={{color:"#b3b3b3"}} size={70}/>} interval={this.state.interval} prevIcon={<ChevronLeft style={{color:"#b3b3b3"}} size={70}/>} activeIndex={this.state.index===null ? 0 : this.state.index} onSelect={this.handleSelect} >
                {items}
            </Carousel>
        );
    }
};

export default CarouselPage;