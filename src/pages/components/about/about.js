import '@/pages';
import Image from 'next/image'
import styles from '@/styles/About.module.css';
import { Fragment, useState } from 'react';


function About() {
    const perfil = 'https://www.linkedin.com/in/juan-leonel-vazquez-iglesias-74b553230/';
    return (
        <div className={styles.main}>
            <div className={styles.center}>
                <div className={styles.texts}>
                    <h1>Iglesias JLV</h1>
                    <div className={styles.content}>
                        <div className={styles.photo}>
                            <div className={styles.card}>
                                    <div className={styles.imgBox}>
                                            <Image
                                                src='https://jlvi-iglesias.s3.us-west-1.amazonaws.com/Juan_Leonel_Vazquez_Iglesias.jpeg'
                                                alt='Juan Iglesias'
                                                width={500}
                                                height={500}
                                                className={styles.myphoto}
                                            ></Image>
                                    </div>
                                    <div className={styles.contentTex}>
                                        <div className={styles.contentBox}>
                                            <h3>Juan Iglesias <br></br> <span> Ing. DGS </span></h3>
                                        </div>
                                        <br></br>
                                        <ul className={styles.sci}>
                                            <li>
                                                <a href="https://github.com/leonelVc19" target='_blank'>
                                                    <Image
                                                        src='/icons/github.png'
                                                        alt='Juan Iglesias'
                                                        width={18}
                                                        height={18}
                                                        priority
                                                    />
                                                </a>
                                            </li>
                                            <li >
                                                <a href="mailto: vazquez.juan.1fm@gmail.com" target='_blank'>
                                                    <Image
                                                        src='/icons/gmail.png'
                                                        alt='Juan Iglesias'
                                                        width={18}
                                                        height={18}
                                                        priority
                                                    />
                                                </a>
                                            </li>
                                            <li >
                                                <a href="https://www.linkedin.com/in/juan-leonel-vazquez-iglesias-74b553230/" target='_blank'>
                                                    <Image
                                                        src='/icons/linkedin.png'
                                                        alt='Juan Iglesias'
                                                        width={18}
                                                        height={18}
                                                        priority
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                        <p>
                            <strong>Juan L. Vazquez Iglesias, </strong>es un desarrollador de software en busca de experiencia en el desarrollo de aplicación web y aplicaciones móviles y en camino a convertirse en desarrollador Full Stack con en el lenguaje de programación
                            <strong> JavaScript.</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
