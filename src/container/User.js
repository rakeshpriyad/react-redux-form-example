import React, { Component } from 'react';

import UserForm from '../component/UserForm/index';
import {connect} from 'react-redux';
import MenuPopup from '../component/MenuPopup';

export class User extends Component {
    render(){
        return (
            <div className='mlabo'>
                User <br/>
            <MenuPopup />
                
            <UserForm />
           
        </div>
    )
    }
}

export default connect({
})(User);
