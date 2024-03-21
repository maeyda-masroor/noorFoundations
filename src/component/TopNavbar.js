import React, { Component } from 'react';
import {FormattedMessage, FormattedDate} from 'react-intl';
class TopNavbar extends Component{
    render(){
    return <div style={{backgroundColor:'#d7ab3c',color:'white'}}>
         <center><h1 style={{paddingTop:'10px'}}><FormattedMessage
             id = "welcome"
             defaultMessage="welcome to the Noor Health Education and Health Care Foundation"
             values = {{fileName: 'src/App.js', code: (word)=> <strong>{word}</strong>}}
         /></h1>
         </center>
    </div>
    }
}
export default TopNavbar;