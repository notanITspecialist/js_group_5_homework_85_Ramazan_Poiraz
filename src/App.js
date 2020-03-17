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
                <Route path="/artist/:id" exact component={Artist}/>
                <Route path="/album/:id" exact component={Album}/>
            </Switch>
        </Container>
    </div>
  );
}

export default App;
