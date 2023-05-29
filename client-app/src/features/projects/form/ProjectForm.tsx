import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react';
import { Project } from '../../../app/models/Project'
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { Formik } from 'formik';

const ProjectForm = () => {

    const { projectStore } = useStore();
    const { selectedProject, closeForm, createProject, updateProject, loadProjects, cancelSelectedProject } = projectStore;
    const { id } = useParams<{ id: string }>();

    const initialState = selectedProject ?? {
        id: '',
        projectName: '',
        createdAt: '',
        dueDate: '',
        isActive: '',
        teamMembers: ''
    }

    // useEffect(() => {
    //     if (id) loadProjects(id).then(project => selectedProject(project));
    // }, [])

    const [project, setProject] = useState(initialState);

    const handleSubmit = () => {
        project.id ? updateProject(project) : createProject(project);
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProject({ ...project, [name]: value })
    }


    return (
        <Segment clearing>
            {/* <Formik>

            </Formik> */}
            <Form onSubmit={handleSubmit} autoComplete="off">
                <label>Project Name</label>
                <Form.Input
                    placeholder="Project Name"
                    value={project.projectName}
                    name="projectName"
                    onChange={handleInputChange}
                />
                <label>Created Date</label>
                <Form.Input
                    type='date'
                    value={project.createdAt}
                    name="createdAt"
                    onChange={handleInputChange}
                />
                <label>Due Date</label>
                <Form.Input
                    type='date'
                    value={project.dueDate}
                    name="dueDate"
                    onChange={handleInputChange} />


                <Button floated="right" positive type='submit' content="Submit" />
                <Button floated="right" type='button' content="Cancel" onClick={closeForm} />
            </Form>
        </Segment >
    )
}

export default observer(ProjectForm)