import styles from '@/styles/Navbar.module.css';
import Image from 'next/image'

function NavBar() {
    return(
        <header className={styles.header}>
            <a className={styles.t} href="https://www.facebook.com/juanleonel.vazqueziglesias.5/"
                target="_blank"
            >
            <Image
                src="/komi.jpg" 
                alt="logo"
                width={50}
                className={styles.logo}
                height={30}
                priority
            />
                <h2 class="name-company">JLVI19C</h2> 
            </a>
            <nav className={styles.nav}>
                <a href="" class="nav-link">Inicio</a>
                <a href="" class="nav-link">Contacto</a>
                <a href="" class="nav-link">Mis proyectos</a>
            </nav>
        </header>
        );
};

export default NavBar;