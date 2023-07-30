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
    <div className='auth-container'>
      <form className='auth-form' onSubmit={e => onSubmit(e)}>
        <div className='auth-title'>Chatters</div>
        <div className='auth-titl'>Wpisz nick i hasło, tyle wystarczy!</div>

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

        <button
          type='submit'
          className='submit-button'>
          Zaloguj się
        </button>
      </form>
    </div>
  </div>
  )
}
