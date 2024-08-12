import { useState } from 'react'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import AuthPage from './pages/AuthPage/AuthPage'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import { getUser, getToken } from './utilities/users-service'


export default function App(){
    const [user, setUser] = useState(getUser());
    const [users, setUsers] = useState([]);
    const [token, setToken] = useState(getToken())

    return(
        <>
            <div className={styles.App}>
                <Routes>
                    <Route
                    path='/'
                    element= {<AuthPage user={user} setUser={setUser} />}>
                    </Route>

                    <Route 
                    path='/home' 
                    element= {<HomePage />}>
                    </Route>

                    <Route 
                    path='/about' 
                    element= {<AboutPage />}>
                    </Route>

                    <Route
                    path='/contact'
                    element= {<ContactPage />}>
                    </Route>
:
                </Routes>
            </div>
        </>
    )
}