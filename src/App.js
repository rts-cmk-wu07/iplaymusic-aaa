import React, {useEffect, useState} from "react";
import {getTokenFromUrl} from "./spotify"
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Walkthrough from "./components/walkthrough/Walkthrough";
import Player from "./components/player/Player";
import { useDataLayerValue } from "./components/datalayer/DataLayer";
import { Route, Routes } from "react-router";

const spotify = new SpotifyWebApi();

function App() {

  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(()=> {
    const hash = getTokenFromUrl();
    window.location.hash= "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);
      
      spotify.getMe().then((user)=> {
        

        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
    }
  },[]);

  /* return (
    <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/players" element={<Player/>}></Route>
  </Routes>
    );
    */
    return (
      <div>
      {
        token? (
          <Player spotify={spotify} />
        ) : (
          <Login/>
        )
      }
     <Navbar/>
     <Walkthrough/>
    </div> 
    )
  
  

}

export default App;
