import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';


const MemberDetails = () => {

    const { projectStore } = useStore();
    const { selectedProject: project, openForm, cancelSelectedProject } = projectStore;

    //if (!project) return <Button />;

    return (
        <Card color='blue' fluid>
            <Card.Content >
                <Card.Header>Member Details</Card.Header>
                <Card.Meta>

                </Card.Meta>
                <Card.Description>
                    Descrtikljdksd
                    <br />
                    cbcvbxvcb
                    <br />
                    xvbcvbxcv
                    <br />
                    xcvbxcvbxcvb
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    Team Members
                </a>
                <hr />
                <Button.Group widths='2'>
                    <Button basic color='blue' content="Edit" />
                    <Button basic color='grey' content="Cancel" />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default observer(MemberDetails);