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
                    <h1>Iglesias.dev</h1>
                    <div className={styles.content}>
                        <div className={styles.photo}>
                            <div className={styles.card}>
                                    <div className={styles.imgBox}>
                                            <Image
                                                src='/juan_iglesias.jpg'
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
                                        <ul className={styles.sci}>
                                            <li>
                                                <a href="#">
                                                    red
                                                </a>
                                            </li>
                                            <li >
                                                <a href="#">
                                                    red
                                                </a>
                                            </li>
                                            <li >
                                                <a href="#">
                                                    red
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                        <p>
                            <strong>Juan Iglesias</strong> 
                            es un desarrollador de software en busca de experiencia en el desarrollo de aplicación web y aplicaciones móviles y en camino a convertirse en desarrollador Full Stack con en el lenguaje de programación
                            <strong> JavaScript.</strong>
                        </p>
                    </div>
                    
                </div>
                <section className={styles.imagenes}>
                    <Image src="/komi.jpg"
                        className={styles.imagen}
                        width={200}
                        height={150}  
                        alt="Komi1" 
                    />
                    <Image src="/komi.jpg"
                        className={styles.imagen}
                        width={200}
                        height={150}  
                        alt="Komi1" 
                    /> 
                    <Image src="/komi.jpg"
                        className={styles.imagen}
                        width={200}
                        height={150}  
                        alt="Komi1"
                    /> 
                    <Image src="/komi.jpg"
                        className={styles.imagen}
                        width={200}
                        height={150}  
                        alt="Komi1"
                    />
                    <Image src="/komi.jpg"
                        className={styles.imagen}
                        width={200}
                        height={150}  
                        alt="Komi1" 
                    />
                    <Image className={styles.imagen} src="/komi.jpg"
                        width={200}
                        height={150}  
                        alt="Komi1" 
                    />
                </section>
            </div>
        </div>
    );
}

export default About;
