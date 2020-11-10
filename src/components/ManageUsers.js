import React, { useState, useEffect } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';  
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const ManageUsers = () => {

   const [users, setUsers] = useState([]);
  
   useEffect(() => {
    loadUsers();
   },[])
   
   const loadUsers = async () => {
     const response = await axios.get('http://localhost:5000/users_list/');
     setUsers(response.data);
     

   }

   const onDeleteUser = async (id) => {
     await axios.delete(`http://localhost:5000/users_list/${id}`)
     loadUsers()
     console.log(id)

   }


    return(
        <>
        
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12 mt-5">
                <table className="table table-bordered">
  <thead className="thead-light ">
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email ID</th>
      <th scope="col">Mobile No.</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {

      users.map((values, index) => {

        return(
          <>
              <tr>
        <th className="align-middle" scope="row">{index + 1}</th>
        <td className="align-middle">{values.name}</td>
      <td className="align-middle">{values.username}</td>
      <td className="align-middle">{values.email}</td>
      <td className="align-middle">{values.phone}</td>
      <td className="align-middle">
    
      <NavLink to={`/manage-users/${values.id}`}>
      <IconButton aria-label="view" variant="outlined" className="MuiIconButton-colorLast" >
      <VisibilityIcon/>
     </IconButton>
     </NavLink>


      <NavLink to={`/manage-users/edit/${values.id}`}>
     <IconButton aria-label="edit" color="primary">
      <EditIcon />
     </IconButton>
     </NavLink>

     <IconButton aria-label="delete" color="secondary" onClick={() => onDeleteUser(values.id)}>
      <DeleteIcon />
     </IconButton>

      </td>
    </tr>
          </>
        )

      })

    }
    


  </tbody>
</table>

                </div>
            </div>
        </div>
        </>
    )
}

export default ManageUsers;