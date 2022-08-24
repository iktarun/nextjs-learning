import Head from "next/head";
import Footer from "../components/Footer";
import styles from "../styles/about.module.css";

function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Free resources" />
      </Head>
      <div className={styles.highlight}>About</div>
    </>
  );
}

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
