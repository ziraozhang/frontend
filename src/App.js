import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import HeaderName from './component/HeaderName'
import HeaderNav from './component/HeaderNav'
import HomePage from './component/Home'
import Albums from './component/Albums'
import Album from './component/Album'
import ResumePage from './component/Resume'
import Footer from './component/Foot'

import './App.css';


class App extends Component {

  render(){
    return(
      <Container fluid style={{background:"white"}}>
        <BrowserRouter>
        <Row style={{height:"15vh",justifyContent:"center",alignItems:"flex-end"}}>
          <Col style={{borderColor:"black", backgroundColor:"transparent", justifyContent:"center",alignItems:"center"}} xs={4}>
            <HeaderName/>
          </Col>
          <Col style={{backgroundColor:"transparent", borderColor:"transparent",justifyContent:"center",alignItems:"center"}} xs={6}>
            <HeaderNav />
          </Col>
        </Row>
        
        <Switch>
          
          <Route path="/home/" component={HomePage} />
          <Route path="/short_films/" render={(_props) => (<Albums type="short_films" match={_props.match} history={_props.history} location={_props.location} />)} />
          <Route path="/short_film/:id" render={(_props) => (<Album type="short_films" match={_props.match} history={_props.history} location={_props.location} />)} />
          <Route path="/concept_designs/" render={(_props) => (<Albums type="concept_designs" match={_props.match} history={_props.history} location={_props.location} />)} />
          <Route path="/concept_design/:id" render={(_props) => (<Album type="concept_designs" match={_props.match} history={_props.history} location={_props.location} />)} />
          <Route path="/illustration/:id" render={(_props) => (<Album type="illustration" match={_props.match} history={_props.history} location={_props.location} />)} />
          <Route path="/drafting/:id" render={(_props) => (<Album type="drafting" match={_props.match} history={_props.history} location={_props.location} />)} />
          <Route path="/architectures/" render={(_props) => (<Albums type="architectures" match={_props.match} history={_props.history} location={_props.location} />)} />
          <Route path="/architecture/:id" render={(_props) => (<Album type="architectures" match={_props.match} history={_props.history} location={_props.location} />)} />
          <Route path="/resume/" component={ResumePage} />
          <Route path="/" component={HomePage} />
        </Switch>
        
        <Row style={{bottom:0, textAlign:"center", justifyContent:"center"}}>
          <Footer />
        </Row>
        </BrowserRouter>
      </Container>
    )
  }
};

export default App;
