import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';
function NavBar() {


    return(
        <header className={styles.header}>
            <Link className={styles.t} href="/">
                <h2 className={styles.titleLogo}>JLVI19C</h2> 
            </Link>
            <nav className={styles.nav}>
                <Link href="/" className="nav-link">Inicio</Link>
                <Link href="/components/contact" className="nav-link">Contacto</Link>
                <Link href="/components/MyProjects/project" className="nav-link">Mis proyectos</Link>
                <Link href="/components/skills/skill" className="nav-link">Acerca de</Link>
            </nav>
        </header>
    );
};

export default NavBar;