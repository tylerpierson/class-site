import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Register.module.scss'; // Import your CSS module
import { useNavigate } from "react-router-dom";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const TEACHER_REGISTER_URL = '/api/users/';
const PARENT_REGISTER_URL = '/api/parents/';

const Register = ({ toggleLoginForm, setUser, setSuccessMsg }) => {
    const navigate = useNavigate();

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const roleRef = useRef();
    const studentIdRef = useRef();
    const studentIdsRef = useRef(); // Ref for student IDs input
    const errRef = useRef();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('parent');
    const [studentId, setStudentId] = useState('');
    const [studentIds, setStudentIds] = useState(''); // State for student IDs

    // New state fields
    const [studentFirstName, setStudentFirstName] = useState('');
    const [studentLastName, setStudentLastName] = useState('');
    const [guardOneFirstName, setGuardOneFirstName] = useState('');
    const [guardOneLastName, setGuardOneLastName] = useState('');
    const [guardOneEmail, setGuardOneEmail] = useState('');
    const [guardOnePhone, setGuardOnePhone] = useState('');
    const [guardTwoFirstName, setGuardTwoFirstName] = useState('');
    const [guardTwoLastName, setGuardTwoLastName] = useState('');
    const [guardTwoEmail, setGuardTwoEmail] = useState('');
    const [guardTwoPhone, setGuardTwoPhone] = useState('');
    const [roomParent, setRoomParent] = useState(false);
    const [transportation, setTransportation] = useState('Car');
    const [carTagNumber, setCarTagNumber] = useState('');
    const [likes, setLikes] = useState('');
    const [dislikes, setDislikes] = useState('');
    const [allergies, setAllergies] = useState('');
    const [notes, setNotes] = useState('');

    const [validFirstName, setValidFirstName] = useState(false);
    const [validLastName, setValidLastName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validConfirmPassword, setValidConfirmPassword] = useState(false);

    const [validStudentId, setValidStudentId] = useState(false);
    const [validStudentFirstName, setValidStudentFirstName] = useState(false);
    const [validStudentLastName, setValidStudentLastName] = useState(false);
    const [validGuardOneFirstName, setValidGuardOneFirstName] = useState(false);
    const [validGuardOneLastName, setValidGuardOneLastName] = useState(false);
    const [validGuardOneEmail, setValidGuardOneEmail] = useState(false);
    const [validGuardOnePhone, setValidGuardOnePhone] = useState(false);
    const [validGuardTwoFirstName, setValidGuardTwoFirstName] = useState(true);
    const [validGuardTwoLastName, setValidGuardTwoLastName] = useState(true);
    const [validGuardTwoEmail, setValidGuardTwoEmail] = useState(true);
    const [validGuardTwoPhone, setValidGuardTwoPhone] = useState(true);
    const [validCarTagNumber, setValidCarTagNumber] = useState(true);
    const [validLikes, setValidLikes] = useState(true);
    const [validDislikes, setValidDislikes] = useState(true);
    const [validAllergies, setValidAllergies] = useState(true);
    const [validNotes, setValidNotes] = useState(true);

    const [firstNameFocus, setFirstNameFocus] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
    const [roleFocus, setRoleFocus] = useState(false);
    const [studentIdFocus, setStudentIdFocus] = useState(false);
    const [studentIdsFocus, setStudentIdsFocus] = useState(false); // Focus state for student IDs

    const [studentFirstNameFocus, setStudentFirstNameFocus] = useState(false);
    const [studentLastNameFocus, setStudentLastNameFocus] = useState(false);
    const [guardOneFirstNameFocus, setGuardOneFirstNameFocus] = useState(false);
    const [guardOneLastNameFocus, setGuardOneLastNameFocus] = useState(false);
    const [guardOneEmailFocus, setGuardOneEmailFocus] = useState(false);
    const [guardOnePhoneFocus, setGuardOnePhoneFocus] = useState(false);
    const [guardTwoFirstNameFocus, setGuardTwoFirstNameFocus] = useState(false);
    const [guardTwoLastNameFocus, setGuardTwoLastNameFocus] = useState(false);
    const [guardTwoEmailFocus, setGuardTwoEmailFocus] = useState(false);
    const [guardTwoPhoneFocus, setGuardTwoPhoneFocus] = useState(false);
    const [carTagNumberFocus, setCarTagNumberFocus] = useState(false);
    const [likesFocus, setLikesFocus] = useState(false);
    const [dislikesFocus, setDislikesFocus] = useState(false);
    const [allergiesFocus, setAllergiesFocus] = useState(false);
    const [notesFocus, setNotesFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        firstNameRef.current.focus();
    }, []);

    useEffect(() => {
        setValidFirstName(firstName.trim() !== '');
    }, [firstName]);

    useEffect(() => {
        setValidLastName(lastName.trim() !== '');
    }, [lastName]);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
        setValidStudentId(studentId.trim() !== '');
    }, [studentId]);

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
    }, [password]);

    useEffect(() => {
        setValidConfirmPassword(confirmPassword === password);
    }, [confirmPassword, password]);

    // Add validation for new inputs
    useEffect(() => {
        setValidStudentFirstName(studentFirstName.trim() !== '');
    }, [studentFirstName]);

    useEffect(() => {
        setValidStudentLastName(studentLastName.trim() !== '');
    }, [studentLastName]);

    useEffect(() => {
        setValidGuardOneFirstName(guardOneFirstName.trim() !== '');
    }, [guardOneFirstName]);

    useEffect(() => {
        setValidGuardOneLastName(guardOneLastName.trim() !== '');
    }, [guardOneLastName]);

    useEffect(() => {
        setValidGuardOneEmail(EMAIL_REGEX.test(guardOneEmail));
    }, [guardOneEmail]);

    useEffect(() => {
        setValidGuardOnePhone(guardOnePhone.trim() !== '');
    }, [guardOnePhone]);

    useEffect(() => {
        setValidGuardTwoFirstName(guardTwoFirstName.trim() !== '');
    }, [guardTwoFirstName]);

    useEffect(() => {
        setValidGuardTwoLastName(guardTwoLastName.trim() !== '');
    }, [guardTwoLastName]);

    useEffect(() => {
        setValidGuardTwoEmail(EMAIL_REGEX.test(guardTwoEmail));
    }, [guardTwoEmail]);

    useEffect(() => {
        setValidGuardTwoPhone(guardTwoPhone.trim() !== '');
    }, [guardTwoPhone]);

    useEffect(() => {
        setValidCarTagNumber(carTagNumber.trim() !== '');
    }, [carTagNumber]);

    useEffect(() => {
        setValidLikes(likes.trim() !== '');
    }, [likes]);

    useEffect(() => {
        setValidDislikes(dislikes.trim() !== '');
    }, [dislikes]);

    useEffect(() => {
        setValidAllergies(allergies.trim() !== '');
    }, [allergies]);

    useEffect(() => {
        setValidNotes(notes.trim() !== '');
    }, [notes]);

    useEffect(() => {
        setErrMsg('');
    }, [firstName, lastName, email, password, confirmPassword, role, studentIds, studentFirstName, studentLastName, guardOneFirstName, guardOneLastName, guardOneEmail, guardOnePhone, guardTwoFirstName, guardTwoLastName, guardTwoEmail, guardTwoPhone, carTagNumber, likes, dislikes, allergies, notes]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Adjust validation based on the role
        const isValid =
            role === 'teacher'
                ? validFirstName && validLastName && validEmail && validPassword && validConfirmPassword
                : validStudentId && validPassword && validConfirmPassword;
    
        if (!isValid) {
            setErrMsg("Invalid Entry");
            return;
        }
    
        // Determine the correct URL based on the selected role
        const url = role === 'teacher' ? TEACHER_REGISTER_URL : PARENT_REGISTER_URL;
    
        const body = role === 'teacher'
            ? {
                  firstName,
                  lastName,
                  email,
                  password,
                  role,
                  studentIds: studentIds.split(',').map(id => id.trim()) // Process student IDs
              }
            : {
                studentId,
                password,
                role,
                studentFirstName,
                studentLastName,
                guardOneFirstName,
                guardOneLastName,
                guardOneEmail,
                guardOnePhone,
                guardTwoFirstName,
                guardTwoLastName,
                guardTwoEmail,
                guardTwoPhone,
                roomParent,
                transportation,
                carTagNumber,
                likes,
                dislikes,
                allergies,
                notes
              };
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
    
            if (!response.ok) {
                throw new Error('Registration Failed');
            }
    
            const responseData = await response.json();
    
            localStorage.setItem('token', responseData.token);
    
            const userData = {
                firstName: role === 'teacher' ? firstName : '',
                lastName: role === 'teacher' ? lastName : '',
                email: role === 'teacher' ? email : '',
                role
            };
            setUser(userData);
    
            // Reset the form fields
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setRole('parent');
            setStudentIds('');
            setStudentId('');
    
            setSuccessMsg('Registration Successful');
    
            toggleLoginForm();
        } catch (err) {
            setErrMsg(err.message || 'Registration Failed');
            errRef.current.focus();
        }
    };    

    return (
        <div className={styles.Register}>
        <>
            {success ? (
                <section className={styles.section}>
                    <h1>Success!</h1>
                    <p>
                        <a className={styles.a} href="#" onClick={toggleLoginForm}>Sign In</a>
                    </p>
                </section>
            ) : (
                <section className={styles.section}>
                    <p ref={errRef} className={errMsg ? styles.errmsg : styles.offscreen} aria-live="assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        {/* Role */}
                        <div className={styles.roleContainer}>
                            <label htmlFor="role" className={styles.label}>
                                Role:
                                <FontAwesomeIcon icon={faCheck} className={styles.valid} />
                            </label>
                            <select
                                id="role"
                                ref={roleRef}
                                value={role}
                                className={`${styles.select} ${styles.input}`}
                                onFocus={() => setRoleFocus(true)}
                                onBlur={() => setRoleFocus(false)}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="parent">Parent</option>
                                <option value="teacher">Teacher</option>
                            </select>
                            <p id="roleNote" className={roleFocus ? styles.instructions : styles.offscreen}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Select your role.
                            </p>
                        </div>

                        {/* Student ID */}
                        {role === 'parent' && (
                            <div className={styles.studentIdContainer}>
                                <label htmlFor="studentId" className={styles.label}>
                                    Student ID:
                                </label>
                                <input
                                    type="text"
                                    id="studentId"
                                    ref={studentIdRef}
                                    onChange={(e) => setStudentId(e.target.value)}
                                    value={studentId}
                                    aria-invalid={validStudentId ? "false" : "true"}
                                    className={styles.input}
                                    onFocus={() => setStudentIdFocus(true)}
                                    onBlur={() => setStudentIdFocus(false)}
                                />
                                <p id="studentIdNote" className={studentIdFocus && !validStudentId ? styles.instructions : styles.offscreen}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Enter student ID.
                                </p>
                            </div>
                        )}
                        
                        {/* First Name */}
                        <div className={styles.nameContainer}>
                            <div className={styles.fName}>
                                <label htmlFor="firstName" className={styles.label}>
                                    First Name:
                                    <FontAwesomeIcon icon={faCheck} className={validFirstName ? styles.valid : styles.hide} />
                                    <FontAwesomeIcon icon={faTimes} className={validFirstName || !firstName ? styles.hide : styles.invalid} />
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    ref={firstNameRef}
                                    autoComplete="off"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName}
                                    required
                                    aria-invalid={validFirstName ? "false" : "true"}
                                    className={styles.input}
                                    onFocus={() => setFirstNameFocus(true)}
                                    onBlur={() => setFirstNameFocus(false)}
                                    disabled={role === 'parent'}
                                />
                            </div>
                            <div className={styles.lName}>
                                {/* Last Name */}
                                <label htmlFor="lastName" className={styles.label}>
                                    Last Name:
                                    <FontAwesomeIcon icon={faCheck} className={validLastName ? styles.valid : styles.hide} />
                                    <FontAwesomeIcon icon={faTimes} className={validLastName || !lastName ? styles.hide : styles.invalid} />
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    ref={lastNameRef}
                                    autoComplete="off"
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                    required
                                    aria-invalid={validLastName ? "false" : "true"}
                                    className={styles.input}
                                    onFocus={() => setLastNameFocus(true)}
                                    onBlur={() => setLastNameFocus(false)}
                                    disabled={role === 'parent'} // Disable if role is 'parent'
                                />
                            </div>
                        </div>

                        <div>
                            <p id="firstNameNote" className={firstNameFocus && !validFirstName ? styles.instructions : styles.offscreen}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Please enter your first name.
                            </p>
                            <p id="lastNameNote" className={lastNameFocus && !validLastName ? styles.instructions : styles.offscreen}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Please enter your last name.
                            </p>
                        </div>

                        {role === 'teacher' && (
                        <div className={styles.emailContainer}>
                            {/* Email */}
                            <label htmlFor="email" className={styles.label}>
                                Email:
                                <FontAwesomeIcon icon={faCheck} className={validEmail ? styles.valid : styles.hide} />
                                <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? styles.hide : styles.invalid} />
                            </label>
                            <input
                                type="email"
                                id="email"
                                ref={emailRef}
                                autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                                aria-invalid={validEmail ? "false" : "true"}
                                className={styles.input}
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                                disabled={role === 'parent'} // Disable if role is 'parent'
                            />
                            <p id="emailNote" className={emailFocus && !validEmail ? styles.instructions : styles.offscreen}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Please enter a valid email address.
                            </p>
                        </div>
                        )}

                        {/* Student IDs */}
                        {role === 'teacher' && (
                            <div className={styles.studentIdsContainer}>
                                <label htmlFor="studentIds" className={styles.label}>
                                    Student IDs:
                                </label>
                                <input
                                    type="text"
                                    id="studentIds"
                                    ref={studentIdsRef}
                                    onChange={(e) => setStudentIds(e.target.value)}
                                    value={studentIds}
                                    aria-invalid={validStudentId ? "false" : "true"}
                                    className={styles.input}
                                    onFocus={() => setStudentIdsFocus(true)}
                                    onBlur={() => setStudentIdsFocus(false)}
                                />
                                <p id="studentIdsNote" className={studentIdsFocus && !validStudentId ? styles.instructions : styles.offscreen}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Enter comma-separated student IDs.
                                </p>
                            </div>
                        )}

                        {role === 'parent' && (    
                            <>
                            <div className={styles.nameContainer}>
                                <label htmlFor="studentFirstName" className={styles.label}>
                                    Student First Name:
                                    <input
                                        type="text"
                                        id="studentFirstName"
                                        className={styles.input}
                                        onChange={(e) => setStudentFirstName(e.target.value)}
                                        onFocus={() => setStudentFirstNameFocus(true)}
                                        onBlur={() => setStudentFirstNameFocus(false)}
                                        value={studentFirstName}
                                    />
                                    {studentFirstNameFocus && !validStudentFirstName && <FontAwesomeIcon icon={faInfoCircle} />}
                                </label>

                                <label htmlFor="studentLastName" className={styles.label}>
                                    Student Last Name:
                                    <input
                                        type="text"
                                        id="studentLastName"
                                        className={styles.input}
                                        onChange={(e) => setStudentLastName(e.target.value)}
                                        onFocus={() => setStudentLastNameFocus(true)}
                                        onBlur={() => setStudentLastNameFocus(false)}
                                        value={studentLastName}
                                    />
                                    {studentLastNameFocus && !validStudentLastName && <FontAwesomeIcon icon={faInfoCircle} />}
                                </label>
                            </div>

                            <div className={styles.nameContainer}>
                                <label htmlFor="guardOneFirstName" className={styles.label}>
                                    Guardian One First Name:
                                    <input
                                        type="text"
                                        id="guardOneFirstName"
                                        className={styles.input}
                                        onChange={(e) => setGuardOneFirstName(e.target.value)}
                                        onFocus={() => setGuardOneFirstNameFocus(true)}
                                        onBlur={() => setGuardOneFirstNameFocus(false)}
                                        value={guardOneFirstName}
                                    />
                                    {guardOneFirstNameFocus && !validGuardOneFirstName && <FontAwesomeIcon icon={faInfoCircle} />}
                                </label>

                                <label htmlFor="guardOneLastName" className={styles.label}>
                                    Guardian One Last Name:
                                    <input
                                        type="text"
                                        id="guardOneLastName"
                                        className={styles.input}
                                        onChange={(e) => setGuardOneLastName(e.target.value)}
                                        onFocus={() => setGuardOneLastNameFocus(true)}
                                        onBlur={() => setGuardOneLastNameFocus(false)}
                                        value={guardOneLastName}
                                    />
                                    {guardOneLastNameFocus && !validGuardOneLastName && <FontAwesomeIcon icon={faInfoCircle} />}
                                </label>
                            </div>

                            <div className={styles.nameContainer}>
                                <label htmlFor="guardOneEmail" className={styles.label}>
                                    Guardian One Email:
                                    <input
                                        type="email"
                                        id="guardOneEmail"
                                        className={styles.input}
                                        onChange={(e) => setGuardOneEmail(e.target.value)}
                                        onFocus={() => setGuardOneEmailFocus(true)}
                                        onBlur={() => setGuardOneEmailFocus(false)}
                                        value={guardOneEmail}
                                    />
                                    {guardOneEmailFocus && !validGuardOneEmail && <FontAwesomeIcon icon={faInfoCircle} />}
                                </label>

                                <label htmlFor="guardOnePhone" className={styles.label}>
                                    Guardian One Phone:
                                    <input
                                        type="text"
                                        id="guardOnePhone"
                                        className={styles.input}
                                        onChange={(e) => setGuardOnePhone(e.target.value)}
                                        onFocus={() => setGuardOnePhoneFocus(true)}
                                        onBlur={() => setGuardOnePhoneFocus(false)}
                                        value={guardOnePhone}
                                    />
                                    {guardOnePhoneFocus && !validGuardOnePhone && <FontAwesomeIcon icon={faInfoCircle} />}
                                </label>
                            </div>

                            <div className={styles.nameContainer}>
                                <label htmlFor="guardTwoFirstName" className={styles.label}>
                                    Guardian Two First Name (optional):
                                    <input
                                        type="text"
                                        id="guardTwoFirstName"
                                        className={styles.input}
                                        onChange={(e) => setGuardTwoFirstName(e.target.value)}
                                        onFocus={() => setGuardTwoFirstNameFocus(true)}
                                        onBlur={() => setGuardTwoFirstNameFocus(false)}
                                        value={guardTwoFirstName}
                                    />
                                    {guardTwoFirstNameFocus && !validGuardTwoFirstName && <FontAwesomeIcon icon={faInfoCircle} />}
                                </label>

                                <label htmlFor="guardTwoLastName" className={styles.label}>
                                    Guardian Two Last Name (optional):
                                    <input
                                        type="text"
                                        id="guardTwoLastName"
                                        className={styles.input}
                                        onChange={(e) => setGuardTwoLastName(e.target.value)}
                                        onFocus={() => setGuardTwoLastNameFocus(true)}
                                        onBlur={() => setGuardTwoLastNameFocus(false)}
                                        value={guardTwoLastName}
                                    />
                                    {guardTwoLastNameFocus && !validGuardTwoLastName && <FontAwesomeIcon icon={faInfoCircle} />}
                                </label>
                            </div>

                            <div className={styles.nameContainer}>
                                <label htmlFor="guardTwoEmail" className={styles.label}>
                                    Guardian Two Email (optional):
                                    <input
                                        type="email"
                                        id="guardTwoEmail"
                                        className={styles.input}
                                        onChange={(e) => setGuardTwoEmail(e.target.value)}
                                        onFocus={() => setGuardTwoEmailFocus(true)}
                                        onBlur={() => setGuardTwoEmailFocus(false)}
                                        value={guardTwoEmail}
                                    />
                                    {guardTwoEmailFocus && !validGuardTwoEmail && <FontAwesomeIcon icon={faInfoCircle} />}
                                </label>

                                <label htmlFor="guardTwoPhone" className={styles.label}>
                                    Guardian Two Phone (optional):
                                    <input
                                        type="text"
                                        id="guardTwoPhone"
                                        className={styles.input}
                                        onChange={(e) => setGuardTwoPhone(e.target.value)}
                                        onFocus={() => setGuardTwoPhoneFocus(true)}
                                        onBlur={() => setGuardTwoPhoneFocus(false)}
                                        value={guardTwoPhone}
                                    />
                                    {guardTwoPhoneFocus && !validGuardTwoPhone && <FontAwesomeIcon icon={faInfoCircle} />}
                                </label>
                            </div>

                            <div className={styles.nameContainer}>
                                <label htmlFor="transportation" className={styles.label}>
                                    Transportation:
                                    <select
                                        id="transportation"
                                        className={styles.input}
                                        onChange={(e) => setTransportation(e.target.value)}
                                        value={transportation}
                                    >
                                        <option value="car">Car</option>
                                        <option value="bus">Bus</option>
                                        <option value="walker home">Walker Home</option>
                                        <option value="walker go">Walker Go</option>
                                        <option value="right at school">Right At School</option>
                                    </select>
                                </label>

                                <label htmlFor="carTagNumber" className={styles.label}>
                                    Car Tag Number (N/A if Unknown):
                                    <input
                                        type="text"
                                        id="carTagNumber"
                                        className={styles.input}
                                        onChange={(e) => setCarTagNumber(e.target.value)}
                                        onFocus={() => setCarTagNumberFocus(true)}
                                        onBlur={() => setCarTagNumberFocus(false)}
                                        value={carTagNumber}
                                    />
                                    {carTagNumberFocus && !validCarTagNumber && <FontAwesomeIcon icon={faInfoCircle} />}
                                </label>
                            </div>
                        <label htmlFor="roomParent" className={styles.label}>
                            Room Parent:
                            <input
                                type="checkbox"
                                id="roomParent"
                                onChange={() => setRoomParent(!roomParent)}
                                checked={roomParent}
                            />
                        </label>

                        <div className={styles.nameContainer}>
                                <label htmlFor="likes" className={styles.label}>
                                    Student Likes (Optional):
                                    <input
                                        type="text"
                                        id="likes"
                                        className={styles.input}
                                        onChange={(e) => setLikes(e.target.value)}
                                        onFocus={() => setLikesFocus(true)}
                                        onBlur={() => setLikesFocus(false)}
                                        value={likes}
                                    />
                                    {likesFocus && !validLikes && <FontAwesomeIcon icon={faInfoCircle} />}
                                </label>

                                <label htmlFor="dislikes" className={styles.label}>
                                    Student Dislikes (Optional):
                                    <input
                                        type="text"
                                        id="dislikes"
                                        className={styles.input}
                                        onChange={(e) => setDislikes(e.target.value)}
                                        onFocus={() => setDislikesFocus(true)}
                                        onBlur={() => setDislikesFocus(false)}
                                        value={dislikes}
                                    />
                                    {dislikesFocus && !validDislikes && <FontAwesomeIcon icon={faInfoCircle} />}
                                </label>
                            </div>

                            <div className={styles.nameContainer}>
                                <label htmlFor="allergies" className={styles.label}>
                                    Student Allergies (Optional):
                                    <input
                                        type="text"
                                        id="allergies"
                                        className={styles.input}
                                        onChange={(e) => setAllergies(e.target.value)}
                                        onFocus={() => setAllergiesFocus(true)}
                                        onBlur={() => setAllergiesFocus(false)}
                                        value={allergies}
                                    />
                                    {allergiesFocus && !validAllergies && <FontAwesomeIcon icon={faInfoCircle} />}
                                </label>

                                <label htmlFor="notes" className={styles.label}>
                                    Anything else you'd like me to know (Optional):
                                    <input
                                        type="text"
                                        id="notes"
                                        className={styles.input}
                                        onChange={(e) => setNotes(e.target.value)}
                                        onFocus={() => setNotesFocus(true)}
                                        onBlur={() => setNotesFocus(false)}
                                        value={notes}
                                    />
                                    {notesFocus && !validNotes && <FontAwesomeIcon icon={faInfoCircle} />}
                                </label>
                            </div>
                        </>
                        )}
                        <div className={styles.passwordContainer}>
                            {/* Password */}
                            <label htmlFor="password" className={styles.label}>
                                Password:
                                <FontAwesomeIcon icon={faCheck} className={validPassword ? styles.valid : styles.hide} />
                                <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? styles.hide : styles.invalid} />
                            </label>
                            <input
                                type="password"
                                id="password"
                                ref={passwordRef}
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                                aria-invalid={validPassword ? "false" : "true"}
                                className={styles.input}
                                onFocus={() => setPasswordFocus(true)}
                                onBlur={() => setPasswordFocus(false)}
                            />
                            <p id="passwordNote" className={passwordFocus && !validPassword ? styles.instructions : styles.offscreen}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Password must be 8-24 characters long and include uppercase, lowercase, a number, and a special character.
                            </p>
                        </div>
                        <div className={styles.confirmPasswordContainer}>
                            {/* Confirm Password */}
                            <label htmlFor="confirmPassword" className={styles.label}>
                                Confirm Password:
                                <FontAwesomeIcon icon={faCheck} className={validConfirmPassword ? styles.valid : styles.hide} />
                                <FontAwesomeIcon icon={faTimes} className={validConfirmPassword || !confirmPassword ? styles.hide : styles.invalid} />
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                ref={confirmPasswordRef}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                                required
                                aria-invalid={validConfirmPassword ? "false" : "true"}
                                className={styles.input}
                                onFocus={() => setConfirmPasswordFocus(true)}
                                onBlur={() => setConfirmPasswordFocus(false)}
                            />
                            <p id="confirmPasswordNote" className={confirmPasswordFocus && !validConfirmPassword ? styles.instructions : styles.offscreen}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Passwords must match.
                            </p>
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={role === 'parent' 
                                ? !validStudentId || !validPassword || !validConfirmPassword || !validStudentFirstName || !validStudentLastName || !validGuardOneFirstName || !validGuardOneLastName || !validGuardOneEmail || !validGuardOnePhone || !validCarTagNumber
                                : !validFirstName || !validLastName || !validEmail || !validPassword || !validConfirmPassword}
                        >
                            Register
                        </button>
                    </form>
                    <p>
                        Already registered?
                        <br />
                        <span className={styles.line}>
                            <a href="#" onClick={toggleLoginForm}>Sign In</a>
                        </span>
                    </p>
                </section>
            )}
        </>
        </div>
    );
};

export default Register;
