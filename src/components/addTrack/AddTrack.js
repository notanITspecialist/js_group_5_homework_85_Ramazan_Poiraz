import React, {useEffect, useState} from 'react';
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Row from "reactstrap/lib/Row";
import Input from "reactstrap/lib/Input";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import Button from "reactstrap/es/Button";
import {getMyPublishedArtist} from "../../actions/artists";
import {getMyPublishedAlbums} from "../../actions/artist";
import {addTrack} from "../../actions/album";

const AddTrack = props => {
    const initialAddTrack = {
        name: '',
        artist: '',
        album: '',
        duration: '',
        videoId: ''
    };

    const [newTrack, setNewTrack] = useState(initialAddTrack);

    const dispatch = useDispatch();
    const user = useSelector(state => state.login);
    const selectedInfo = useSelector(state => ({artists: state.artists.artists, album: state.artists.artist.albums}),shallowEqual);

    useEffect(() => {
        dispatch(getMyPublishedArtist(user.user.token));
    }, [dispatch, user.user.token]);

    useEffect(() => {
        dispatch(getMyPublishedAlbums(user.user.token, newTrack.artist));
    }, [dispatch, user.user.token, newTrack.artist]);

    const changeForm = e => setNewTrack({...newTrack, [e.target.name]: e.target.value});

    return (
        <Form onSubmit={e => {
            e.preventDefault();
            addTrack(newTrack, user.user.token, props.history)
        }}>
            {console.log(newTrack)}
            <FormGroup row>
                <Label sm={2} for='name'>Name</Label>
                <Row>
                    <Input required value={newTrack.name} onChange={changeForm} name='name' id='name'/>
                </Row>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} for='artist'>Artist</Label>
                <Row>
                    <Input required type="select" value={newTrack.info} onChange={changeForm} name='artist' id='artist'>
                        <option value={''}>Select artist</option>
                        {selectedInfo.artists.map(e => (
                            <option key={e._id} value={e._id}>{e.name}</option>
                        ))}
                    </Input>
                </Row>
            </FormGroup>
            {newTrack.artist && (
                <FormGroup row>
                    <Label sm={2} for='album'>Album</Label>
                    <Row>
                        <Input required type="select" value={newTrack.info} onChange={changeForm} name='album' id='album'>
                            {selectedInfo.album[0] ?<option value={''}>Select album</option> : <option value={''}>Artist has no albums</option>}
                            {selectedInfo.album.map(e => (
                                <option key={e._id} value={e._id}>{e.name}</option>
                            ))}
                        </Input>
                    </Row>
                </FormGroup>
            )}
            <FormGroup row>
                <Label sm={2} for='duration'>Duration</Label>
                <Row>
                    <Input type='number' required value={newTrack.release} onChange={changeForm} name='duration' id='duration'/>
                </Row>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} for='videoId'>Video youtube id</Label>
                <Row>
                    <Input value={newTrack.release} onChange={changeForm} name='videoId' id='videoId'/>
                </Row>
            </FormGroup>
            <FormGroup>
                <Button>Add track</Button>
            </FormGroup>
        </Form>
    );
};

export default AddTrack;