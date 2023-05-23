import React, { ChangeEvent, useState } from 'react'
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react';
import { Project } from '../../../app/models/Project'

interface Props {
    project: Project | undefined;
    closeForm: () => void;
    createOrEdit: (project: Project) => void;
}

const ProjectForm = ({ closeForm, project: selectedProejct, createOrEdit }: Props) => {
    const [value, setValue] = useState('this');

    const initialState = selectedProejct ?? {
        id: '',
        projectName: '',
        createdAt: '',
        dueDate: '',
        isActive: '',
        teamMembers: ''
    }

    const [project, setProject] = useState(initialState);

    const handleSubmit = () => { createOrEdit(project) }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProject({ ...project, [name]: value })
    }

    return (
        <Segment clearing>
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

export default ProjectForm