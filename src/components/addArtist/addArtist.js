import React, {useState} from 'react';
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Row from "reactstrap/lib/Row";
import Input from "reactstrap/lib/Input";
import {useSelector} from "react-redux";
import Button from "reactstrap/es/Button";
import {addArtist} from "../../actions/artists";

const AddArtist = props => {
    const initialAddArtist = {
        name: '',
        info: '',
        photo: ''
    };

    const [newArtist, setNewArtist] = useState(initialAddArtist);

    const changeForm = e => setNewArtist({...newArtist, [e.target.name]: e.target.value});

    const changeFileForm = e => {
        setNewArtist({...newArtist, [e.target.name]: e.target.files[0]})
    };
    const user = useSelector(state => state.login);

    const addNewArtistClick = async e => {
        e.preventDefault();

        const data = new FormData();

        Object.keys(initialAddArtist).forEach(e => {
            data.append(e, newArtist[e])
        });

        await addArtist(data, user.user.token, props.history);
    };

    return (
        <Form onSubmit={addNewArtistClick}>
            <FormGroup row>
                <Label sm={2} for='name'>Title</Label>
                <Row>
                    <Input required value={newArtist.name} onChange={changeForm} name='name' id='name'/>
                </Row>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} for='info'>description</Label>
                <Row>
                    <Input required value={newArtist.info} onChange={changeForm} name='info' id='info'/>
                </Row>
            </FormGroup>
            <FormGroup row>
                <Label sm={2} for='photo'>image</Label>
                <Row>
                    <Input onChange={changeFileForm} name='photo' type='file' id='photo'/>
                </Row>
            </FormGroup>
            <FormGroup>
                <Button>Add artist</Button>
            </FormGroup>
        </Form>
    );
};

export default AddArtist;