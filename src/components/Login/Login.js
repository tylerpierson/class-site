import { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Login.module.scss';

const LOGIN_URL_USER = '/api/users/login';
const LOGIN_URL_PARENT = '/api/parents/login';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = ({ toggleLoginForm, setUser }) => {
    const navigateTo = useNavigate();
    const emailRef = useRef();
    const studentIdRef = useRef();
    const passwordRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, studentId, password]);

    const handleSubmitUser = async (e) => {
        e.preventDefault();
    
        if (!EMAIL_REGEX.test(email)) {
            setErrMsg('Please enter a valid email address.');
            return;
        }
    
        try {
            const response = await fetch(LOGIN_URL_USER, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include',
            });
    
            if (!response.ok) {
                throw new Error('Login Failed');
            }
    
            const responseData = await response.json();
            const accessToken = responseData?.token;
    
            // Save the token in localStorage
            localStorage.setItem('token', accessToken);
    
            // Fetch user data based on email
            const userResponse = await fetch(`/api/users?email=${email}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
    
            if (!userResponse.ok) {
                throw new Error('Failed to fetch user data');
            }
    
            const userArray = await userResponse.json();
            console.log('Fetched user array:', userArray); // Debug log
    
            if (userArray.length > 0) {
                const user = userArray[0]; // Access the first user object
                console.log('Setting user:', user); // Debug log
                setUser(user);
    
                // Redirect to the user's profile page
                navigateTo(`/${user._id}`);
                setSuccess(true);
            } else {
                throw new Error('User not found');
            }
        } catch (err) {
            console.error(err); // Debug log
            setErrMsg(err.message || 'Login Failed');
            errRef.current.focus();
        }
    };
    
    const handleSubmitParent = async (e) => {
        e.preventDefault();
    
        if (!studentId) {
            setErrMsg('Please enter a student ID.');
            return;
        }
    
        try {
            const response = await fetch(LOGIN_URL_PARENT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ studentId, password }),
                credentials: 'include',
            });
    
            if (!response.ok) {
                throw new Error('Login Failed');
            }
    
            const responseData = await response.json();
            const accessToken = responseData?.token;
    
            // Save the token in localStorage
            localStorage.setItem('token', accessToken);
    
            // Fetch user data based on student ID
            const userResponse = await fetch(`/api/parents?studentId=${studentId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
    
            if (!userResponse.ok) {
                throw new Error('Failed to fetch user data');
            }
    
            const userArray = await userResponse.json();
            console.log('Fetched user array:', userArray); // Debug log
    
            if (userArray.length > 0) {
                const user = userArray[0]; // Access the first user object
                console.log('Setting user:', user); // Debug log
                setUser(user);
    
                // Redirect to the user's profile page
                {user.role === "teacher" ? navigateTo(`/${user._id}`) : navigateTo(`/home`)}

            } else {
                throw new Error('Parent not found');
            }
        } catch (err) {
            console.error(err); // Debug log
            setErrMsg(err.message || 'Login Failed');
            errRef.current.focus();
        }
    };    

    const handleSubmit = (e) => {
        if (email) {
            handleSubmitUser(e);
        } else if (studentId) {
            handleSubmitParent(e);
        } else {
            setErrMsg('Please enter either an email or a student ID.');
            errRef.current.focus();
        }
    };

    return (
        <div className={styles.Login}>
            {success ? (
                <section className={styles.section}>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a className={styles.a} href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section className={styles.section}>
                    <p ref={errRef} className={errMsg ? styles.errmsg : styles.offscreen} aria-live="assertive">
                        {errMsg}
                    </p>
                    <h1>Sign In</h1>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label className={styles.label} htmlFor="email">(For Teachers) Email:</label>
                        <input
                            type="email"
                            id="email"
                            ref={emailRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className={styles.input}
                            disabled={studentId.length > 0} // Disable email if studentId has text
                        />
                        <label className={styles.label} htmlFor="studentId">(For Parents) Student ID:</label>
                        <input
                            type="text"
                            id="studentId"
                            ref={studentIdRef}
                            autoComplete="off"
                            onChange={(e) => setStudentId(e.target.value)}
                            value={studentId}
                            className={styles.input}
                            disabled={email.length > 0} // Disable studentId if email has text
                        />
                        <label className={styles.label} htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            ref={passwordRef}
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            className={styles.input}
                        />
                        <button className={styles.button}>Sign In</button>
                    </form>
                    <p className={styles.togglePara}>
                        Need an Account?<br />
                        <span className={styles.line} onClick={toggleLoginForm}>
                            <a className={styles.a} href="#">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </div>
    );
};

export default Login;
