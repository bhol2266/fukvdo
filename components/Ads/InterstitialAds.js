// components/InterstitialAd.js
import Head from 'next/head';
import Script from 'next/script';

const InterstitialAds = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="//cdn.tsyndicate.com/sdk/v1/interstitial.ts.css" />
            </Head>
            <Script
                src="//cdn.tsyndicate.com/sdk/v1/interstitial.ts.js"
                strategy="afterInteractive"
                onLoad={() => {
                    InterstitialTsAd({
                        spot: "c398381ddfb042828ce4a081508161c9",
                        extid: "{extid}",
                        cookieExpires: 1

                    });
                }}
            />
            <div id="interstitial-ad"></div>



        </>
    );
};


export default InterstitialAds;
