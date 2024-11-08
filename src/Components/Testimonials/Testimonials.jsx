import React from 'react'
import styles from './Testimonial.module.css'

function Testimonials() {
    return (
        <div>
            <div className={styles.testi_con}>
                <h3 className={styles.testi_title}>Testimonials</h3>
                <div className={styles.testi_list}>
                    <div className={styles.testi_item}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                        <img src="https://plus.unsplash.com/premium_photo-1705018500344-450a9e2d4c56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHdvbWFufGVufDB8fDB8fHww" alt="" />
                        <h4>Anna Doe</h4>
                        <p className={styles.bio}>Web Developer</p>
                    </div>

                    <div className={styles.testi_item}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                        <img src="https://images.unsplash.com/photo-1450297350677-623de575f31c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHdvbWFufGVufDB8fDB8fHww" alt="" />
                        <h4>Zara M</h4>
                        <p className={styles.bio}>Web Developer</p>
                    </div>

                    <div className={styles.testi_item}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                        <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww" alt="" />
                        <h4>Charlie Jada</h4>
                        <p className={styles.bio}>Web Developer</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Testimonials
