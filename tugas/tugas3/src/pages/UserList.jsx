import { Container } from "@mui/system"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../features/user/UserSlice";


const UserList = () => {
  const [dataUsers,setDataUsers] = useState([])

  //initialize dispatch
  const dispatch = useDispatch()

  //initialize the state
  const {users, loading} = useSelector((state) => state.users)

  let fetchMount = true;

  useEffect(()=>{
    if(fetchMount){
      dispatch(getAllUsers())
    }

    return () => {
      fetchMount = false
      
    }
  },[])

  // const [users,setUsers] = useState([])

  // const usersData = [
  //   {
  //     id:1,
  //     firtsName:'fn',
  //     lastName:'ln',
  //     username:'un',
  //     birthDate:'2022-12-01'
  //   },
  //   {
  //     id:2,
  //     firtsName:'fn2',
  //     lastName:'ln',
  //     username:'un',
  //     birthDate:'2022-12-01'
  //   },
  //   {
  //     id:3,
  //     firtsName:'fn3',
  //     lastName:'ln',
  //     username:'un',
  //     birthDate:'2022-12-01'
  //   }
  // ]

  // useEffect(() => {
  //   return () => {
  //     setUsers(usersData)
  //   }
  // }, [users])
  
  


  return (
    <Container maxWidth='md' className='py-16'>


      {loading && (<h1>Loading data .......</h1>)}

        <h2 className="w-fit mx-auto font-bold text-2xl">User List</h2>

      
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Birth Date</TableCell>
            <TableCell>Actions</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>

          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.firstName}
              </TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.birthDate}</TableCell>
              <TableCell className="space-x-2">
                  <Button variant="contained" endIcon={<EditIcon />}>Edit</Button>
                  <Button variant="contained" color="error" endIcon={<DeleteIcon />}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  )
}

export default UserList