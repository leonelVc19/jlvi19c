'use client'
import Head from "next/head";
import dynamic from 'next/dynamic';
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import "./NavBar/nav";
import "./Footer/footer";
import ButtonLink from "./components/components/Button";
const SkillsComponent = dynamic(() => import('./components/skills/skill.js'));
const CvComponent =     dynamic(() => import('./components/mycv/juan_cv.js'));
const ContactComponent = dynamic(() => import('./components/contact.js'));
const AboutComponent =   dynamic(() => import('./components/about/about.js'));
const ProjectsComponent = dynamic(() => import('./components/projects/project.js'));


export default function Home() {
  const domain = process.env.NEXT_PUBLIC_S3_DOMAIN;

  return (
    <>
      <Head>
        <title>JuanIglesias</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portaforlio de Juan Leonel"/>

        <meta property="og:url" content="https://jlvi19c.vercel.app/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="JuanIglesias"/>
        <meta property="og:description" content="Este es mi portafolio"/>
        <meta property="og:image" content=""/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="jlvi19c.vercel.app"/>
        <meta property="twitter:url" content="https://jlvi19c.vercel.app/"/>
        <meta name="twitter:title" content="JuanIglesias"/>
        <meta name="twitter:description" content="Bienvenido a mi portafolio"/>
        <meta name="twitter:image" content=""/>
        <link rel="icon" href="/jlvi_icon_web.svg"  loading="lazy"/>
      </Head>

      <main className={styles.main}>
        <section className={styles.main_presentation}>
          <article className={styles.main_presentation_text}>
            <h1 className={styles.informacion_cv_text}>
              Hola, Soy Juan Leonel Vazquez Iglesias
            </h1>
          
            <article className={styles.text_main}> 
              <h3>Ing. en Desarrollo y Gestión Software</h3>
              <p className={styles.text_main_description}>  
                Soy desarrollador web <strong>FullStack</strong>,  en buscan de experiencia. Tengo habilidades
                para trabajar en equipo, ademas que disfruto siendo autodidacta.
              </p>
            </article>
            <div className={styles.buttons_index}>
              <ButtonLink
                title="Skills"
                link="/components/skills/skill"
                onClick={() => alert("Aun en desarrollo...")}
              ></ButtonLink>
              <ButtonLink
                title="Contacto"
                link="/components/contact"
                onClick={() => alert("Aun en desarrollo...")}
              ></ButtonLink>  
            </div>
          </article>
          <article className={styles.center}>
            <Image
              className={styles.logo}
              src={`https://${domain}/juan.svg`}
              alt="Logo JLVI19C"
              width={230}
              height={230}
              layout="cover"
              loading="lazy"
            />
          </article>
        </section>
        <section>
          {/* <MyProjects></MyProjects> */}
          <ProjectsComponent />
        </section>
        <CvComponent />
        <SkillsComponent />
        <ContactComponent />
        <AboutComponent />
      </main>
    </>
  );
}
