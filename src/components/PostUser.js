import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const PostUser = () => {
    const userHistoryLink = useHistory();
    const [addUser, setAddUser] = useState({
        name: '',
        username:'',
        email:'',
        phone:'',
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        
    })
    
        
    const {name, username, email, phone, street, suite, city, zipcode} = addUser;

    const onInputChange = (event) => {

       setAddUser({
          ...addUser, [event.target.name]: event.target.value
       })

    }

    
    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:5000/users_list/', addUser);
        userHistoryLink.push("/manage-users")



    }

    return(
        <>

        <div className="container mb-5 vh-100" style={{marginTop: '100px'}}>
            <div className="row">
                <div className="m-auto col-md-6">
                    <div className="form_ui">
                    <form onSubmit={event => onSubmit(event)}>
                    <h4>Add Users</h4>
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
                     

                
                    <div className="form-group">
                    <TextField onChange={ event => onInputChange(event)} id="standard-basic" value={street} name="street" className="w-100" label="Street" />
                    </div>

                      
                    <div className="form-group">
                    <TextField onChange={ event => onInputChange(event)} id="standard-basic" value={suite} name="suite" className="w-100" label="Suite" />
                    </div>

                    <div className="form-group">
                    <TextField onChange={ event => onInputChange(event)} id="standard-basic" value={city} name="city" className="w-100" label="City" />
                    </div>

                    <div className="form-group">
                    <TextField onChange={ event => onInputChange(event)} id="standard-basic" value={zipcode} name="zipcode" className="w-100" label="Zipcode" />
                    </div>

                    <div className="form-group pt-2">
                    <Button type="submit"  variant="contained" color="primary">Sumit</Button>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>

      
        
        </>
    )
}

export default PostUser;