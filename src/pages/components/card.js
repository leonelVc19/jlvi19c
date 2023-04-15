import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

function Card() {
    return(
        
      <div className={styles.grid}>
        <Link
          href="/components/MyProjects/project"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Mis Proyectos <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            En este apartado encontrara los proyectos que realice tanto en la escuela como en la pasantia.
          </p>
        </Link>

        <Link
          href="/components/skills/skill"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Mis Skills <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
          Podrás ver mis habilidades, así como las herramientas que conozco y con las que trabaje.
          </p>
        </Link>

        <Link
          href="/components/contact"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
          Contactame <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Podrás contactarme por medio de mis redes social o si bien gustas mi correo electronico.
          </p>
        </Link>

        <a
          href="https://youtu.be/QNJxHWAiQSU"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Ejemplos <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Informacion de ejem
          </p>
        </a>
      </div>
    );
};

export default Card