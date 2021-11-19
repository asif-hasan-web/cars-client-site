import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useHistory, useLocation } from 'react-router-dom'
import useContexts from '../hooks/useContexts'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const {authInfo}= useContexts()
    const{
        signInWithEmail,
        signInWithGoogle,
        setError,
        setUser,
        error,
        } = authInfo;
        const location = useLocation();
        const history = useHistory();
        const redirect = location?.state?.from || "/home";
//
const handelSignUP =(e)=>{
    e.preventDefault();
    signInWithEmail(email,password,history,redirect)

}
    return (
        <div style={{width:"30%", margin:"auto"}}>
             <h2 className="text-center my-3 ">Login Now</h2>
             
             <p className="text-danger text-center">{error}</p>
            <div>
            <Form onSubmit={handelSignUP}
        //      onSubmit={()=>
        // signInWithEmail()
        // .then((result)=>{
        //   setUser(result.user);
        //   history.push(redirect);
        //   })
        //   .catch(error=>{
        //       setError(error.message)
        //   })
        // }
        >
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  onBlur={(e)=>setEmail(e.target.value)}  type="email" autoComplete="current-email" id="email"  placeholder="Enter email" />
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  onBlur={(e)=>setPassword(e.target.value)} autoComplete="current-password" id="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="dark" style={{width:"100%"}} type="submit">
                    Login 
                </Button>
            </Form>
            </div>
            <p className="text-center m-2">New User? <Link to="/signup">Register Now</Link></p>
            <p className="text-center m -3 text-danger">------------- or -------------</p>
           <div className="text-center">
             <button  onClick={() => {
                    signInWithGoogle()
                    .then((result) => {
                        const user = result.user;
                        setUser(user);
                        history.push(redirect);
                    })
                    .catch((err) => {
                        const errorMessage = err.message;
                        setError(errorMessage);
                    });
                }} 
                className="btn btn-warning">Log in with Google</button>
           </div>
        </div>
    )
}

export default Login
