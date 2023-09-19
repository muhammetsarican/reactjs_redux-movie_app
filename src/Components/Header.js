import React, { Component } from 'react'
import {
    Container,
    Image,
    Menu,

} from 'semantic-ui-react'
import { InView } from 'react-intersection-observer'

import { fixedMenuStyle } from '../Helpers/style.helper'


import { Link } from "react-router-dom"
export class Header extends Component {
    render() {
        return (
            <InView onChange={this.toggleTopMenu}>
                <Menu
                    borderless
                    fixed={'top'}
                    style={fixedMenuStyle}
                >

                    <Container text>
                        <Menu.Item>
                            <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
                        </Menu.Item>
                        <Menu.Item header>Turkish Movies</Menu.Item>
                        <Menu.Item as={Link} to="/movies">
                            Movies
                        </Menu.Item>
                        <Menu.Item as='a'>Add New</Menu.Item>
                    </Container>
                </Menu>
            </InView>
        )
    }
}

export default Header