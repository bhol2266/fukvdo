import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import Script from 'next/script';
import NProgress from 'nprogress';
import BannerAds from '../components/Ads/BannerAds';
import Banner_for_chutlund2 from '../components/Banner_for_chutlund2';
import Footer from '../components/Footer';
import { LoginModal } from '../components/ModalLogin';
import Navbar from '../components/Navbar';
import { AuthContextProvider } from '../context/AuthContext';
import VideoState from '../context/videos/VideoState';
import '../styles/globals.css';
import '../styles/nProgress.css';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const currentRoute = router.pathname;

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  return (
    <>
      <Head>
        <meta name="asg_verification" content="vVcWCcbbgmnqv221hpAjPojb" />
        <meta name="Trafficstars" content="48702" />
        <meta name="6a97888e-site-verification" content="16cdfe6e8685f083041f5af956d45bae"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.chutlunds.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logo.png" />
      </Head>


      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-6JFQKLE3DK"
      />

      <Script id="gtm-script" strategy="afterInteractive">
        {` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-6JFQKLE3DK');`}
      </Script>


      <AuthContextProvider>
        <VideoState>
          <Navbar />
          <Banner_for_chutlund2 />
          <LoginModal />
          <div className={`${currentRoute == "/membership" ? "" : "lg:w-11/12 lg:mx-auto bg-semiblack"}`}>
            <Component {...pageProps} />
          </div>
          <hr />
          {currentRoute != "/membership" && <Footer />}
          <BannerAds/>
          <BannerAds/>
        </VideoState>
      </AuthContextProvider>

    </>
  );
}

export default MyApp;
