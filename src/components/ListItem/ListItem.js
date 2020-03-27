import React from 'react';
import {Button, CardTitle, ListGroupItem} from "reactstrap";
import './Artists.css'
import CardImg from "reactstrap/es/CardImg";

const ListItem = props => {
    return (
        props.role === 'admin' ?
            <ListGroupItem className="m-1 d-flex position-relative" style={{background: '#ccc'}} >
                <div className='item-img'>
                    {props.photo ? <CardImg src={"http://localhost:8000/uploads/"+props.typeImage+"/" + props.photo} alt="Card image cap" className='item-img'/> : <p className='item-img'>Photo not found</p>}
                </div>
                <CardTitle className='h2'>{props.name}</CardTitle>
                <b className='item-published'>{props.published ? 'Опубликовано' : 'Неопубликовано'}</b>
                <div className='item-buttons'>
                    <Button onClick={props.getArtistInfo}>More info</Button>{' '}
                    {props.published === false && <Button onClick={props.publish}>Publish</Button>}{' '}
                    <Button onClick={props.delete}>Delete</Button>
                </div>
            </ListGroupItem>
            :
            props.userAuthor === props.username ?
                <ListGroupItem className="m-1 d-flex position-relative" style={{background: '#ccc'}} >
                    <div className='item-img'>
                        {props.photo ? <CardImg src={"http://localhost:8000/uploads/"+props.typeImage+"/" + props.photo} alt="Card image cap" className='item-img'/> : <p className='item-img'>Photo not found</p>}
                    </div>
                    <CardTitle className='h2'>{props.name}</CardTitle>
                    <span className='item-published'>Это ваша публикация    <b>{props.published ? 'Опубликовано' : 'Неопубликовано'}</b></span>
                    <Button className='ml-auto' onClick={props.getArtistInfo}>More info</Button>{' '}
                </ListGroupItem>
                :
                <ListGroupItem className="m-1 position-relative" style={{background: '#ccc', display: props.published ? 'flex' : 'none'}} >
                    <div className='p-2'>
                        <div className='item-img'>
                            {props.photo ? <CardImg src={"http://localhost:8000/uploads/"+props.typeImage+"/" + props.photo} alt="Card image cap" className='item-img'/> : <p className='item-img'>Photo not found</p>}
                        </div>
                        <CardTitle className='h2 d-inline-block'>{props.name}</CardTitle>
                        <Button className='ml-auto' onClick={props.getArtistInfo}>More info</Button>{' '}
                    </div>
                </ListGroupItem>
    );
};

export default ListItem;