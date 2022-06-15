import React, {useState} from 'react'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
  } from '@chakra-ui/react'
  import { useNavigate} from "react-router-dom";


function LoginForm({onLogin}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ email, password })
        }).then ((r) => {
            setIsLoading(false);
            if (r.ok){
                r.json().then((user) => onLogin(user));
                navigate("/")


            } else {
                r.json().then((err) => setErrors(err.errors));
            }
            
        });
        
    }

    
    return (
        
        <div>
            <form onSubmit={handleSubmit}>
                <FormLabel>Email Address</FormLabel>
                <input id="email" type="email" onChange={(e) => setEmail(e.target.value)}/>
                <br></br>
                <FormLabel>Password</FormLabel>
                <input id="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                <Button type="submit">Login</Button>
            </form>
        </div>
    )
}

export default LoginForm