

import React from "react";
import styles from './Hero.module.css'
import { getImageUrl } from "../../utils";

export const Hero = () =>{
    return <>
     <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Bhanuprasad</h1>
            <p className={styles.description}> I'm a passionate MERN stack developer eager to contribute to both frontend and backend projects. 
                Reach out if you'd like to know more about my skills and projects!
            </p>
            <a href="mailto:bhanuprasadsuram0018@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl('hero/pic.jpg')} alt="hero Image of Me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
     </section>
    </>
}