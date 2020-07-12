import React, { Component } from 'react';
// import Dimensions from 'react-dimensions';
import Img from './Img'
import CarouselPage from './Carousel'
import {Card, CardColumns, CardDeck, Col, Row} from 'react-bootstrap';
import Gallery from "react-photo-gallery";

// import Carousel, { Modal, ModalGateway } from 'react-images';

class Album extends Component {
    constructor(props){
        super(props);

        this.state={
            data:null,
            id:null,
            type:null,
            generalwidth:null,
            index:0,
            open:false,
        }

        this.myInput=React.createRef()
        this.handleClick=this.handleClick.bind(this)
        this.closeLightbox=this.closeLightbox.bind(this)
        this.openLightbox = this.openLightbox.bind(this)
    }

    getdata(){
        let mycomp = this;
        fetch('/data/data.json').then(
            function(response){
                return response.json()
            }
        ).then(
            function(responseData){
                console.log(responseData)
                console.log(mycomp.state.type)
                mycomp.setState({data:responseData[mycomp.state.type]})
            }
        ).catch(
            function(error){
                console.log(error)
            }
        )
    }

    componentWillReceiveProps(nextProps){
        if(this.props.type !== nextProps.type){
            var _id = nextProps.match.params.id
            // console.log(this.props.type,nextProps.type,_id)
            this.setState({id:_id, type:nextProps.type})
            this.getdata()
            this.setState({generalwidth:this.myInput.current.offsetWidth})
        }
    }

    componentDidMount(){
        var _id = this.props.match.params.id
        this.setState({id:_id, type:this.props.type})
        this.getdata()
        this.setState({generalwidth:this.myInput.current.offsetWidth})
    }

    handleClick(_index){
        console.log("test",_index)
        this.setState({index:_index, open:true})
    }

    openLightbox(event, {photo, index}){
        // console.log(event, photo, index)
        this.setState({index:index, open:true})
    }

    closeLightbox(){
        this.setState({index:0, open:false})
    }

    render(){
        var items,i,sf,namefont;
        items=[];
        sf = {
            "name":"Unknown",
            "column":0,
        }
        // console.log(this.state.data)
        
        if(this.state.data !== null){
            
            for(i=0;i<this.state.data.content.length;i++){
                // console.log(this.state.data.content[i].id,parseInt(this.state.id,10))
                if(this.state.data.content[i].id === parseInt(this.state.id,10)){
                    sf = this.state.data.content[i]
                    namefont=sf.font.name

                    var columnnum = sf.column
                    if(columnnum === 0){
                        columnnum = 1
                    }

                    var j;

                    var lines = sf.lines;

                    var photos = {}

                    for (j=1; j<=sf.pics.length;j++){
                        photos[j] = sf.pics[j-1]
                    }

                    for (j=0; j<lines.length; j++){
                        //calculate for each line
                        // console.log("line",j)
                        var totalwidth=0;
                        var l;
                        var index;
                        var actualhight;
                        for(l=0; l<lines[j].length; l++){
                            index = lines[j][l]
                            totalwidth += 100 * photos[index].ratio
                        }

                        
                        if(this.state.generalwidth === null){
                            actualhight = 100;
                        }else{
                            actualhight = (this.state.generalwidth - 100) * 100 / totalwidth;
                        }

                        // console.log("total width:",totalwidth,"generalwidth",this.state.generalwidth,"actualheight",actualhight)

                        for(l=0; l<lines[j].length; l++){
                            index = lines[j][l];
                            // console.log("photo",index,"width",photos[index].ratio * actualhight,"height",actualhight)
                            items.push(
                                {
                                    'index':index-1,
                                    'src':photos[index].src,
                                    'width':photos[index].ratio * actualhight,
                                    'height':actualhight
                                }
                            )
                        }
                    }
                    
                    break;
                }
            }
        }else{
            namefont = ""
        }

        return (
                <Row style={{minHeight:"80vh", justifyContent:"center",alignItems:"center"}}>
                    <Col ref={this.myInput} style={{backgroundColor:"transparent",marginTop:"1vh",borderColor:"black", justifyContent:"center",alignItems:"center"}} xs={10}>
                    {this.state.open ? (
                            <div>
                            <CarouselPage index={this.state.index} interval={null} data={sf} />
                            <button onClick={this.closeLightbox}>back</button>
                            </div>
                            
                        ) : (
                            <CardDeck style={{justifyContent:"center",alignItems:"center"}}>
                            {items.map(
                                item => (
                                    <Img key={item.index} onClick={this.handleClick} index={item.index} src={item.src} style={{backgroundColor:"transparent",borderColor:"transparent",padding:"2px 2px 2px 2px",width:item.width, height:item.height}}/>
                                )
                            )}
                            </CardDeck >
                        )}
                    </Col>
                </Row>
            
        )
        
        
    }
};

export default Album;