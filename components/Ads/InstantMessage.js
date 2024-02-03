import Script from "next/script";
import { useContext, useEffect } from 'react';
import videosContext from '../../context/videos/videosContext';


function InstantMessageAds() {

    //Outstream Ads is replaced in place of banner ads

    const context = useContext(videosContext);


    return (

        <div className={`max-w-full`}>





        </div >
    )
}

export default InstantMessageAds;
