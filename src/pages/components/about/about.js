import '@/pages';
import Image from 'next/image'
import styles from '@/styles/About.module.css';

function About() {
    return (
        <section >
            <section className={styles.center}>
                <section className={styles.texts}>
                    <section >
                        <article className={styles.photo}>
                            <div className={styles.card}>
                                <article className={styles.imgBox}>
                                        <Image
                                            src='https://jlvi-iglesias.s3.us-west-1.amazonaws.com/Juan_Leonel_Vazquez_Iglesias.jpeg'
                                            alt='Juan Iglesias'
                                            width={500}
                                            height={500}
                                            className={styles.myphoto}
                                            layout="cover"
                                            loading="lazy"
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
                                                    layout="cover"
                                                    loading="lazy"
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
                                                    loading="lazy"
                                                    layout="cover"
                                                />
                                            </a>
                                        </li>
                                        <li >w
                                            <a href="https://www.linkedin.com/in/juan-leonel-vazquez-iglesias-74b553230/" target='_blank'>
                                                <Image
                                                    src='/icons/linkedin.png'
                                                    alt='Juan Iglesias'
                                                    width={18}
                                                    height={18}
                                                    layout="cover"
                                                    loading="lazy"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </article>
                        <article className={styles.description}>
                            <p>
                                <strong>Juan Leonel Vazquez Iglesias, </strong>
                                es un desarrollador de software en busca de experiencia en el desarrollo de aplicación web y aplicaciones móviles y en camino a convertirse en desarrollador Full Stack con en el lenguaje de programación
                                <strong> JavaScript.</strong>
                            </p>
                        </article>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default About;
