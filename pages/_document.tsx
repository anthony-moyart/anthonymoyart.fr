import { Head, Html, NextScript, Main } from 'next/document';
import Document from 'next/document';

export default class CustomDocument extends Document {
    render(): JSX.Element {
        return <Html>
            <Head>
                <title>Anthony Moyart - Développeur backend / web</title>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    }
}
