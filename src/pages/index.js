import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
import NavBar from './NavBar/nav';
import Card from './components/card';
import TextoJuan from './components/textJuan';
import Footer from './components/Footer/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>jlvi19C</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logojuan.png" />
      </Head>
      <NavBar></NavBar>
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
            width={170}
            height={100}
            priority
          />
        </div>
        <Card></Card>
        <br></br>
        <TextoJuan></TextoJuan>
      </main>
      <Footer></Footer>
    </>
  )
}
