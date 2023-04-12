import styles from '@/styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
function NavBar() {
    const router = useRouter();


    return(
        <header className={styles.header}>
            <Link className={styles.t} href="/">
                <h2 className={styles.titleLogo}>JLVI19C</h2> 
            </Link>
            <nav className={styles.nav}>
                <Link href="/" className="nav-link">Inicio</Link>
                <Link href="/components/contact" className="nav-link"> Contacto</Link>
                <Link href="/components/MyProjects/project" className="nav-link">Mis proyectos</Link>
            </nav>
        </header>
        );
};

export default NavBar;