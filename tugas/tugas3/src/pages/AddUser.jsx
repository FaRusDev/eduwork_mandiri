import { Container } from "@mui/system"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

import { useDispatch,useSelector } from "react-redux";
import { addUser } from "../features/user/UserSlice";


const AddUser = () => {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const [alertNotif,setAlertNotif] = useState(false)

    const {loading} = useSelector((state) => state.users)

    const dispatch = useDispatch()

    async function handleSubmit(e){
        e.preventDefault()
        await dispatch(addUser(data)).then(data=>console.log('berhasil', data))
        setAlertNotif(true)
    }

    function closeAlert(){
        navigate('/users')
    }


  return (

    <Container maxWidth='sm' className='py-16'>
        {loading && <h1>loading data save</h1>}

        {alertNotif ? (<Alert onClose={closeAlert}>This is a success alert — check it out!</Alert>) : ''}
        <h2 className="w-fit mx-auto font-bold text-2xl">Add User</h2>

        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
            <TextField id="standard-basic" label="First Name" name="firstName"  onChange={(e)=>setData(d=> ({...d,firstName:e.target.value}))} defaultValue={data.firstName} variant="standard" />
            <TextField id="standard-basic" label="Last Name" name="lastName" variant="standard" onChange={(e)=>setData(d=> ({...d,lastName:e.target.value}))} defaultValue={data.lastName} />
            <TextField id="standard-basic" label="Username" name="username" variant="standard" onChange={(e)=>setData(d=> ({...d,username:e.target.value}))} defaultValue={data.username}/>
            <input type="date" name="birthDate" id="birthDate" className="outline-none" onChange={(e)=>setData(d=> ({...d,birthDate:e.target.value}))} defaultValue={data.birthDate}/>
            <Button type="submit" variant="contained">Add User</Button>
        </form>


    </Container>
    
  )
}

export default AddUser