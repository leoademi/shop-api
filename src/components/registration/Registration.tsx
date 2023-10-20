import React, {FormEvent, useState} from 'react';
import './Registration.scss';
import { useNavigate } from 'react-router-dom';
function Registration() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        emri: '',
        mbiemri: '',
        dateLindja: '',
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
            emri: formData.emri,
            mbiemri: formData.mbiemri,
            dateLindja: formData.dateLindja,
            email: formData.email,
            password: formData.password,
        };

        try {
            const response = await fetch("https://localhost:7001/api/Auth/register", {
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
                    <label>Emri:</label>
                    <input
                        type="text"
                        className="registration-input"
                        placeholder="Emri"
                        name="emri"
                        value={formData.emri}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Mbiemri:</label>
                    <input
                        type="text"
                        name="mbiemri"
                        placeholder="Mbiemri"
                        className="registration-input"
                        value={formData.mbiemri}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Ditelindja:</label>
                    <input
                        type="date"
                        name="dateLindja"
                        placeholder="Ditelindja"
                        className="registration-input"
                        value={formData.dateLindja}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
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
                    <label>Password:</label>
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