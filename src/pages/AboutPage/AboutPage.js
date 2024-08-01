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
          <p className={styles.bio}>Hello! I am a former educator turned <span className={styles.highlight}>Software Engineer</span>. I first became interested in computer science and web development after attending a conference related to the responsiveness of teachers to their students' academic needs. Being a teacher, I found that many of the applications available for teachers to track student data were very complex and hard to navigate. I made it a mission of mine to make this a thing of the past, and during this journey, became extremely passionate about software engineering. My goal now is to do for others what I was wanting to do for myself, which is to make their technological dreams a reality. Having the ability to take something from nothing but a dream and turn it into something tangible is what I live for nowadays. If you are on my page now, it is most likely because you have a dream that you are wanting to make a reality. Reach out today so that you and I can work together to make it happen!</p>
        </div>
        <img className={styles.image} src="/img/cow.jpg" />
      </div>
    </>
  )
}

export default AboutPage