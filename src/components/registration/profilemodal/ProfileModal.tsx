import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
interface UserData {
    id: number;
    emri: string;
    email: string;
}
function ProfileModal() {
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {

        let token = localStorage.getItem('authToken');

        if (!token) {
            console.error("Authentication token is missing.");
            return;
        }

        fetch("https://localhost:7001/api/Profile/profile", {
            method: "GET",
            credentials: "include",
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
        <div className="profile-modal">
            {userData ? (
                <>
                    <h2>{userData.id}</h2>
                </>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
}

export default ProfileModal;