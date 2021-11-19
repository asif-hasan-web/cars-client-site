import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

const MakeAdmin = () => {
    const[email,setEmail]=useState("")

    const handleSubmit=()=>{
        console.log(email);
        fetch( `http://localhost:5000/addadmin?email=${email}`,
            {
                method:'POST'
            }
        )

    }

    return (
        <div style={{marginTop:"100px",marginLeft:"100px"}}>
            <TextField sx={{mb:2,width:"300px"}} id="standard-basic" onBlur={(e)=>setEmail(e.target.value)} label="new admin email" variant="standard" />
            <br />
            <Button onClick={handleSubmit} variant="contained">Contained</Button>
        </div>
    )
}

export default MakeAdmin
