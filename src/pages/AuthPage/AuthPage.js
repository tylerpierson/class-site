import { useState } from 'react';
import styles from './AuthPage.module.scss';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  const [successMsg, setSuccessMsg] = useState('');

  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>    
        <p className={styles.SuccessMsg}>{successMsg}</p>
        <main className={styles.AuthPage}>
        {showLogin ? <Login setUser={setUser} toggleLoginForm={toggleLoginForm} /> : <Register setSuccessMsg={setSuccessMsg} setUser={setUser} toggleLoginForm={toggleLoginForm} />}
        </main>
    </>
  );
}
