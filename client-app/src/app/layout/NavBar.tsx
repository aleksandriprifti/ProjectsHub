import { Link, NavLink } from 'react-router-dom'
import { Menu, Container, Button, Dropdown } from 'semantic-ui-react'
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

const NavBar = () => {

    const { userStore: { user, logout } } = useStore();

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    ProjectsHub
                </Menu.Item>
                <Menu.Item as={NavLink} to='/projects' name='Projects' />
                <Menu.Item as={NavLink} to='/teammembers' name="Team Members" />
                <Menu.Item position='right' >
                    <Dropdown pointing='top left' text={user?.displayName}>
                        <Dropdown.Menu text="Test">
                            <Dropdown.Item as={Link} to={`/profiles/${user?.userName}`} text='My Profile' icon='user' />
                            <Dropdown.Item onClick={logout} text='Logout' icon='power' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default observer(NavBar)