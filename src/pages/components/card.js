import { Inter } from 'next/font/google'
import styles from '@/styles/Card.module.css';
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
            En este apartado encontrará los proyectos que realice, tanto en la escuela como en la estadía técnica
          </p>
        </Link>

        <Link
          href="/components/skills/skill"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Mis habilidades <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
          Podrás ver mis habilidades, así como las herramientas que conozco y con las que he trabajado.
          </p>
        </Link>

        <Link
          href="/components/contact"
          className={styles.card}
        >
          <h2 className={inter.className}>
          Contactame <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Podrás contactarme por medio de mis redes sociales o si bien gustas mi correo electrónico   personal.          
          </p>
        </Link>

        
      </div>
    );
};

export default Card