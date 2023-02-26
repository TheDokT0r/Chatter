import React, { useEffect, useState } from 'react'
import styles from '../../styles/login.module.css';
import {createAccount, checkForErrors} from '../../components/CreateNewUser';

export default function index() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const [errors, setErrors] = useState([]);

    // console.log({ email, username, password, confirmPass });

    useEffect(() => {

    }, [])


    const submitClick = async (event) => {
        event.preventDefault();
        const userData = { email, username, password, confirmPass };

        setErrors(await checkForErrors(userData));


        //Wouldn't submit if there are errors
        if(errors.length > 0) {
            return;
        }


        await createAccount(userData);
    }


    //Dislays the erros in an html form
    const displayErrorsList = () => {
        let c = 1;
        return errors.map((item, index) => (
            <p key={index}>*{item}</p>
        ));
    }

    //TODO: Delete later. Only for debuging
    const getRandomUserData = () => {
        const response = fetch('/api/getRandomUserData');
        response.then((res) => {
            res.json().then((data) => {
                console.log(data);
                setEmail(data.email);
                setUsername(data.username);
                setPassword(data.password);
                setConfirmPass(data.password);
            })
        })
    }

    return (
        <div>
            <h1>Sign up</h1>

            <div>
                <div>
                    <input
                        value={email}
                        className={styles.inputTxt}
                        type='email'
                        placeholder='Email'
                        onChange={(e) => { setEmail(e.target.value) }}>
                    </input>
                </div>

                <div>
                    <input
                        value={username}
                        className={styles.inputTxt}
                        type='text'
                        placeholder='Username'
                        onChange={(e) => { setUsername(e.target.value) }}>
                    </input>
                </div>

                <div>
                    <input
                        value={password}
                        className={styles.inputTxt}
                        type='password'
                        placeholder='Password'
                        onChange={(e) => { setPassword(e.target.value) }}>
                    </input>
                </div>

                <div>
                    <input
                        value={confirmPass}
                        className={styles.inputTxt}
                        type='password'
                        placeholder='Confirm Password'
                        onChange={(e) => { setConfirmPass(e.target.value) }}>
                    </input>
                </div>

                <div>
                    <button onClick={submitClick}>Submit</button>
                </div>

                <button onClick={getRandomUserData}>DEBUG</button>

                <p>Already have an account? <a href='/login'>Log in!</a></p>

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
