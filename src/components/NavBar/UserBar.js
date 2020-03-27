import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {NavLink as ToLink} from "react-router-dom";
import {logoutUser} from "../../actions/user";

const UserBar = () => {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.login.user.username);
    return (
        <>
            <NavItem>
                <NavLink tag={ToLink} to='/trackHistory' >Track history</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={ToLink} to='/addArtist' >Add artist</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={ToLink} to='/addAlbum' >Add album</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={ToLink} to='/addTrack' >Add track</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Hello, {userName}!
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        View profile
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => dispatch(logoutUser())}>
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </>
    );
};

export default UserBar;