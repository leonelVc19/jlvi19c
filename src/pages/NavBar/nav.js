import styles from '@/styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NavBar() {
    const router = useRouter();


    return(
        <header className={styles.header}>
            <a className={styles.t} href="https://jlvi19c.vercel.app/"
                target="_blank"
            >
                <h2 className={styles.titleLogo}>JLVI19C</h2> 
            </a>
            <nav className={styles.nav}>
                <a href="" className="nav-link">Inicio</a>
                <a href="" className="nav-link">Contacto</a>
                <a href="" className="nav-link">Mis proyectos</a>
            </nav>
        </header>
        );
};

export default NavBar;