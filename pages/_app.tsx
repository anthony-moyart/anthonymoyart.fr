import '../styles/global.scss'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return <>
        <Head>
            <title>Anthony Moyart - Développeur backend / web</title>
        </Head>
        <Component {...pageProps} />
    </>
}
