import Header from '../components/header';
import Hero from '../components/home/hero';
import MainSkills from '../components/home/main-skills';
import SecondarySkills from '../components/home/secondary-skills';
import Footer from '../components/footer';

export default function HomePage() {
    return <>
        <Header />
        <Hero />
        <MainSkills />
        <SecondarySkills />
        <Footer />
    </>;
}
