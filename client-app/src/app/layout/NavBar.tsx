import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

const NavBar = () => {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    ProjectsHub
                </Menu.Item>
                <Menu.Item name='Projects' />
                <Menu.Item name="Team Members" />
            </Container>
        </Menu>
    )
}

export default NavBar