import '@/pages';
import Image from 'next/image'
import styles from '@/styles/About.module.css';

function About() {
    return (
        <section>
            <section id="sobre_mi" className={styles.center}>
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
                                Apasionado por el mundo de la tecnología y desarrollo de software, cuenta con experiencia en desarrollo web FullStack y aplicaciones móviles. Se caracteriza por ser una persona autodidacta y estar en constante aprendizaje de nuevas tecnologías día tras día, así mismo tiene una gran habilidad para trabajo en equipo, además de proponer y desarrollar soluciones eficientes y escalables que son integradas a los aplicativos para una mayor experiencia de usuario. Siempre con la disponibilidad para aprender algo nuevo cada día y abierto a las nuevas experiencias. Ha aplicado estos conocimientos en proyectos como E-start en donde realizó un desarrollo FullStack Developer. Asimismo, cuenta con 1 año y 9 meses de experiencia como desarrollador backend para el sector bancario en CDMX
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
