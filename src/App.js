import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AuthPage from './pages/AuthPage/AuthPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import styles from './App.module.scss';
import { getUser, getToken } from './utilities/users-service';

export default function App() {
    const [user, setUser] = useState(null); // Initial user state is null
    const [token, setToken] = useState(getToken());

    useEffect(() => {
        async function fetchUser() {
            const fetchedUser = await getUser();
            setUser(fetchedUser);
        }
        fetchUser();
    }, []);

    return (
        <div className={styles.App}>
            <Routes>
                <Route
                    path="/"
                    element={<AuthPage user={user} setUser={setUser} />}
                />
                <Route
                    path="/:id"
                    element={<ProfilePage user={user} setUser={setUser} />}
                />
                <Route
                    path="/home"
                    element={<HomePage />}
                />
                <Route
                    path="/about"
                    element={<AboutPage />}
                />
                <Route
                    path="/contact"
                    element={<ContactPage />}
                />
            </Routes>
        </div>
    );
}
