import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Header, Segment } from 'semantic-ui-react'

const HomePage = () => {
    return (
        <Segment inverted textAlign='center' vertical className='masthead' >
            <Container type='text'>
                <Header as='h1' inverted>ProjectsHub</Header>
                <Header as='h2' inverted content='Wellcome to ProjectsHub' />
                <Button as={Link} to='/projects' size='huge' inverted>Take me to the app</Button>
            </Container>
        </Segment >

    )
}

export default HomePage