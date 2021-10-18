import styles from './hero.module.scss';

export default function Hero() {
    return <div className={ `container ${ styles.wrapper }` }>
        <img src="/me.jpg" alt="Moi" className={ styles.photo } />

        <h2>Anthony Moyart</h2>

        <h1>
            Développeur back-end web<br />
            PHP/Symfony - Kotlin/Ktor
        </h1>

        <h3>Expert en développement d’API REST et applications deamons</h3>
    </div>;
}
