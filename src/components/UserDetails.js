import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const UserDetails = () => {

    const { id } = useParams();
 
    const [viewUser, setViewUser] = useState({
        name: '',
        username:'',
        email:'',
        phone:'',
        street: "",
        suite: "",
        city: "",
        zipcode: "",
    });

    useEffect(() => {

        loadUser();

    },[])

    const loadUser = async () => {
        const responseUser = await axios.get(`http://localhost:5000/users_list/${id}`);
        setViewUser(responseUser.data)
        console.log(responseUser)

    }

    return(
        <>

<div className="container vh-100" style={{marginTop: '100px'}}>
<div className="row">
    <div className="col-md-12">
        <div className="jumbotron">
            <h1 className="display-4">{viewUser.name}</h1>
                  <p className="lead">{viewUser.username} &nbsp; {viewUser.email}</p>
            <hr className="my-4" />
                <p>{viewUser.phone}, {viewUser.street}, {viewUser.suite}, {viewUser.city}, {viewUser.zipcode} </p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    </div>
</div>
</div>


        </>
    )
}
export default UserDetails;