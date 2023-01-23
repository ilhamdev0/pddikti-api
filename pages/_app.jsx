import 'styles/global.css'

export default function MyApp({ Component, pageProps }) {
    console.log("author: https://ilhamdev.pages.dev");
    return <Component {...pageProps} />
}