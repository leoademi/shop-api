import './App.css';
import {Route, Routes} from 'react-router-dom';
import ContactPage from './components/content/contact/Contact';
import Home from "./components/Home";
import Header from "./components/navbar/Header";
import Footer from "./components/footer/Footer";
import Registration from "./components/registration/Registration";
import Login from "./components/registration/login/Login";
import ProfileModal from "./components/registration/profilemodal/ProfileModal";
import AboutUs from "./components/content/about-us/AboutUs";

function App() {
    return (
        <div className="layout">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/registration" element={<Registration />} /> {/* Add the registration route */}
                <Route path="/login" element={<Login />} />
                <Route path="/profile/:userID" element={<ProfileModal />} />

                {/* Add more routes for other sections as needed */}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
