import React, {FormEvent, useState} from 'react';
import './Registration.scss';
import { useNavigate } from 'react-router-dom';
function Registration() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        birthdate: '',
        password: '',
    });

    const [isRegistered, setIsRegistered] = useState(false);
    const [showProfileModal] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const registrationData = {
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            birthdate: formData.birthdate,
            password: formData.password,
        };

        try {
            const response = await fetch("http://localhost:8000/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Registration was successful
                console.log('response registration',response)
                setIsRegistered(true);
            } else {
                // Registration failed
                console.error("Registration failed");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    const handleRedirectToLogin = () => {
        navigate('/login');// Replace '/login' with the actual URL of your login page.
    };

    return (
        <div className="registration-form">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        className="registration-input"
                        placeholder="Emri"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Mbiemri"
                        className="registration-input"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="date"
                        name="birthdate"
                        placeholder="Ditelindja"
                        className="registration-input"
                        value={formData.birthdate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="registration-input"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="registration-input"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="registration-button">
                    Register
                </button>
            </form>

            {isRegistered && (
                <div className="success-modal">
                    <p>Urime! Jeni regjistruar me sukses!</p>
                    <button onClick={handleRedirectToLogin}>OK</button>
                </div>

            )}
        </div>
    );
}

export default Registration;