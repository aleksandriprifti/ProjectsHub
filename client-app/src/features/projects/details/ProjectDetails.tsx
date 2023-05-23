import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react';
import { Project } from '../../../app/models/Project';

interface Props {
    project: Project;
    cancelSelectProject: () => void;
    //selectEditMode: (id: string) => void;
    openForm: (id: string) => void;
}

const ProjectDetails = ({ project, cancelSelectProject, openForm }: Props) => {
    return (
        <Card color='blue'>
            <Card.Content >
                <Card.Header>Project Details</Card.Header>
                {/* <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta> */}
                <Card.Description>
                    {project.projectName}
                    <br />
                    {project.createdAt}
                    <br />
                    {project.dueDate}
                    <br />
                    {project.isActive}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    Team Members
                </a>
                <hr />
                <Button.Group widths='2'>
                    <Button basic color='blue' content="Edit" onClick={() => openForm(project.id)} />
                    <Button basic color='grey' content="Cancel" onClick={cancelSelectProject} />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default ProjectDetails