import React, { Component } from 'react';

import UserForm from '../component/UserForm/index';
import {connect} from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../App.css';


export class User extends Component {
    render(){
        return (
            <React.Fragment>
            <CssBaseline />
             <Container maxWidth="xs"> 
           {/*  <Container fluid="true"> */}
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
                
                <div class="row">
                <div class="column"></div>
                <div class="column"><UserForm /></div>
                <div class="column"></div>
                </div>
                </Typography>
            </Container>
        </React.Fragment>
            
    )
    }
}

export default connect({
})(User);
