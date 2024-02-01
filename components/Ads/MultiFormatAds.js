import { Banner } from "exoclick-react";
import { useContext } from 'react';
import videosContext from '../../context/videos/videosContext';
import Script from "next/script";
import Head from "next/head";


function MultiformatAds() {

    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();

    return (
        <div className="bg-white  overflow-hidden mx-auto w-[350px] lg:w-[700px] xl:w-[900px]  my-2">


            <script data-cfasync="false" type="text/javascript" src="//t7cp4fldl.com/lv/esnk/2010930/code.js" async className="__clb-2010930"></script>
        </div>
    )
}

export default MultiformatAds;
