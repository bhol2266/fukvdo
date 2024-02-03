import { useEffect, useRef } from "react";
import Script from "next/script";

function InterstitialAds({ command }) {

    var clickRefIntertitials = useRef(null);

    useEffect(() => {

        setTimeout(() => {
            clickRefIntertitials.current.click();
            console.log("clickRefIntertitials");
        }, 5000);


    }, []);

    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();
    return (
        <div className="flex items-center justify-center">


            <link
                rel="stylesheet"
                href="//cdn.tsyndicate.com/sdk/v1/interstitial.ts.css"
            />
            <Script
                id={uniqid}
                src="//cdn.tsyndicate.com/sdk/v1/interstitial.ts.js"
                strategy="beforeInteractive"
            ></Script>
            <Script
                id={uniqid + "dsafsadf"}
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            InterstitialTsAd({
              spot: "c398381ddfb042828ce4a081508161c9",
              extid: "{extid}",
            });
          `,
                }}
            ></Script>

        </div>
    )
}

export default InterstitialAds;
