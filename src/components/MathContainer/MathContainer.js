import styles from './MathContainer.module.scss';

function MathContainer() {
  return (
    <div className={styles.mathContainerMain}>
        <div className={styles.mathContainerLeft}>
            <div className={styles.mathCard}>
                <h4 className={styles.mathTitle}>This weeks TEKS</h4>
                <ul className={styles.mathList}>
                    <li className={styles.mathListItem}><span className={styles.span}>4.2A</span> Interpret the value of each place-value position as 10 times the position to the right and as one-tenth of the value of the place to its left.</li>
                    <br/><li className={styles.mathListItem}><span className={styles.span}>4.2B</span> Represent the value of the digit in whole numbers through 1,000,000,000 and decimals to the hundredths using expanded notation and numerals.</li>
                </ul>
            </div>
            <div className={styles.mathCard}>
                <h4 className={styles.mathTitle}>Anchor Charts</h4>
                <ul className={styles.mathList}>
                    <li className={styles.mathListItem}><a href="https://classful.com/wp-content/uploads/2023/01/63cd4636454c2_6.jpg"><img className={styles.img} src="img/place-value.jpeg" /></a></li>
                </ul>
            </div>
        </div>
        <div className={styles.mathContainerRight}>
            <div className={styles.mathCard}>
                <h4 className={styles.mathTitle}>I can...</h4>
                <ul className={styles.mathList}>
                    <li className={styles.mathListItem}><span className={styles.span}>I can </span>understand that each digit in a number is 10 times bigger than the digit to its right and one-tenth of the value of the digit to its left.</li>
                    <br/><li className={styles.mathListItem}><span className={styles.span}>I can </span>show the value of each digit in numbers up to 1,000,000,000 and decimals to the hundredths by using expanded notation and regular numbers.</li>
                    {/* Add more deployment tools as needed */}
                </ul>
            </div>
            <div className={styles.mathCard}>
                <h4 className={styles.mathTitle}>Extra Resources</h4>
                <ul className={styles.mathList}>
                    <li className={styles.mathListItem}><a className={styles.link} href="https://www.khanacademy.org/math/arithmetic/arith-place-value/arith-review-place-value-intro/v/place-value-1">Khan Academy - Place Value and Decimal System</a></li>
                    <br/><li className={styles.mathListItem}><a className={styles.link} href="https://www.mathsisfun.com/place-value.html">Math is Fun - Place Value</a></li>
                    <br/><li className={styles.mathListItem}><a className={styles.link} href="https://www.khanacademy.org/math/cc-third-grade-math/imp-place-value-and-rounding-3/expanded-form/v/expanded-form">Khan Academy - Expanded Form</a></li>
                    <br/><li className={styles.mathListItem}><a className={styles.link} href="https://learnzillion.com/lesson_plans/8215-use-expanded-notation-to-represent-decimals">LearnZillion - Expanded Notation</a></li>
                    {/* Add more collaboration tools as needed */}
                </ul>
            </div>
        </div>
    </div>
  );
}

export default MathContainer;
