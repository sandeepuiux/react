import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useHistory,useParams } from 'react-router-dom';

const EditUser = () => {
    const {id} = useParams();
    const userHistoryLink = useHistory();
    const [addUser, setAddUser] = useState({
        name: '',
        username:'',
        email:'',
        phone:''
    })
    
    useEffect( () => {

        loadUser()

    },[])
        
    const {name, username, email, phone} = addUser;

    const onInputChange = (event) => {
       setAddUser({
          ...addUser, [event.target.name]: event.target.value
       })

    }

    
    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.put(`http://localhost:5000/users_list/${id}`, addUser);
        userHistoryLink.push("/manage-users")



    }


    const loadUser = async () => {
        const response = await axios.get(`http://localhost:5000/users_list/${id}`);
        setAddUser(response.data)


    }

    return(
        <>

        <div className="container mb-5 vh-100" style={{marginTop: '100px'}}>
            <div className="row">
                <div className="m-auto col-md-6">
                    <div className="form_ui">
                    <form onSubmit={event => onSubmit(event)}>
                    <h4>Edit Users</h4>
                    <div className="form-group">
                    <TextField onChange={ event => onInputChange(event)} id="standard-basic" value={name} name="name" label="Name" className="w-100" />
                    </div>
                    <div className="form-group">
                    <TextField onChange={ event => onInputChange(event)} id="standard-basic" value={username} name="username"  className="w-100" label="User Name" />
                    </div>
                    <div className="form-group">
                    <TextField onChange={ event => onInputChange(event)} id="standard-basic" value={email} name="email" className="w-100" label="Email ID." />
                    </div>
                    <div className="form-group">
                    <TextField onChange={ event => onInputChange(event)} id="standard-basic" value={phone} name="phone" className="w-100" label="Mobile No." />
                    </div>
                    <div className="form-group pt-2">
                    <Button type="submit"  variant="contained" color="primary">Edit User</Button>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>

      
        
        </>
    )
}

export default EditUser;