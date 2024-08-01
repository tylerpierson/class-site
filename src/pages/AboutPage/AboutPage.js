import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import NavMobile from '../../components/NavMobile/NavMobile'
import styles from './AboutPage.module.scss'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <>
      <NavBar />
      <NavMobile />
      <div className={styles.AboutPage}>
        <div className={styles.textContainer}>
          <h1 className={styles.header}>Who I am...</h1> 
          <p className={styles.bio}>
            Welcome to <span className={styles.highlight}>4th Grade!</span> This year I will be teaching math and science. I am beyond thrilled to be a Champion and I cannot wait to work with your child. It is going to be a great year! 
          </p>
        </div>
        <img className={styles.image} src="/img/headshot.png" />
      </div>
    </>
  )
}

export default AboutPage