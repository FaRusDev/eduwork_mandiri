import React from 'react'

import { Container } from "@mui/system"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

import { useDispatch,useSelector } from "react-redux";
import { updateUser,getUserById, } from "../features/user/UserSlice";

import { useParams } from 'react-router-dom';

const EditUser = () => {

  
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const [alertNotif,setAlertNotif] = useState(false)

    const {singleUser,loading} = useSelector((state) => {
      // console.log(state.users)
      return state.users
    })

    //ini userId dari app.js di routernya 
    const {userId} = useParams()

    const dispatch = useDispatch()

    let fetchMount = true

    useEffect(() => {    
      if(fetchMount){
        dispatch(getUserById(userId))
      }
      return () => {
        fetchMount = false
      }
    }, [])
    

    async function handleSubmit(e){
        e.preventDefault()
        console.log('ini dari form',data)
        await dispatch(updateUser(userId))
        setAlertNotif(true)
    }

    function closeAlert(){
        navigate('/users')
    }

    // const formattedDate = format(parseISO(Date(singleUser.birthDate)), 'YYYY/MM/DD');

  return (

    <Container maxWidth='sm' className='py-16'>
    {loading && <h1>loading data edit</h1>}

    {alertNotif ? (<Alert onClose={closeAlert}>This is a success alert — check it out!</Alert>) : ''}
    <h2 className="w-fit mx-auto font-bold text-2xl">Edit User</h2>

    <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
        <TextField id="standard-basic" label={singleUser.firstName} name="firstName"  onChange={(e)=>setData(d=> ({...d,firstName:e.target.value}))} defaultValue={singleUser.firstName} variant="standard" />
        <TextField id="standard-basic" label={singleUser.lastName} name="lastName" variant="standard" onChange={(e)=>setData(d=> ({...d,lastName:e.target.value}))} defaultValue={singleUser.lastName} />
        <TextField id="standard-basic" label={singleUser.username} name="username" variant="standard" onChange={(e)=>setData(d=> ({...d,username:e.target.value}))} defaultValue={singleUser.username}/>
        <input type="date" name="birthDate" id="birthDate" className="outline-none" onChange={(e)=>setData(d=> ({...d,birthDate:e.target.value}))} defaultValue={singleUser.birthDate}/>
        <Button type="submit" variant="contained">Update User</Button>
    </form>


</Container>
  )
}

export default EditUser