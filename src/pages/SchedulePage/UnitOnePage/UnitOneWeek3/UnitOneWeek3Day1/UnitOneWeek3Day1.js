import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/NavBar/NavBar';
import NavMobile from '../../../../../components/NavMobile/NavMobile';
import styles from '../../../UnitStyles/UnitDayStyles.module.scss';

function UnitOneWeek3Day1() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.LessonPage}>
        <Link to="/unit-1/week-3" className={styles.backButton}>
          ← Back to Week 3
        </Link>
        <h1>Unit 1 - Week 3 - Day 1: Layouts and Flexbox</h1>

        <section className={styles.lessonSection}>
          <h2>What is Flexbox? (5-10 minutes)</h2>
          <p>
            Flexbox is a layout model in CSS that allows you to create flexible and responsive layouts. With Flexbox, elements can adjust their size and position based on available space in their container.
          </p>
          <p>
            The main advantage of using Flexbox is that it enables responsive layouts without the need for floats or positioning.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Basic Flexbox Concepts (10-15 minutes)</h2>
          <p>
            To use Flexbox, you need to apply the <code>display: flex;</code> property to the parent container. This makes all its direct children (the items) behave as flex items.
          </p>
          <p>
            There are two main axes in Flexbox:
          </p>
          <ul>
            <li><strong>Main Axis:</strong> The primary axis along which items are laid out (default is horizontal).</li>
            <li><strong>Cross Axis:</strong> Perpendicular to the main axis (default is vertical).</li>
          </ul>

          <p>
            Let's look at a simple example of using Flexbox to layout items:
          </p>
          <pre>
            {`/* Parent container */
.container {
  display: flex;
  justify-content: space-between; /* Space out items along the main axis */
}

.item {
  width: 100px; /* Set width for flex items */
  height: 100px;
  background-color: lightblue;
}`}
          </pre>
        </section>

        <section className={styles.lessonSection}>
          <h2>Key Flexbox Properties (15-20 minutes)</h2>
          <p>
            Here are some key properties you can use with Flexbox:
          </p>
          <ul>
            <li><strong>justify-content:</strong> Controls how the items are distributed along the main axis (e.g., <code>flex-start</code>, <code>center</code>, <code>space-between</code>).</li>
            <li><strong>align-items:</strong> Controls how the items are aligned along the cross axis (e.g., <code>flex-start</code>, <code>center</code>, <code>stretch</code>).</li>
            <li><strong>flex-direction:</strong> Defines the direction of the main axis (e.g., <code>row</code>, <code>column</code>).</li>
            <li><strong>flex-wrap:</strong> Controls whether the items should wrap onto new lines if needed (e.g., <code>wrap</code>, <code>nowrap</code>).</li>
          </ul>

          <p>
            Here's an example of using multiple properties together:
          </p>
          <pre>
            {`/* Flexbox container with space-between and vertical alignment */
.container {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  justify-content: center; /* Center items along the main axis */
  align-items: center; /* Align items along the cross axis */
  height: 100vh; /* Take full height of viewport */
}`}
          </pre>
        </section>

        <section className={styles.lessonSection}>
          <h2>Hands-On Practice (20-25 minutes)</h2>
          <p>
            Now it's time to practice using Flexbox. In your HTML file, create a <code>div</code> container with several child <code>div</code> elements inside. Apply Flexbox properties to the container to control the layout.
          </p>
          <pre>
            {`<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>`}
          </pre>

          <p>
            Experiment with different Flexbox properties like <code>justify-content</code>, <code>align-items</code>, and <code>flex-direction</code> to see how they affect the layout of the items.
          </p>
        </section>

        <section className={styles.lessonSection}>
          <h2>Wrap-Up and Next Steps (5-10 minutes)</h2>
          <p>
            Today, we introduced Flexbox and how it makes creating responsive layouts easier. You've learned key Flexbox properties and how to apply them to create flexible and dynamic layouts for your webpage.
          </p>
          <p>
            In the next lesson, we'll cover how to make your layouts mobile-friendly by using CSS media queries and adjusting the design for different screen sizes.
          </p>
        </section>
      </div>
    </>
  );
}

export default UnitOneWeek3Day1;
