import '../styles/global.scss'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return <>
        <Head>
            <title>Anthony Moyart - Développeur backend / web</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
    </>
}
