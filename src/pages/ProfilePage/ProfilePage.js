import { useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import NavMobile from '../../components/NavMobile/NavMobile';
import styles from './ProfilePage.module.scss';

function ProfilePage({ user }) {
  useEffect(() => {
    // Store user data in localStorage
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  // Retrieve user data from localStorage if it was cleared (e.g., on page refresh)
  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (!user && !storedUser) {
    return <p>Loading...</p>; // Show a loading state or redirect to login if needed
  }

  const currentUser = user || storedUser;

  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.profile}>
        {currentUser.role === "teacher" ? (
          <div>
            <h1>Welcome, {currentUser.firstName} {currentUser.lastName}</h1>
            <p>Email: {currentUser.email}</p>
            {/* Add more user details here */}
          </div>
        ) : (
          <p>{currentUser.studentFirstName}</p>
        )}
      </div>
    </>
  );
}

export default ProfilePage;
