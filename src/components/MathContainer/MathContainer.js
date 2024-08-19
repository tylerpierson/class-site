import styles from './MathContainer.module.scss';

function MathContainer() {
  return (
    <div className={styles.mathContainerMain}>
        <div className={styles.mathContainerLeft}>
            <div className={styles.mathCard}>
                <h4 className={styles.mathTitle}>This weeks TEKS</h4>
                <ul className={styles.mathList}>
                <li className={styles.mathListItem}>
                    <span className={styles.span}>4.2C</span> Compare and order whole numbers to 1,000,000,000 and represent comparisons using the symbols &gt;, &lt;, or =.
                </li>
                </ul>
            </div>
            <div className={styles.mathCard}>
                <h4 className={styles.mathTitle}>Anchor Charts</h4>
                <ul className={styles.mathList}>
                    <li className={styles.mathListItem}><a target="_blank" href="https://i.ebayimg.com/images/g/UsMAAOSwlTpj8imL/s-l1200.jpg"><img className={styles.img} src="https://i.ebayimg.com/images/g/UsMAAOSwlTpj8imL/s-l1200.jpg" /></a></li>
                </ul>
            </div>
        </div>
        <div className={styles.mathContainerRight}>
            <div className={styles.mathCard}>
                <h4 className={styles.mathTitle}>I can...</h4>
                <ul className={styles.mathList}>
                    <li className={styles.mathListItem}><span className={styles.span}>I can </span>compare and order numbers up to 1,000,000,000 and use the symbols &gt;, &lt; or = to show which numbers are greater, less than, or equal to each other.</li>
                    {/* Add more deployment tools as needed */}
                </ul>
            </div>
            <div className={styles.mathCard}>
                <h4 className={styles.mathTitle}>Extra Resources</h4>
                <ul className={styles.mathList}>
                    <li className={styles.mathListItem}><a className={styles.link} href="https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding-3/imp-comparing-multi-digit-numbers/v/comparing-whole-numbers">Khan Academy - Comparing Multi-Digit Numbers</a></li>
                    <br/><li className={styles.mathListItem}><a className={styles.link} href="https://www.ixl.com/math/grade-4/compare-numbers-up-to-one-billion">IXL - Compare Numbers Up to 1 Billion</a></li>
                    <br/><li className={styles.mathListItem}><a className={styles.link} href="https://www.mathplayground.com/place_value_pirates.html">Math Playground - Comparing Numbers (Place Value Pirates)</a></li>
                    <br/><li className={styles.mathListItem}><a className={styles.link} href="https://www.education.com/worksheets/comparing-large-numbers/">Education.com - Comparing Large Numbers Worksheets</a></li>
                    <br/><li className={styles.mathListItem}><a className={styles.link} href="https://www.splashlearn.com/number-games-for-4th-graders">SplashLearn - Compare and Order Numbers</a></li>
                    {/* Add more collaboration tools as needed */}
                </ul>
            </div>
        </div>
    </div>
  );
}

export default MathContainer;
