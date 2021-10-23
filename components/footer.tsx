import Link from 'next/link';
import styles from './footer.module.scss';
import { links, routes } from '../utils/links';

interface SocialRef {
    type: string;
    label: string;
    link: string;
}

const whereToFindMe: SocialRef[] = [
    {
        type: 'Malt',
        label: 'Anthony Moyart',
        link: links.socials.malt,
    },
    {
        type: 'GitHub',
        label: '@anthony-moyart',
        link: links.socials.github,
    },
    {
        type: 'Twitter',
        label: '@anthony_moyart',
        link: 'https://www.twitter.com/anthony_moyart',
    },
    {
        type: 'Mail',
        label: 'contact@anthonymoyart.fr',
        link: `mailto:${ links.contactMail }`,
    },
];

export default function Footer() {
    return <footer className={ `dark-bg ${ styles.wrapper }` }>
        <div className="container three-col-grid">
            <div>
                <h4>Où me trouver</h4>
                <ul className="list--unstyled">
                    { whereToFindMe.map(it => <li key={ it.link }>
                        <a href={ it.link } target="_blank">{ it.type }: { it.label }</a>
                    </li>) }
                </ul>
            </div>

            <div>
                <h4>Plan du site</h4>
                <ul className="list--unstyled">
                    { Object.values(routes).map(it => <li key={ it.path }>
                        <Link href={ it.path }>{ it.label }</Link>
                    </li>) }
                </ul>
            </div>

            <div>
                <h4>Autres</h4>
                <ul className="list--unstyled">
                    <li>
                        <a href="/legals">Mentions légales</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
}
