import './Profile.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Profile = () => {

    const token = useSelector((state) => state.auth.token);
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token
    };

    const [profile, setProfile] = useState({
        pk: null,
        username: "",
        email: "",
        email_verified: null
    });

    useEffect(()=>{
        console.log(token);

        axios.get('http://localhost:8000/api/v1/dj-rest-auth/user/', {headers: headers})
            .then(res=>{
                console.log(res);
                setProfile(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
        
    }, [token]);

    return (
        <div className="Profile">
            <h1>Profile</h1>
            <h2>ID</h2>
            <p>{profile.pk}</p>
            <h2>Username</h2>
            <p>{profile.username}</p>
            <h2>Email</h2>
            <p>{profile.email}</p>
            <h2>Email Verified</h2>
            <p>{profile.email_verified ? "True": "False"}</p>
        </div>
    );
}

export default Profile;