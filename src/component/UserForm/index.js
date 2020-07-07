import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/submitAction';
import UserForm from './UserForm';

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    console.log(actionCreators)
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
