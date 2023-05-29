import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { Formik } from 'formik';

const MemberForm = () => {

    const { memberStore } = useStore();
    const { closeForm, } = memberStore;
    // const { id } = useParams<{ id: string }>();

    // const initialState = selectedProject ?? {
    //     id: '',
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phoneNumber: '',
    //     projectId: ''
    // }


    return (
        <Segment clearing>
            {/* <Formik>

            </Formik> */}
            <Form autoComplete="off">
                <label>First Name</label>
                <Form.Input
                    type='text'
                    placeholder="First Name"
                    name="firstName"
                //value={project.projectName}
                //onChange={handleInputChange}
                />
                <label>Last Name</label>
                <Form.Input
                    type='text'
                    placeholder="Last Name"
                    name="lastName"
                //value={project.createdAt}
                //onChange={handleInputChange}
                />
                <label>Email</label>
                <Form.Input
                    type='email'
                    placeholder="Email"
                    name="email"
                //value={project.createdAt}
                //onChange={handleInputChange}
                />
                <label>Phone Number</label>
                <Form.Input
                    type='phone'
                    placeholder="Phone Number"
                    name="phoneNumber"
                //value={project.createdAt}
                //onChange={handleInputChange}
                />
                <label>Proejct ID</label>
                <Form.Input
                    type='number'
                    placeholder="Project ID"
                    name="projectId"
                //value={project.createdAt}
                //onChange={handleInputChange}
                />

                <Button floated="right" positive type='submit' content="Submit" />
                <Button floated="right" type='button' content="Cancel" onClick={closeForm} />
            </Form>
        </Segment >
    )
}

export default observer(MemberForm)