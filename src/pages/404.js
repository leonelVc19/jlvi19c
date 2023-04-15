import '@/pages';
import Link from 'next/link';
import styles from '@/styles/Custom404.module.css';
export default function Custom404() {
    return ( 
    <div className={styles.sections}>
        <h1>404 - Page Not Found</h1>
        <Link href="/">
                Go back home
        </Link>
    </div>);
}