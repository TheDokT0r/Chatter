import React, { useEffect, useState } from 'react'
import styles from '../../styles/login.module.css';
import { checkForSignUpErrors } from '../api/checkForSignUpErrors';

export default function index() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const [errors, setErrors] = useState([]);

    console.log({ email, username, password, confirmPass });

    useEffect(() => {

    }, [])


    const submitClick = () => {
        setErrors(checkForSignUpErrors({ email, username, password, confirmPass }));

        //No errors here lol
        if (errors.length < 1) {

        }
    }

    //Dislays the erros in an html form
    const displayErrorsList = () => {
        let c = 1;
        return errors.map(item => (
            <p>*{item}</p>
        ));
    }

    return (
        <div>
            <h1>Sign up</h1>

            <div>
                <div>
                    <input
                        className={styles.inputTxt}
                        type='email'
                        placeholder='Email'
                        onChange={(e) => { setEmail(e.target.value) }}>
                    </input>
                </div>

                <div>
                    <input
                        className={styles.inputTxt}
                        type='text'
                        placeholder='Username'
                        onChange={(e) => { setUsername(e.target.value) }}>
                    </input>
                </div>

                <div>
                    <input
                        className={styles.inputTxt}
                        type='password'
                        placeholder='Password'
                        onChange={(e) => { setPassword(e.target.value) }}>
                    </input>
                </div>

                <div>
                    <input
                        className={styles.inputTxt}
                        type='password'
                        placeholder='Confirm Password'
                        onChange={(e) => { setConfirmPass(e.target.value) }}>
                    </input>
                </div>

                <div>
                    <button onClick={submitClick}>Submit</button>
                </div>

                <p>Already have an accout? <a href='/login'>Log in!</a></p>

                {/* Errors List (displays only if the errors state length > 0*/}
                <div>
                    {
                        errors.length > 0 &&
                        <div>
                            <h3>Errors List:</h3>
                            {displayErrorsList()}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
