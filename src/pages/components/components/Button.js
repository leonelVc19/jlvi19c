import styles from '@/styles/ButtonComponent.module.css';
import Link from 'next/link';

function Button({title, link = '/'}) {
    return <Link className={styles.informacion_cv_link} href={link} download>{title}</Link>;
};

export default Button;