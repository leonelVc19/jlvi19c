import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';
import Button from "../components/components/Button";

function NavBar() {

    return(
        <header className={styles.header}>
            <Link className={styles.t} href="/">
                <h2 className={styles.titleLogo}>JLVI</h2> 
            </Link>
            <nav className={styles.nav}>
                <Button
                    title="Descargar CV"
                    link="https://jlvi-iglesias.s3.us-west-1.amazonaws.com/Juan+Leonel+Vazquez+Iglesias+CV.pdf"
                    tart="_blank"
                >
                </Button>
                <article className={styles.nav_link}>
                    <Link href="/" >Inicio</Link>
                </article>
                <Link href="/" className={styles.nav_link}>Mis proyectos</Link>
                <Link href="/components/about/about" className={styles.nav_link}>Acerca de</Link>
            </nav>
        </header>
    );
};

export default NavBar;