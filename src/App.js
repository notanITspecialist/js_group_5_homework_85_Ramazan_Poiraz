import React from 'react';
import Artists from "./components/Artists/Artitst";
import {Route, Switch} from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Container from "reactstrap/lib/Container";
import Artist from "./components/Artist/Artist";
import Album from "./components/Album/Album";
import Registration from "./components/registration/registration";
import Login from "./components/login/login";
import TrackHistory from "./components/TrackHistory/TrackHistory";
import AddArtist from "./components/addArtist/addArtist";
import AddAlbum from "./components/addAlbum/AddAlbum";
import AddTrack from "./components/addTrack/AddTrack";

function App() {
  return (
    <div>
        <NavBar/>
        <Container>
            <Switch>
                <Route path="/" exact component={Artists}/>
                <Route path="/registration" exact component={Registration}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/trackHistory" exact component={TrackHistory}/>
                <Route path="/addArtist" exact component={AddArtist}/>
                <Route path="/addAlbum" exact component={AddAlbum}/>
                <Route path="/addTrack" exact component={AddTrack}/>
                <Route path="/artist/:id" exact component={Artist}/>
                <Route path="/album/:id" exact component={Album}/>
            </Switch>
        </Container>
    </div>
  );
}

export default App;
