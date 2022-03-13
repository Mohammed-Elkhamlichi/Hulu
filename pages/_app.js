import Layout from "../components/Layout";
import "../styles/globals.css";
import { HuluContext } from "../context/context";

function MyApp({ Component, pageProps }) {
    return (
        <HuluContext>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </HuluContext>
    );
}

export default MyApp;
