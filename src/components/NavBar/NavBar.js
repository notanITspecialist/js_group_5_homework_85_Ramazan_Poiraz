import React from 'react';
import { Navbar, NavItem, NavLink, Nav} from 'reactstrap';
import {NavLink as ToLink} from 'react-router-dom';
import Container from "reactstrap/lib/Container";

const NavBar = () => {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <Container>
                    <Nav>
                        <NavItem>
                            <NavLink tag={ToLink} to='/' >Artists</NavLink>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;