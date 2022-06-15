import React, {useState} from 'react'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'

function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div>
            <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input id="email" type="email"/>
                <br></br>
                <FormLabel>Password</FormLabel>
                <Input id="password" type="password"/>
            </FormControl>
        </div>
    )
}

export default LoginForm