import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css';
import './NavBar/nav';
import Card from './components/card';
import TextoJuan from './components/textJuan';
import './Footer/footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>jlvi19C</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logojuan.png" />
      </Head>
      <main className={styles.main}>
        {/* <div className={styles.description}>
          <div className={styles.description}>
            <div>
              <a
                href="https://github.com/leonelVc19"
                target="_blank"
                rel="noopener noreferrer"
              >
                Por{' Juan Leonel!!'}
                <Image
                  src="/logojuan.png"
                  alt="JLVI19C"
                  className={styles.logoJuan}
                  width={70}
                  height={40}
                  priority
                />
              </a>
            </div>
          </div>
        </div> */}
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/logojuan.png"
            alt="Logo JLVI19C"
            width={150}
            height={150}
            priority
          />
        </div>
        <Card></Card>
        <br></br>
        <TextoJuan></TextoJuan>
        <br></br>
        <div className={styles.informacion_cv}>
          <span className={styles.informacion_cv_text}>Juan Leonel Vazquez Iglesias</span>
          <Link  className={styles.informacion_cv_link}href="/components/mycv/juan_cv">Ver Curriculum Vitae</Link>
        </div>
      </main>
    </>
  )
}
