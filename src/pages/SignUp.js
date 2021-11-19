import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useHistory,useLocation } from 'react-router-dom'
import useContexts from '../hooks/useContexts'

const SignUp = () => {
    // const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const {authInfo} = useContexts()
    const{
        signUpWithEmail,
        error,
    } = authInfo;
        const location = useLocation();
        const history = useHistory();
        const redirect = location?.state?.from || "/home";
    
  
  // get password
 
const handelSubmit =(e)=>{
    e.preventDefault();
    signUpWithEmail(name,email,password,history,redirect)

}
    return (
        <div style={{width:"30%", margin:"auto"}}>
            <h2 className="text-center">Register Now</h2>
            <p className="text-danger text-center">{error}</p>
            <Form onSubmit={handelSubmit}
                 >
                <Form.Group className="mb-3" >
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control required onBlur={(e)=>setName(e.target.value)} id ="name" type="text" placeholder="Enter Your Name" />
                    
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required onBlur={(e)=>setEmail(e.target.value)} id ="email" type="email"  placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control required onBlur={(e)=>setPassword(e.target.value)} id ="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control   id ="photoUrl" type="text" placeholder="Enter Your Photo Url" />
                </Form.Group>
                <Button variant="danger" style={{width:"100%"}} type="submit">
                    Sign up
                </Button>
            </Form>
            <p className="text-center mt-2">ALready register? <Link to="/login">Login Now</Link></p>
            
        </div>
    )
}

export default SignUp
// controlId="formBasicUrl"
// controlId="formBasicPassword"
// controlId="formBasicEmail"
// controlId="formBasicName"