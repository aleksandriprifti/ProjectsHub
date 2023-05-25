import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Header, Segment } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoginForm from '../users/LoginForm';
import RegisterForm from '../users/RegisterForm';

const HomePage = () => {

    const { userStore, modalStore } = useStore();

    return (
        <Segment inverted textAlign='center' vertical className='masthead' >
            <Container type='text'>
                <Header as='h1' inverted>ProjectsHub</Header>
                {userStore.isLogedIn ? (
                    <>
                        <Header as='h2' inverted content='Wellcome to ProjectsHub' />
                        <Button as={Link} to='/projects' size='huge' inverted>Got to Projects!</Button>
                    </>
                ) : (
                    <>
                        <Button onClick={() => modalStore.openModal(<LoginForm />)} to='/login' size='huge' inverted>Login</Button>
                        <Button onClick={() => modalStore.openModal(<RegisterForm />)} to='/login' size='huge' inverted>Register</Button>
                    </>
                )}


            </Container>
        </Segment >

    )
}

export default observer(HomePage);