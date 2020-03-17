import React, {useEffect, useState} from 'react';
import {addTrackHistory, getAlbum} from "../../actions/album";
import {Card, CardBody, CardTitle} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import YouTube from 'react-youtube';


const Album = props => {
    const {
        className
    } = props;

    const initVideoId = {videoId: ''};
    const [videoId, setVideoId] = useState(initVideoId);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const dispatch = useDispatch();
    const {id} = useParams();

    const album = useSelector(state => state.artists.album);
    const user = useSelector(state => state.login);

    useEffect(() => {
        dispatch(getAlbum(id))
    }, [dispatch, id]);

    const opts = {
        height: '390',
        width: '100%',
    };

    const _onReady = (event) => {
        event.target.pauseVideo();
    };

    const tracks = album.tracks.map(e => (
        <Card
            key={e._id}
            style={{
                background: '#ccc',
                width: '25%',
            }}
        >
            <span>{e.increment}</span>
            <CardBody>
                <CardTitle className='h2'>{e.name}</CardTitle>
                <span>duration: {e.duration}s</span>
                {user.user.token && (
                    <>
                        <Button className='d-block mb-2' onClick={async () => {
                            await addTrackHistory(e, user.user.token);
                        }}>Listen</Button>
                        {e.videoId && <Button onClick={async () => {
                            await setVideoId({...videoId,videoId: e.videoId});
                            toggle();
                            await addTrackHistory(e, user.user.token);
                        }}>Посмотреть на ютуб</Button>}
                    </>
                )}
            </CardBody>
        </Card>
    ));

    return (
        <div>
            {album.tracks[0] ?
                <div >
                    <h3>{album.info.name}</h3>
                    <p>released: {album.info.release}</p>
                    <hr/>
                    <h4>Tracks</h4>
                    <div className='d-flex flex-wrap'>
                        {tracks}
                    </div>
                </div>
                :
                <h1>Album dont have tracks</h1>
            }
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalBody>
                    <YouTube
                        videoId={videoId.videoId}
                        opts={opts}
                        onReady={_onReady}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Album;