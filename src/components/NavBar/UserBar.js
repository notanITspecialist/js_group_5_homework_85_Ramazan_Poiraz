import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../actions/user";
import {NavLink as ToLink} from "react-router-dom";

const UserBar = () => {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.login.user.username);

    const logOutOnClick = () => dispatch(logOut());
    return (
        <>
            <NavItem>
                <NavLink tag={ToLink} to='/trackHistory' >Track history</NavLink>
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
                    <DropdownItem onClick={logOutOnClick}>
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </>
    );
};

export default UserBar;