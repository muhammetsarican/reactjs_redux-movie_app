import React, { Component } from 'react'
import {
    Container,
    Image,
    Menu,

} from 'semantic-ui-react'
import { InView } from 'react-intersection-observer'

import { fixedMenuStyle } from '../Helpers/style.helper'


import { Link, NavLink } from "react-router-dom"
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
                        <Menu.Item header as={Link} to="/">Turkish Movies</Menu.Item>
                        <Menu.Item as={NavLink} to="/movies" exact={true}>
                            Movies
                        </Menu.Item>
                        <Menu.Item as={NavLink} to="/movies/new" exact={true}>Add New</Menu.Item>
                    </Container>
                </Menu>
            </InView>
        )
    }
}

export default Header