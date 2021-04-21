import React, { useState, useEffect } from 'react';


const ContactForm = (props) => {
    const initialFieldValues = {
        fullName: '',
        age: '',
        bloodgrp: '',
        mobile: '',
        address: ''
    }

    var [values,setValues] = useState(initialFieldValues);

    useEffect(() => {
        if(props.currentId == '')
            setValues({
                ...initialFieldValues
            })
        else 
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values);
    }

    return ( 
        <form autoComplete="off" onSubmit={ handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Full Name" name="fullName"
                value = {values.fullName}
                onChange = {handleInputChange}
                />
            </div>
            <div className="form-row">
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-font"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Age" name="age"
                value = {values.age}
                onChange = {handleInputChange}
                />
            </div>
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-tint"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Blood Group" name="bloodgrp"
                value = {values.bloodgrp}
                onChange = {handleInputChange}
                />
            </div>
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-mobile-alt"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Mobile no." name="mobile"
                value = {values.mobile}
                onChange = {handleInputChange}
                />
            </div>
            
            </div><div className="form-group">
                <textarea className="form-control" placeholder="Address" name="address"
                value = {values.address}
                onChange = {handleInputChange} 
                />
            </div>
            <div className="form-group">
                <input type="submit" value={props.currentId == "" ? "Save" : "Update"} className="btn btn-primary btn-block btn1"/>
            </div>
        </form>
     );
}
 
export default ContactForm;