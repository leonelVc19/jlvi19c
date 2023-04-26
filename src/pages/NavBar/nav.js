import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';
function NavBar() {


    return(
        <header className={styles.header}>
            <Link className={styles.t} href="/">
                <h2 className={styles.titleLogo}>Iglesias</h2> 
            </Link>
            <nav className={styles.nav}>
                <div className={styles.nav_link}>
                    <Link href="/" >Inicio</Link>
                </div>
                <Link href="/components/contact" className={styles.nav_link}>Contactame</Link>
                <Link href="/components/projects/project" className={styles.nav_link}>Mis proyectos</Link>
                <Link href="/components/about/about" className={styles.nav_link}>Acerca de</Link>
            </nav>
        </header>
    );
};

export default NavBar;