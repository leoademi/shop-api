import React, {FormEvent, useContext, useState} from 'react';
import './Login.scss';
import ProfileModal from "../profilemodal/ProfileModal";
import {Link} from "react-router-dom";
import AuthContext from "../AuthStore";

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
    const [userID, setUserId] = useState(null);

    const { login } = useContext(AuthContext);

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();

        const loginData = {
            email: email,
            password: password,
        };

        try {
            const response = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const data = await response.json();

                setUserData(data.user);

                const token = data.data.api_token;

                setUserId(data.data.id);

                localStorage.setItem("authToken", token);

                setLoginSuccessful(true);
                login();
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
                <button  className="button-login" type="submit">Login</button>
            </form>
            {/* Show the success modal if the login was successful */}
            {isLoginSuccessful && (
                <div className="success-modal">
                    <p>Urime! Jeni identifikuar me sukses!</p>
                    <button className="button-login" onClick={() => setLoginSuccessful(false)}>OK</button>
                    {/* Show the profile modal button */}
                    <Link to={`/profile/${userID}`} state={{userID}}>
                        <button className="button-login" onClick={() => setProfileVisible(true)}>Profile</button>
                    </Link>
                </div>
            )}

            {/* Show the profile modal when the profile button is clicked */}
            {isProfileVisible && <ProfileModal />}
        </div>
    );
}

export default Login;