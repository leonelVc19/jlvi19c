import { Inter } from 'next/font/google'
import styles from '@/styles/Card.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

function Card() {
    return(
      <section className={styles.grid}>
        <Link
          href="/components/projects/project"
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
      </section>
    );
};

export default Card