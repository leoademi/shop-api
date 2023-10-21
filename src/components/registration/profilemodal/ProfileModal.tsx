import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import './ProfileModal.scss'

interface UserData {
    id: number;
    emri: string;
    email: string;

    first_name: string;

    last_name: string;

    birthdate: string;
}
function ProfileModal() {
    const [userData, setUserData] = useState<UserData | null>(null);

    const location = useLocation();
    const { userID } = location.state;

    useEffect(() => {

        let token = localStorage.getItem('authToken');

        if (!token) {
            console.error("Authentication token is missing.");
            return;
        }
        console.log('user id',userID)

        fetch("http://localhost:8000/api/users/" + userID, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.error("Error fetching user data.");
                    return null;
                }
            })
            .then((data) => {
                setUserData(data);
                console.log('set user data', data);
            })
            .catch((error) => console.error('Error fetching user data:', error));
    }, []);

    return (
        <div className={`profile-modal ${userData ? 'centered' : ''}`}>
            {userData ? (
                <>
                    <div className="header-profile-modal">
                        <img className="user-icon-img" src="../user-icon.png" alt="Profile Image" />

                    </div>
                    <div className="info">
                        <h2>{userData.first_name} {userData.last_name}</h2>
                        <p><strong>ID:</strong> {userData.id}</p>
                        <p><strong>Birthdate:</strong> {userData.birthdate}</p>
                        <p><strong>Email:</strong> {userData.email}</p>
                    </div>
                </>
            ) : (
                <p className="loading">Loading user data...</p>
            )}
        </div>
    );
}

export default ProfileModal;