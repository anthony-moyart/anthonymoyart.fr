import Link from 'next/link';
import styles from './header.module.scss';
import { routes } from '../utils/links';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();

    const isActive = (routeKey) => {
        const path = routes[routeKey].path || null
        if (!path) {
            return false;
        }

        return path === router.pathname;
    };

    console.log(router.pathname);

    return <header className={ `${ styles.wrapper } container` }>
        <ul className={ styles.nav }>
            { Object.keys(routes).map(it => <li key={ it } className={ isActive(it) ? styles.active : null }>
                <Link href={ routes[it].path }>{ routes[it].label }</Link>
            </li>) }
        </ul>

        <ul className={ styles.logos }>
            <img
                src="/logo-malt.png"
                srcSet="/logo-malt@2x.png 2x"
                alt="Malt"
            />

            <img
                src="/logo-github.png"
                srcSet="/logo-github@2x.png 2x"
                alt="GitHub"
            />
        </ul>
    </header>
}
