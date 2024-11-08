import React from 'react'
import styles from './Number.module.css'
// import CountUp from 'react-countup'
// import VisibilitySensor from 'react-visibility-sensor'


function Number() {
    return (
        <div>
            <div className={styles.number_con}>
                <div className={styles.number_item}>
                    <h3>100+
                        {/* <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible }) => {
                                <div>
                                    {isVisible ? <CountUp start={0} end={100} duration={5} /> : null}+
                                </div>
                            }}
                        </VisibilitySensor> */}
                    </h3>
                    <p>Project Delivered</p>
                </div>

                <div className={styles.number_item}>
                    <h3>50+</h3>
                    <p>Companies Helped </p>
                </div>

                <div className={styles.number_item}>
                    <h3>10+</h3>
                    <p>Years of experience</p>
                </div>

                <div className={styles.number_item}>
                    <h3>200+</h3>
                    <p>Happy Clients</p>
                </div>

            </div>
        </div>
    )
}

export default Number
