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
            <br/>
            <br/>
            I grew up in the DFW area along with my four siblings. My family consists of my wife, Jennifer, my son, Dean, and our dog, Ringo. In my spare time I enjoy reading comics, developing web applications, playing instruments, spending time with family and friends, and watching movies at home.
            <br/>
            <br/>
            Prior to beginning my college education, I spent five years as a Marine Corps infantryman stationed in Oahu, Hawaii. I later graduated from the University of North Texas with a Bachelor of Science degree in Interdisciplinary Studies and from Texas A&M University with a Master's degree in Education Administration and Human Development. More recently, I graduated as Valedictorian from General Assembly, where I completed a software engineering course. I have always had a love for learning and hope to pass that passion on to my students.
            <br/>
            <br/>
            I am dedicated to creating a classroom community that allows us to communicate, explore, and grow together.  I strongly believe in the power of relationships, the power of YET, and meeting each individual child where they are.
          </p>
        </div>
        <img className={styles.image} src="/img/headshot.png" />
        <img className={styles.qr} src="/img/qr-code.png" />  
      </div>
    </>
  )
}

export default AboutPage