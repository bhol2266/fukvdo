import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from 'react';


function Outstreams() {


    const [videoPage, setvideoPage] = useState(false);
    const router = useRouter();

    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();


    useEffect(() => {
        if (window.location.href.includes('video')) {
            setvideoPage(true)
        }

    }, []);

    return (

        <div className="fixed bottom-4 right-0 z-10 w-2/5  lg:w-1/5 ">
            <div id="ts_ad_video_1lcvn"></div>

            {/* <Script src="//cdn.tsyndicate.com/sdk/v1/outstream.video.js"  strategy="beforeInteractive" />
            <Script
                id={uniqid}
                dangerouslySetInnerHTML={{
                    __html: ` TSOutstreamVideo({
                        spot: "cac149c5f3454aa48e0bd3aa3e3ae2ff",
                        containerId: "ts_ad_video_1lcvn",
                        cookieExpires: "4",
                         extid: "{extid}",
                    });`,
                }}
            /> */}



            {/* Exoclick Outstream (named as video slider ads in Exoclick) */}


            {/* <ins className="eas6a97888e31" data-zoneid="5393888"></ins>
            <Script src="https://a.magsrv.com/ad-provider.js" strategy="beforeInteractive" />
            <Script
                id={uniqid}
                dangerouslySetInnerHTML={{
                    __html: ` (AdProvider = window.AdProvider || []).push({"serve": { }})`,
                }}
            />

 */}


        </div>
    )
}

export default Outstreams;
