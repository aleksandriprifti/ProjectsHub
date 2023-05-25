import { NavLink } from 'react-router-dom'
import { Menu, Container, Button } from 'semantic-ui-react'

const NavBar = () => {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    ProjectsHub
                </Menu.Item>
                <Menu.Item as={NavLink} to='/projects' name='Projects' />
                <Menu.Item as={NavLink} to='/teammembers' name="Team Members" />
            </Container>
        </Menu>
    )
}

export default NavBar