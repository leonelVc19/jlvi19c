'use client'
import Head from "next/head";
import dynamic from 'next/dynamic';
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import "./NavBar/nav";
import "./Footer/footer";
const SkillsComponent = dynamic(() => import('./components/skills/skill.js'));
const CvComponent =     dynamic(() => import('./components/mycv/juan_cv.js'));
const ContactComponent = dynamic(() => import('./components/ContactComponent.js'));
const AboutComponent =   dynamic(() => import('./components/about/about.js'));
const ProjectsComponent = dynamic(() => import('./components/projects/project.js'));


export default function Home() {
  console.log('Handling scroll event');
  return (
    <>
      <Head>
        <title>JLVI19C</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portaforlio de Juan Leonel Vazquez Iglesias"/>

        <meta property="og:url" content="https://jlvi19c.vercel.app/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="JLVI19C"/>
        <meta property="og:description" content="Este es mi portafolio"/>
        <meta property="og:image" content=""/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="jlvi19c.vercel.app"/>
        <meta property="twitter:url" content="https://jlvi19c.vercel.app/"/>
        <meta name="twitter:title" content="JLVI19C"/>
        <meta name="twitter:description" content="Bienvenido a mi portafolio"/>
        <meta name="twitter:image" content=""/>
        <link rel="icon" href="/JLVI19C.svg"/>
      </Head>
      <main className={styles.main}>
        <section className={styles.main_presentation}>
          <article className={styles.main_presentation_text}>
            <h1 className={styles.informacion_cv_text}>
              Hola, Soy Juan Leonel Vazquez Iglesias
            </h1>
            <article className={styles.text_main}> 
              <h3>Ingeniero en Desarrollo y Gestión Software</h3>
              <hr></hr>
              <p className={styles.text_main_description}>  
              Apasionado por el mundo de la tecnología y desarrollo de software, cuento con experiencia en desarrollo web, FullStack y aplicaciones móviles. Me caracterizo por ser autodidacta y estar en constante aprendizaje de nuevas tecnologías día a día, así mismo contando con una gran habilidad para trabajo en equipo, además de proponer y desarrollar soluciones eficientes y escalables que son integradas a los aplicativos para una mayor experiencia de usuario. Siempre con la disponibilidad para aprender algo nuevo cada día y abierto a las nuevas experiencias.
              </p>
            </article> 
            <article>
              <ContactComponent />
            </article>
          </article>
          <article className={styles.center}>
            <Image
              className={styles.logo}
              src='https://jlvi-iglesias.s3.us-west-1.amazonaws.com/Juan_Leonel_Vazquez_Iglesias.jpeg'
              alt='Juan Iglesias'
              width={240}
              height={360}
              layout="cover"
              loading="lazy"
            />
          </article>
        </section>
        <br></br>
        <br></br><br></br>
        <section>
          <ProjectsComponent />
        </section>
        <SkillsComponent />
        <AboutComponent />
      </main>
    </>
  );
}
