import React, {useState} from 'react';
import {Button, Col, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../../actions/user";
import FacebookLogin from "../FacebookLogin/FacebookLogin";

const Registration = props => {
    const initLoginForm = {
        username: '',
        password: '',
        displayName: '',
        avatar: ''
    };
    const [loginForm, setLoginForm] = useState(initLoginForm);
    const dispatch = useDispatch();

    const user = useSelector(state => state.login);

    const registerUserOnSubmit = async e => {
        e.preventDefault();
        await dispatch(registerUser(loginForm,props.history));
    };

    const changeLoginForm = e => setLoginForm({...loginForm, [e.target.name]: e.target.value});
    return (
        <Form style={{margin: '0 20%'}} onSubmit={registerUserOnSubmit}>

            <h2>Registration</h2>

            <FacebookLogin history={props.history}/>

            <FormGroup row>
                <Label sm={2} for="username">Username</Label>
                <Col sm={10}>
                    <Input invalid={!user.errorReg === false} type="text" name="username" id="username" placeholder="Username" value={loginForm.username} onChange={changeLoginForm} />
                    <FormFeedback invalid={`true`}>Such username already exists</FormFeedback>
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2} for="password">Password</Label>
                <Col sm={10}>
                    <Input type="password" name="password" id="password" placeholder="Password" value={loginForm.password} onChange={changeLoginForm} />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2} for="displayName">Display name</Label>
                <Col sm={10}>
                    <Input type="displayName" name="displayName" id="displayName" placeholder="Display name" value={loginForm.displayName} onChange={changeLoginForm} />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label sm={2} for="avatar">Avatar url</Label>
                <Col sm={10}>
                    <Input type="avatar" name="avatar" id="avatar" placeholder="Avatar" value={loginForm.avatar} onChange={changeLoginForm} />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Col >
                    <Button>Submit</Button>
                </Col>
            </FormGroup>
        </Form>
    );
};

export default Registration;