import React from 'react'
import { Button, Icon, Menu, Table } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';

const MembersList = () => {

    const { memberStore } = useStore();
    const { members, openForm } = memberStore;

    console.log("Members", members.map(item => item.firstName));


    return (
        <>
            <Button
                color='blue'
                content='Add Member'
                icon='add'
                floated='right'
                label={{ basic: true, color: 'red', pointing: 'left', content: `Total of Projects: ${members.length}` }}
                onClick={() => openForm()}
            />
            <Table celled striped color='violet' size='small'>
                <Table.Header>
                    <Table.Row textAlign="center">
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Phone No</Table.HeaderCell>
                        <Table.HeaderCell>Project ID</Table.HeaderCell>
                        <Table.HeaderCell>Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {members.map((item, index) => {
                        return (
                            <Table.Row key={index} textAlign="center">
                                <Table.Cell>{item.firstName}</Table.Cell>
                                <Table.Cell>{item.lastName}</Table.Cell>
                                <Table.Cell>{item.email}</Table.Cell>
                                {/* <Table.Cell>{item.dueDate}</Table.Cell> */}
                                <Table.Cell>{item.phoneNumber}</Table.Cell>
                                <Table.Cell>{item.projectName}</Table.Cell>
                                <Table.Cell>
                                    <Button.Group>
                                        <Button color="blue" >View</Button>
                                        <Button.Or />
                                        <Button color="red" >Delete</Button>
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
            </Table >
        </>
    )
}

export default observer(MembersList)