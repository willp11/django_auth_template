import './Profile.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {

    const token = useSelector((state) => state.auth.token);

    useEffect(()=>{
        console.log(token);

        // TO DO
        // use the token to get user's profile
        
    }, [token]);

    return (
        <div className="Profile">
            <h1>Profile</h1>
        </div>
    );
}

export default Profile;