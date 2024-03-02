import '@/pages';
import Image from 'next/image'
import styles from '@/styles/About.module.css';

function About() {
    return (
        <section >
            <section className={styles.center}>
                <section className={styles.texts}>
                    <section className={styles.texts_justify} >
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
                                        <h3>Juan L. Iglesias V. <br></br> <span> Ing. DGS </span></h3>
                                    </header>
                                    <br></br>
                                    <p className={styles.sci}>
                                        JLVI19C
                                    </p>
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
