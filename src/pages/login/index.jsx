import React from 'react'
import styles from '../../styles/login.module.css'
import Link from 'next/link'

export default function index() {
  return (
    <div>
      <h1>Log In</h1>

      <div>
        <input className={styles.inputTxt} type='text' placeholder='Username/Email'></input><br />
        <input className={styles.inputTxt} type='password' placeholder='Password'></input>
      </div>

      <p> Don't have an account yet? <a href='/signup'>Create One!</a></p>
    </div>
  )
}
