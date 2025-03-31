'use client'
import Head from "next/head";
import dynamic from 'next/dynamic';
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import "./NavBar/nav";
import Footer from './Footer/footer';
import NavBar from './NavBar/nav';

const SkillsComponent = dynamic(() => import('./components/skills/skill.js'));
const ContactComponent = dynamic(() => import('./components/ContactComponent.js'));
const AboutComponent =   dynamic(() => import('./components/about/about.js'));
const ProjectsComponent = dynamic(() => import('./components/projects/project.js'));
const ContactaMeComponent = dynamic(() => import('./components/contact/index.js'));
const ExperienciaComponent = dynamic(() => import('./components/experiencia/index.js'));
import ButtonLink from "./components/components/Button";


export default function Home() {
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
      <NavBar />
      <main className={styles.main} id="home">
        <section className={styles.main_presentation}>
          <article className={styles.main_presentation_text}>
            <h1 className={styles.informacion_hola}> Hola,</h1>
            <h1 className={styles.informacion_nombre}>Soy, <span className={styles.informacion_soy}>Juan Iglesias</span> .</h1>

            <h1 className={styles.informacion_puesto}> Software Developer | Ing. Desarrollo y Gestión de Software</h1>
            <article className={styles.text_main}> 
              <p className={styles.text_main_description}>Desarrollador FullStack apasionado por la tecnología, con experiencia en desarrollo web y móvil. Autodidacta, orientado al aprendizaje continuo y trabajo en equipo. Enfocado en crear soluciones eficientes y escalables para mejorar la experiencia de usuario.</p>
            </article> 
            <article className={styles.contact_information}>
              <ContactComponent />
              <ButtonLink
                title="Descargar CV"
                link="https://jlvi-iglesias.s3.us-west-1.amazonaws.com/Juan+Leonel+Vazquez+Iglesias+CV.pdf"
                tart="_blank"
              />
            </article>
          </article>
          <article className={styles.center}>
            <Image
              className={styles.logo}
              src="/JLVI19C.svg"
              alt="JLVI19C"
              width={360}
              height={360}
              layout="cover"
              loading="lazy"
            />
          </article>
        </section>
        <AboutComponent />
        <SkillsComponent />
        <ExperienciaComponent />
        <section>
          <ProjectsComponent />
        </section>
        <Footer />
      </main>
    </>
  );
}
