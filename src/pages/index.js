import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css';
import './NavBar/nav';
import Card from './components/card';
import TextoJuan from './components/textJuan';
import './Footer/footer';
import Link from 'next/link';
import Button from './components/components/Button';

export default function Home() {

  return (
    <>
      <Head>
        <title>JuanIglesias</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/jlvi_icon_web.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.main_presentation}>
          <div className={styles.main_presentation_text}>
            <h1 className={styles.informacion_cv_text}>Hola, Soy Juan Leonel Vazquez Iglesias.</h1>
            <h3>Ing. en Desarrollo y Gestión Software</h3>
            <p>Soy desarrollador web en buscan de experiencia. Tengo habilidades destacadas para trabajar en equipo y disfruto siendo autodidacta para continuar aprendiendo sobre diversas tecnologías, especialmente en el desarrollo de web Full-Stack</p>
            <div className={styles.buttons_index}>
              <Button title="Skills" link="/components/skills/skill" onClick={() => alert('Aun en desarrollo...')}></Button>
              <Button title="Contacto" link="/components/contact" onClick={() => alert('Aun en desarrollo...')}></Button>
            </div>
          </div>
          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/juan.svg"
              alt="Logo JLVI19C"
              width={130}
              height={130}
              priority
            />
          </div>
        </div>
        <Card></Card>
        <br></br>
        <TextoJuan></TextoJuan>
        <br></br>
        <div className={styles.informacion_cv}>
         
          <Button title="Ver Curriculum Vitae" link="/components/mycv/juan_cv"></Button>
        </div>
      </main>
    </>
  )
}
