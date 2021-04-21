import React, { useState, useEffect } from 'react';
import ContactForm from "./ContactForm";
import firebaseDb from '../firebase';

const Contacts = () => {

    var [currentId, setCurrentId] = useState('')
    var [contactObjects, setContactObjects] = useState({})
    

    useEffect(() => {
        firebaseDb.child('contacts').on('value', snapshot => {
           if( snapshot.val()!=null)
           setContactObjects({
               ...snapshot.val()
           });
           else
           setContactObjects({})

        })
    },[])

    const addOrEdit = (obj) => {
        if (currentId == '')
            firebaseDb.child('contacts').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        else
            firebaseDb.child(`contacts/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
    }

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            firebaseDb.child(`contacts/${id}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        }
    }

    return (
        <>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class=" text-center heading">Plasma Donation</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 form1">
                    <ContactForm {...({currentId, contactObjects, addOrEdit })}/>
                </div>
                <div className="col-md-7"> 
                    <table className="table table-borderless table-stripped table-content">
                        <thead className="thead-light">
                            <tr>
                                <th>Full Name</th>
                                <th>Age</th>
                                <th>Blood Group</th>
                                <th>Mobile</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map(id => {
                                    return <tr key={id}>
                                        <td className="td">{contactObjects[id].fullName}</td>
                                        <td className="td">{contactObjects[id].age}</td>
                                        <td className="td">{contactObjects[id].bloodgrp}</td>
                                        <td className="td">{contactObjects[id].mobile}</td>
                                        <td className="td">{contactObjects[id].address}</td>
                                        <td>
                                            <a className="btn text-primary" onClick={() => {setCurrentId(id)}}>
                                                <i className = "fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => {onDelete(id)}}>
                                                <i className = "fas fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
 
        </> 
     );
}
 
export default Contacts;