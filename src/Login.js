import { Button } from '@material-ui/core';
import { login } from './features/userSlice';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';
import { useDispatch } from 'react-redux';

function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then (({ user }) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            }))
        })
        .catch(error => alert(error.message));
    }
  return (
    <div className='login'>
        <div className='login__container'>
            <img src='https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gmail.max-1100x1100.png' alt='gmail' />
            <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
        </div>
    </div>
  );
}

export default Login;