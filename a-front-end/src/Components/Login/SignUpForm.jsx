import React, {useState} from 'react'
import { useNavigate} from "react-router-dom";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
  } from '@chakra-ui/react'

function SignUpForm ({onLogin}){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [dietRestriction, setDietRestriction] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email,
                name,
                password,
                diet_restriction: dietRestriction
            })
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
                navigate("/")
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormLabel>Email Address</FormLabel>
                <input id="email" type="email" onChange={(e) => setEmail(e.target.value)}/>
                <br></br>
                <FormLabel>Name</FormLabel>
                <input id="name" type="text" onChange={(e) => setName(e.target.value)}/>
                <br></br>
                <FormLabel>Diet Restriction</FormLabel>
                <input id="diet" type="text" onChange={(e) => setDietRestriction(e.target.value)}/>
                <br></br>
                <FormLabel>Password</FormLabel>
                <input id="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                <br></br>
                
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;