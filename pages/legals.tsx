import Header from '../components/header';
import Footer from '../components/footer';

export default function Legals() {
    return <>
        <Header />
        <div className="container">
            <h1>Mentions légales</h1>

            <p>
                Le présent site, ainsi que son nom de domaine (<a
                href="https://www.anthonymoyart.fr/">www.anthonymoyart.fr</a>) sont tous deux déployés et hébergés par
                Netlify.
            </p>

            <p>
                Ce site est développé par la seule personne d’Anthony Moyart. Pour toute information complémentaire,
                adrressez votre demande à l’adresse <a href="mailto:legal@anthonymoyart.fr">legal@anthonymoyart.fr</a>.
            </p>

            <p>
                Ce site n’utilise aucun cookie.
            </p>

            <p>
                Ce site ne recueille aucune donnée personnelle.
            </p>
        </div>
        <Footer />
    </>
}
