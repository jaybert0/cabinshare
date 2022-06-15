import React, {useState} from 'react'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import {
    Box,
    Flex,
    Spacer,
    Text,
    Center,
    Square,
    Circle,
    Image,
    Stack,
    Button,
  } from "@chakra-ui/react";

 

function Login ({onLogin}){
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div>
            {showLogin ? (
                <>
                    <LoginForm onLogin={onLogin}/>
                    <div>Don't have an Account?</div>
                    <Button onClick={() => setShowLogin(false)}> Sign Up</Button>
                </>
            ): (
            <>
                <SignUpForm/>
                <div>Already Have an Account?</div>
                <Button onClick={() => setShowLogin(true)}>Login</Button>
            </>
            )}
        </div>
    )
}

export default Login;