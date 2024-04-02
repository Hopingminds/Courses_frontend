import React, { useState } from 'react'
import styles from './hireFromUs.module.css'
import banner from '../../Assets/Images/hireBanner.png'
import HireCard from './HireCard'
import { RiArrowDropDownLine } from "react-icons/ri";

const HireFromUs = () => {


    const [openDropdown, setOpenDropdown] = useState([0]);
    console.log(openDropdown)


    const handleDropdown = (id) => {
        if (openDropdown.includes(id)) {
            let temp = [...openDropdown];
            const index = temp.findIndex((val) => val === id);
            console.log(index)
            temp.splice(index, 1)
            setOpenDropdown([...temp]);
            console.log(temp)
        }
        else {
            setOpenDropdown([...openDropdown, id])
        }
    }
    return (
        <>
            <div className={styles.banner_section}>
                <img src={banner} alt="no banner found" />
                <h2>Unlock Your Potential, Hire with Us!</h2>
            </div>
            <div className={styles.main_container}>
                <div className={styles.side_filter}>
                    <ul id={0}>
                        <div className={styles.dropdown_head} onClick={() => handleDropdown(0)}>
                            <h5>Position</h5>
                            <RiArrowDropDownLine />
                        </div>
                        {openDropdown?.includes(0) && <span>
                            <li> <input type="checkbox" name="" id="" /><p>Frontend</p> </li>
                            <li> <input type="checkbox" name="" id="" /><p>Backend</p> </li>
                            <li> <input type="checkbox" name="" id="" /><p>Developer</p> </li>
                        </span>}
                    </ul>
                    <ul id={1}>
                        <div className={styles.dropdown_head} onClick={() => handleDropdown(1)}>
                            <h5>Position</h5>
                            <RiArrowDropDownLine />
                        </div>
                        {openDropdown.includes(1) && <span>
                            <li> <input type="checkbox" name="" id="" /><p>Frontend</p> </li>
                            <li> <input type="checkbox" name="" id="" /><p>Backend</p> </li>
                            <li> <input type="checkbox" name="" id="" /><p>Developer</p> </li>
                        </span>}
                    </ul>

                </div>
                <div className={styles.card_container}>
                    <HireCard />
                    <HireCard />
                </div>
            </div>
            <div className={styles.hire_bottom}>
                <h2>Are you Interested in placement ? </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>Get Hired</button>
            </div>
        </>
    )
}

export default HireFromUs