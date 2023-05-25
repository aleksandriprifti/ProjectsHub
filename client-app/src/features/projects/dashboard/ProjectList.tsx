import { Icon, Menu, Table, Button } from "semantic-ui-react";
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';

const ProjectList = () => {

    const { projectStore } = useStore();
    const { projects, deleteProject, selectProject } = projectStore;

    return (
        <>
            <Button
                color='blue'
                content='Add Project'
                icon='add'
                floated='right'
                label={{ basic: true, color: 'red', pointing: 'left', content: `Total of Projects: ${projects.length}` }}
                onClick={() => projectStore.openForm()}
            />
            <Table celled striped color='violet' size='small'>
                <Table.Header>
                    <Table.Row textAlign="center">
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Project Name</Table.HeaderCell>
                        <Table.HeaderCell>Created Date</Table.HeaderCell>
                        {/* <Table.HeaderCell>Due Date</Table.HeaderCell> */}
                        <Table.HeaderCell>Is Active</Table.HeaderCell>
                        {/* <Table.HeaderCell>Team Members</Table.HeaderCell> */}
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {projects.map((item, index) => {
                        return (
                            <Table.Row key={index} textAlign="center">
                                <Table.Cell>{item.id}</Table.Cell>
                                <Table.Cell>{item.projectName}</Table.Cell>
                                <Table.Cell>{item.createdAt}</Table.Cell>
                                {/* <Table.Cell>{item.dueDate}</Table.Cell> */}
                                <Table.Cell>{item.isActive}</Table.Cell>
                                {/* <Table.Cell>{item.teamMembers}</Table.Cell> */}
                                <Table.Cell>
                                    <Button.Group>
                                        <Button color="blue" onClick={() => selectProject(item.id)}>View</Button>
                                        <Button.Or />
                                        <Button color="red" onClick={() => deleteProject(item.id)}>Delete</Button>
                                    </Button.Group>
                                </Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan="7">
                            <Menu floated="right" pagination>
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron left" />
                                </Menu.Item>
                                <Menu.Item as="a">1</Menu.Item>
                                <Menu.Item as="a">2</Menu.Item>
                                <Menu.Item as="a">3</Menu.Item>
                                <Menu.Item as="a">4</Menu.Item>
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron right" />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </>
    )
}

export default observer(ProjectList);