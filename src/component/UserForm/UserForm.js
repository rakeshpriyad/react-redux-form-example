import React from 'react';
import { Field, reduxForm, SubmissionError} from 'redux-form';
import {FormLabel} from '../FormLabel';



import 'object-assign';

const submit = ({userName='', emailAddress='', mobileNo='', address='' }, submitAction, reset) => {
    let error = {};
    let isError = false;
    
    if(userName.trim() === '') {
        error.userName = 'Rakesh';
        isError = true;
    }
    

    if (address.trim() === '') {
        error.content = 'Error';
        isError = true;
    }

    if (emailAddress.trim() === '') {
        error.mailAddress = 'Email';
        isError = true;
    }
    if (isError) {
        console.log(isError, 'Error ');
        throw new SubmissionError(error);

    } else {
        console.log(isError, 'Error');
        submitAction({userName, emailAddress, mobileNo, address});
        window.alert(`Data:\n\n${JSON.stringify({userName, emailAddress, mobileNo, address}, null, 2)}`)
       // reset();
    }
};


/*const renderFieldTextarea = ({type, placeholder,label, input, textarea, meta: {touched, error}}) => (
<span className='field'>
    <textarea {...input} type={type} className='' placeholder={placeholder} />
    {touched && error && <span className='error'>{error}</span>}
</span>
); */

const renderField = ({type,placeholder,  label, input,  meta: {touched, error}}) => (
<span className='field'>
    <input {...input} type={type} className='' placeholder={placeholder} />
    {touched && error && <span className='error'>{error}</span>}
</span>
);

const UserFormFunc = ({asyncValidating, handleSubmit, submitAction,  pristine, submitting, reset}) => (
<form onSubmit={handleSubmit((fields) => submit(fields, submitAction, reset))} id='form1' className='mLabForm'>
    <div className='form-row'>
    <FormLabel labelName={'User Name'} fieldName={'User Name'} isRequire={true} />
    <Field component={renderField} type='text' placeholder='User Name' name='userName' id='userName' />
    </div>
    
    <div className='form-row'>
    <FormLabel labelName={'Email Address'} fieldName={'Email Address'} isRequire={true} />
    <Field component={renderField} type='email' placeholder='abcdef@mlab.com' name='emailAddress' id='emailAddress' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'Mobile No'} fieldName={'Mobile No'} isRequire={false} />
    <Field component={renderField} type='number' placeholder='0800000000' name='mobileNo' id='mobileNo' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'Address '} fieldName={'address'} isRequire={true} />
    <Field component={renderField} type='text' placeholder='Address' name='address' id='address' />
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