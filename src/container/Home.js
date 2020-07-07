import React, { Component } from 'react';
import MyForm from '../component/MyForm/index';

import {connect} from 'react-redux';
import MenuPopup from '../component/MenuPopup';

export class Home extends Component {
    render(){
        return (
            <div className='mlabo'>
            Home<br/>
            <MenuPopup />
            <MyForm />
           
        </div>
    )
    }
}

export default connect({
})(Home);
