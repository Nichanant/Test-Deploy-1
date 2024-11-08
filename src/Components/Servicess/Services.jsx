import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaPaintbrush, FaDesktop } from 'react-icons/fa6'

function Services() {
    return (
        <div>
            <div className={styles.services_con}>
                <h3 className={styles.services_title}>My Services</h3>
                <div className={styles.services_list}>
                    <div className={styles.services_item}>
                        <FaCode />
                        <h3>Web Development</h3>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</h4>
                    </div>

                    <div className={styles.services_item}>
                        <FaPaintbrush />
                        <h3>Web Design</h3>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</h4>
                    </div>

                    <div className={styles.services_item}>
                        <FaDesktop />
                        <h3>Front-end Consulting</h3>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Magni recusandae enim consectetur sapiente necessitatibus neque eos ipsa ullam minima nulla.</h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services
