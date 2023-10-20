import React, {FormEvent, useState} from 'react';
import './Login.scss';
import ProfileModal from "../profilemodal/ProfileModal";
import {Link} from "react-router-dom";

interface UserData {
    id: number;
    emri: string;
    email: string;
}
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginSuccessful, setLoginSuccessful] = useState(false);
    const [isProfileVisible, setProfileVisible] = useState(false);
    const [userData, setUserData] = useState(null);

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();

        const loginData = {
            email: email,
            password: password,
        };

        try {
            const response = await fetch("https://localhost:7001/api/Auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const data = await response.json();
                setUserData(data.user);
                console.log('data', data)
                const token = data.token;


                localStorage.setItem("authToken", token);
                console.log('login token',token)

                // document.cookie = `authToken=${token}; path=/`;

                setLoginSuccessful(true);
            } else {
                const errorData = await response.json();
                console.error("Login failed:", errorData.message);
                setLoginSuccessful(false);
            }
        } catch (error) {
            console.error("An error occurred:", error);
            setLoginSuccessful(false);
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {/* Show the success modal if the login was successful */}
            {isLoginSuccessful && (
                <div className="success-modal">
                    <p>Urime! Jeni identifikuar me sukses!</p>
                    <button onClick={() => setLoginSuccessful(false)}>OK</button>

                    {/* Show the profile modal button */}
                    <Link to="/profile">
                        <button onClick={() => setProfileVisible(true)}>Profile</button>
                    </Link>
                </div>
            )}

            {/* Show the profile modal when the profile button is clicked */}
            {isProfileVisible && <ProfileModal />}
        </div>
    );
}

export default Login;