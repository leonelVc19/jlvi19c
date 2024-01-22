import '@/pages';
import Image from 'next/image'
import styles from '@/styles/About.module.css';

function About() {
    const perfil = 'https://www.linkedin.com/in/juan-leonel-vazquez-iglesias-74b553230/';
    return (
        <section className={styles.main}>
            <section className={styles.center}>
                <section className={styles.texts}>
                    <section className={styles.content}>
                        <article className={styles.photo}>
                            <div className={styles.card}>
                                    <article className={styles.imgBox}>
                                            <Image
                                                src='https://jlvi-iglesias.s3.us-west-1.amazonaws.com/Juan_Leonel_Vazquez_Iglesias.jpeg'
                                                alt='Juan Iglesias'
                                                width={500}
                                                height={500}
                                                className={styles.myphoto}
                                            ></Image>
                                    </article>
                                    <section className={styles.contentTex}>
                                        <header className={styles.contentBox}>
                                            <h3>Juan Iglesias <br></br> <span> Ing. DGS </span></h3>
                                        </header>
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
                                    </section>
                            </div>
                        </article>
                        <article>
                            <strong>Juan L. Vazquez Iglesias, </strong>es un desarrollador de software en busca de experiencia en el desarrollo de aplicación web y aplicaciones móviles y en camino a convertirse en desarrollador Full Stack con en el lenguaje de programación
                            <strong> JavaScript.</strong>
                        </article>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default About;
