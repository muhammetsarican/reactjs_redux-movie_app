import React, { Component } from 'react'
import {
    Container,
    Image,
    List,
    Segment,
} from 'semantic-ui-react'

export class Footer extends Component {
    render() {
        return (
            <Segment inverted style={{ margin: '5em 0em 0em', padding: '3em 0em' }} vertical>
                <Container textAlign='center'>
                    <Image src='https://react.semantic-ui.com/logo.png' centered size='mini' />
                    <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href='#'>
                            Site Map
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Contact Us
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Terms and Conditions
                        </List.Item>
                        <List.Item as='a' href='#'>
                            Privacy Policy
                        </List.Item>
                    </List>
                </Container>
            </Segment>
        )
    }
}

export default Footer