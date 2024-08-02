import styles from './ContactPage.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import NavMobile from '../../components/NavMobile/NavMobile';

export default function ContactPage() {
    return (
        <>
            <NavBar />
            <NavMobile />
            <div className={styles.ContactPage}>
                <div className={styles.InfoContainer}>
                    <h1 className={styles.header}>Contact Me Today!</h1>
                    <p className={styles.contactInfo}>
                        If you have any questions or would like to get in touch, please send me an email at 
                        <a className={styles.link} href="mailto:tpierson@g.dentonisd.org"> tpierson@g.dentonisd.org</a>.
                    </p>
                    <div className={styles.emailInstructions}>
                        <p className={styles.contactInfo}>
                            Please include the following information in your email:
                        </p>
                        <ul className={styles.contactInfo}>
                            <li className={styles.li}>Your first and last name</li>
                            <li className={styles.li}>Your child's first and last name</li>
                        </ul>
                    </div>
                    <p className={styles.contactInfo}>If you're feeling wild and would like to contribute to the class to make it a more welcoming environment, please visit my <a className={styles.link} href="https://www.amazon.com/hz/wishlist/ls/1SEOMBBTU8MM9?ref_=wl_share">Amazon Wishlist</a></p>
                </div>
            </div>
        </>
    );
}
