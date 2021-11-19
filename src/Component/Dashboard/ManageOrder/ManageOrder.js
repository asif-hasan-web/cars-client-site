import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useFirebase from '../../../hooks/useFirebase'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const ManageOrder = () => {
    const[order,setOrder]=useState([])
    const [condition,setCondition]=useState(true)
   
    useEffect(() => {
        fetch(`http://localhost:5000/myorder`)
          .then(res=>res.json())
          .then(data=>setOrder(data))
      }, [condition]);
      console.log(order);

      const deleteOrder =(id)=>{

        const procide = window.confirm("want to delete")
        if(procide){
            fetch(`http://localhost:5000/delete/${id}`
        ,{
            method:'DELETE'
        })
            .then(res =>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    setCondition(!condition)
            }})
        }
      }
    return (
        <div>
           <Grid container spacing={2}>
            {order.map(M=>
            <Grid item md={4}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={M.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {M.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                   {M.about}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={()=>deleteOrder(M._id)} size="small">Delete</Button>
                </CardActions>
                </Card>
             </Grid>)}
            </Grid>
        </div>
    )
}

export default ManageOrder
