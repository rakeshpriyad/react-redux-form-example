import React from 'react';
import { Field, reduxForm, SubmissionError} from 'redux-form';
import {FormLabel} from '../FormLabel';
// import asyncValidate from '../../actions/acyncValidation';


import 'object-assign';

const submit = ({corporateName = '', userName='', userNameKana='', mailAddress='', tel='', content='' }, submitAction, reset) => {
    let error = {};
    let isError = false;
    if(corporateName.trim() === '') {
        error.corporateName = 'Rakesh';
        isError = true;
    }
    if(userName.trim() === '') {
        error.userName = 'Rakesh';
        isError = true;
    }
    if(userNameKana.trim() === '') {
        error.userNameKana = 'Test';
        isError = true;
    }

    if (content.trim() === '') {
        error.content = 'Error';
        isError = true;
    }

    if (userName.length > 20) {
        error.userName = 'Rakesh';
        isError = true;
    }

    if (userNameKana.length > 20) {
        error.userNameKana = 'Rakesh';
        isError = true;
    }

    if (mailAddress.trim() === '') {
        error.mailAddress = 'Email';
        isError = true;
    }
    if (isError) {
        console.log(isError, 'Error ');
        throw new SubmissionError(error);

    } else {
        console.log(isError, 'Error');
        submitAction({corporateName, userName, userNameKana, mailAddress, tel, content});
       // window.alert(`Data:\n\n${JSON.stringify({corporateName, userName, userNameKana, mailAddress, tel, content}, null, 2)}`)
        reset();
    }
};


const renderFieldTextarea = ({type, placeholder,label, input, textarea, meta: {touched, error}}) => (
<span className='field'>
    <textarea {...input} type={type} className='' placeholder={placeholder} />
    {touched && error && <span className='error'>{error}</span>}
</span>
);

const renderField = ({type,placeholder,  label, input,  meta: {touched, error}}) => (
<span className='field'>
    <input {...input} type={type} className='' placeholder={placeholder} />
    {touched && error && <span className='error'>{error}</span>}
</span>
);

const UserFormFunc = ({asyncValidating, handleSubmit, submitAction,  pristine, submitting, reset}) => (
<form onSubmit={handleSubmit((fields) => submit(fields, submitAction, reset))} id='form1' className='mLabForm'>
    <div className='form-row'>
    <FormLabel labelName={'corporateName'} fieldName={'corporateName'} isRequire={true} />
    <Field component={renderField} type='text' placeholder='' name='corporateName' id='corporateName' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'userName'} fieldName={'userName'} isRequire={true} />
    <Field component={renderField} type='text' placeholder='userName' name='userName' id='userName' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'userNameKana'} fieldName={'userName'} isRequire={true} />
    <Field component={renderField} type='input' placeholder='userName' name='userNameKana' id='userNameKana' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'mailAddress'} fieldName={'mailAddress'} isRequire={true} />
    <Field component={renderField} type='email' placeholder='abcdef@mlab.com' name='mailAddress' id='mailAddress' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'tel'} fieldName={'tel'} isRequire={false} />
    <Field component={renderField} type='number' placeholder='0800000000' name='tel' id='tel' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'content'} fieldName={'content'} isRequire={true} />
    <Field component={renderFieldTextarea} type='text' placeholder='content' name='content' id='content' />
    </div>
    <div className={`submitBtn u-mt30 u-mb80`}>
        <button type='submit'>Submit</button>
    </div>
    </form>
)

const UserForm = reduxForm({
    form: 'UserForm',
})(UserFormFunc);

export default UserForm;