import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import NavMobile from '../../components/NavMobile/NavMobile';
import styles from './ProfilePage.module.scss';

function ProfilePage({ user }) {
  const [parents, setParents] = useState([]);

  useEffect(() => {
    // Store user data in localStorage
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }

    // Fetch parents if the user is a teacher
    const fetchParents = async () => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      const currentUser = user || storedUser;

      if (currentUser.role === "teacher") {
        try {
          const response = await fetch('/api/parents');
          const data = await response.json();
          setParents(data);
        } catch (error) {
          console.error('Failed to fetch parents:', error);
        }
      }
    };

    fetchParents();
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

            {/* Step 3: Render the parents' information in a table */}
            <h2>Parents Information</h2>
            <table>
              <thead>
                <tr>
                  <th className={styles.header}>Student Name</th>
                  <th className={styles.header}>Guardian 1 Name</th>
                  <th className={styles.header}>Guardian 1 Email</th>
                  <th className={styles.header}>Guardian 1 Phone</th>
                  <th className={styles.header}>Guardian 2 Name</th>
                  <th className={styles.header}>Guardian 2 Email</th>
                  <th className={styles.header}>Guardian 2 Phone</th>
                  <th className={styles.header}>Room Parent</th>
                  <th className={styles.header}>Transportation</th>
                  <th className={styles.header}>Car Tag Number</th>
                  <th className={styles.header}>Allergies</th>
                  <th className={styles.header}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {parents.map((parent) => (
                  <tr key={parent._id}>
                    <td className={styles.student}>{parent.studentFirstName} {parent.studentLastName}</td>
                    <td>{parent.guardOneFirstName} {parent.guardOneLastName}</td>
                    <td>{parent.guardOneEmail}</td>
                    <td>{parent.guardOnePhone}</td>
                    <td>{parent.guardTwoFirstName} {parent.guardTwoLastName}</td>
                    <td>{parent.guardTwoEmail || 'N/A'}</td>
                    <td>{parent.guardTwoPhone || 'N/A'}</td>
                    <td className={parent.roomParent === true ? styles.roomParent : ''}>{parent.roomParent === true ? "Yes" : "No"}</td>
                    <td>{parent.transportation || 'N/A'}</td>
                    <td>{parent.carTagNumber || 'N/A'}</td>
                    <td>{parent.allergies || 'N/A'}</td>
                    <td className={styles.notes}>{parent.notes || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>{currentUser.studentFirstName}</p>
        )}
      </div>
    </>
  );
}

export default ProfilePage;
