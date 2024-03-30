import React from 'react'
import styles from './HireCard.module.css'
import { ReactComponent as Exp } from '../../Assets/Icons/experience.svg'
import { ReactComponent as Location } from '../../Assets/Icons/location.svg'
import { ReactComponent as About } from '../../Assets/Icons/jobDesc.svg'
import demouser from '../../Assets/Images/demogirl.png'

const HireCard = () => {
    return (
        <div className={styles.card_main}>
            <div className={styles.card_about}>
                <div className={styles.inner_about}>
                    <h3>Anchal</h3>
                    <h4>Graphic Designer</h4>
                    <span>
                        <Exp /> 2-7 Years |
                        <Location /> Chandigarh

                    </span>
                </div>
                <img src={demouser} alt="not found" />

            </div>
            <div className={styles.card_description}>
                <span>
                    <About /> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  tempor inci....</p>
                </span>
                <button>View Resume</button>
            </div>
        </div>
    )
}

export default HireCard