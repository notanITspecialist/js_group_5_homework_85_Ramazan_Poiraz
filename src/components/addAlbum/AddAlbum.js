import React, {useEffect, useState} from 'react';
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Row from "reactstrap/lib/Row";
import Input from "reactstrap/lib/Input";
import {useDispatch, useSelector} from "react-redux";
import Button from "reactstrap/es/Button";
import {getMyPublishedArtist} from "../../actions/artists";
import {addAlbum} from "../../actions/album";

const AddAlbum = props => {
    const initialAddAlbum = {
        name: '',
        author: '',
        release: '',
        poster: ''
    };

    const dispatch = useDispatch();
    const user = useSelector(state => state.login);
    const artists = useSelector(state => state.artists.artists);

    useEffect(() => {
        dispatch(getMyPublishedArtist(user.user.token));
    }, [dispatch, user.user.token]);

    const [newAlbum, setNewAlbum] = useState(initialAddAlbum);

    const changeForm = e => setNewAlbum({...newAlbum, [e.target.name]: e.target.value});

    const changeFileForm = e => {
        setNewAlbum({...newAlbum, [e.target.name]: e.target.files[0]})
    };

    const addNewAlbumClick = async e => {
        e.preventDefault();

        const data = new FormData();

        Object.keys(initialAddAlbum).forEach(e => {
            data.append(e, newAlbum[e])
        });

        await addAlbum(data, user.user.token, props.history, newAlbum.author);
    };

    return (
        <Form onSubmit={addNewAlbumClick}>
            <FormGroup row>
                <Label sm={2} for='name'>Title</Label>
                <Row>
                    <Input required value={newAlbum.name} onChange={changeForm} name='name' id='name'/>
                </Row>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} for='author'>author</Label>
                <Row>
                    <Input required type="select" value={newAlbum.info} onChange={changeForm} name='author' id='author'>
                        <option value={''}>Select ulbum</option>
                        {artists.map(e => (
                            <option key={e._id} value={e._id}>{e.name}</option>
                        ))}
                    </Input>
                </Row>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} for='release'>release</Label>
                <Row>
                    <Input type='number' required value={newAlbum.release} onChange={changeForm} name='release' id='release'/>
                </Row>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} for='poster'>image</Label>
                <Row>
                    <Input onChange={changeFileForm} name='poster' type='file' id='poster'/>
                </Row>
            </FormGroup>
            <FormGroup>
                <Button>Add album</Button>
            </FormGroup>
        </Form>
    );
};

export default AddAlbum;