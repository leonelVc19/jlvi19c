import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';
function NavBar() {


    return(
        <header className={styles.header}>
            <Link className={styles.t} href="/">
                <h2 className={styles.titleLogo}>JLVI19C</h2> 
            </Link>
            <nav className={styles.nav}>
                <div className={styles.nav_link}>
                    <Link href="/" >Inicio</Link>
                </div>
                <Link href="/components/contact" className={styles.nav_link}>Contacto</Link>
                <Link href="/components/MyProjects/project" className={styles.nav_link}>Mis proyectos</Link>
                <Link href="/components/skills/skill" className={styles.nav_link}>Acerca de</Link>
            </nav>
        </header>
    );
};

export default NavBar;