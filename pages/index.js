
import React, { useContext } from "react";

import { Context } from '../context'

import { useRouter } from "next/router";

import axios from 'axios';

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  const router = useRouter()

  function onSubmit(e) {
    e.preventDefault()

    if (username.length === 0 || secret.length === 0) return

    axios.put(
      'https://api.chatengine.io/users/',
      {username, secret},
      {headers: {"Private-key": '97dc7c0b-c99c-4669-8e35-01ac6de3053f'}}
    )
    .then((r) => router.push('/chats'));
  }
  return (
  <div className="background">
  <center>
    <div className='auth-title'><center>Chatters</center></div>
    <center>   

    <div class="main">
        <div class="Geeks1 GFG">
          <div class="online-text1">Mefedron</div>
          <div class="online-indicator3">
          <span class="blink3"></span>
          </div>
          <h2 class="online-text"> IN-PROGRESS</h2></div>
        <div class="Geeks2 GFG">
        <div class="online-text1">Skun</div>
          <div class="online-indicator">
          <span class="blink"></span>
          </div>
          <h2 class="online-text"> ONLINE</h2>
          </div>
        <div class="Geeks3 GFG">
        <div class="online-text1">Reszta</div>
        <div class="online-indicator2">
          <span class="blink2"></span>
          </div>
          <h2 class="online-text"> OFFLINE</h2>
        </div>
    </div>

      <div className='auth-container'>
          <form className='auth-form' onSubmit={e => onSubmit(e)}>
            <div className='auth-titl'>Wpisz swój nickname oraz hasło, następnie kliknij "Wejdź"</div>
          <div className='input-container'>
            <input
            placeholder='nickname'
            className='text-input'
            onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='input-container'>
            <input
              type='password'
              placeholder='hasło skurwysynu'
              className='text-input'
              onChange={(e) => setSecret(e.target.value)}
            />
            </div>
                <center>
                <button
                type='submit'
                className='submit-button'>
                Wejdź
                </button>
              </center>
          </form> 
          
      </div>
    </center>

    </center>  
  </div>
  )
}
