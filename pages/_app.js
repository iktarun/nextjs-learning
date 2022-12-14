// import Head from "next/head";
// import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/global.css";
import "../styles/layout.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      {/* <Header /> */}
      {/* <Head>
        <title>About Page</title>
        <meta name="description" content="You Tube resources" />
      </Head> */}
      <Component {...pageProps} /> <Footer />
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
