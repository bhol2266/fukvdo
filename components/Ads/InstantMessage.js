import Script from "next/script";
import { useContext, useEffect } from 'react';
import videosContext from '../../context/videos/videosContext';


function InstantMessageAds() {

    useEffect(() => {
        if (window.AdProvider) {
            window.AdProvider.push({ serve: {} });
        }
    }, []);

    //Outstream Ads is replaced in place of banner ads

    const context = useContext(videosContext);


    return (

        <div className={`max-w-full`}>



<Script data-cfasync="false" async="async" type="text/javascript" src="//mgyccfrshz.com/q/tdl/95/dnt/2011110/kep.js"></Script>

            {/* Mobile   */}

            {/* <div className='lg:hidden'>

                <Script
                    id="instantMessageMobile"
                    strategy="beforeInteractive"
                    src="https://syndication.realsrv.com/splash.php?idzone=4580188&capping=0"
                />


            </div> */}


            {/* Web  */}

            {/* <div className='hidden lg:flex'>

                <Script
                    id="instantMessageWeb"
                    strategy="beforeInteractive"
                    src="https://syndication.realsrv.com/splash.php?idzone=4813390"
                />
            </div> */}


        </div >
    )
}

export default InstantMessageAds;
