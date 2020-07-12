import React, { Component } from 'react';

class Footer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="footer" style={{display:"inline-flex",flexDirection:"row",color:'black'}}>
                <p>Create by Zero Copyright @ miaomiao</p>
            </div>
        );
    }
};

export default Footer;