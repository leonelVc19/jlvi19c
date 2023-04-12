import styles from '@/styles/Project.module.css';

function ComponentProject({number, title, text, }) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.box}>
                    <div className={styles.content}>
                        <h2>{number}</h2>
                        <h3>{title}</h3>
                        <p>{text}</p>
                        <a href="">Mas Informacion</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComponentProject;