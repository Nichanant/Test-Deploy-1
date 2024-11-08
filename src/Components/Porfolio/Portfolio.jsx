import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

function Portfolio() {
    return (
        <div>
            <div className={styles.port_con}>
                <h3 className={styles.port_title}>My Portfolio</h3>
                <div className={styles.port_list}>
                    <div className={styles.port_item}>
                        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRldnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </Tilt>
                        <p>Project Title</p>
                    </div>

                    <div className={styles.port_item}>
                        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRldnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </Tilt>
                        <p>Project Title</p>
                    </div>

                    <div className={styles.port_item}>
                        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRldnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </Tilt>
                        <p>Project Title</p>
                    </div>

                    <div className={styles.port_item}>
                        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRldnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </Tilt>
                        <p>Project Title</p>
                    </div>

                    <div className={styles.port_item}>
                        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRldnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </Tilt>
                        <p>Project Title</p>
                    </div>

                    <div className={styles.port_item}>
                        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRldnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                        </Tilt>
                        <p>Project Title</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Portfolio
