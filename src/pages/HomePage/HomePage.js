import styles from './HomePage.module.scss'
import NavBar from '../../components/NavBar/NavBar'
import NavMobile from '../../components/NavMobile/NavMobile'
import IntroContainer from '../../components/IntroContainer/IntroContainer'
import FourthBanner from '../../components/FourthBanner/FourthBanner'
import MathBanner from '../../components/MathBanner/MathBanner'
import MathContainer from '../../components/MathContainer/MathContainer'
import ScienceBanner from '../../components/ScienceBanner/ScienceBanner'
import ScienceContainer from '../../components/ScienceContainer/ScienceContainer'
import SpriteAnimation from '../../components/SpriteAnimation/SpriteAnimation'

export default function HomePage(){
    const projectId = "project-section";
    return (
        <>
            <NavBar />
            <NavMobile />
            <div className={styles.HomePage}>
                <SpriteAnimation />
                <IntroContainer />
                <FourthBanner />
                <MathBanner />
                <MathContainer />
                <ScienceBanner />
                <ScienceContainer />
            </div>
        </>
    )
}