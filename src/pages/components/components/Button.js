import styles from '@/styles/ButtonComponent.module.css';
import Link from 'next/link';

function ButtonLink({title, link = '/', tart = ''}) {
    return <Link 
        className={styles.informacion_cv_link} 
        href={link} download
        target={tart}
    >{title}</Link>;
};

export default ButtonLink;