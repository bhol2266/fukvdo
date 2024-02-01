import { useRouter } from "next/router";
import { useContext, useEffect, useState } from 'react';
import Script from 'next/script'


function Outstreams() {


    const [videoPage, setvideoPage] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (window.location.href.includes('video')) {
            setvideoPage(true)
        }

    }, []);

    return (

        <div className="fixed bottom-4 right-0 z-10">

<Script data-cfasync="false" type="text/javascript" src="//12ezo5v60.com/bultykh/ipp24/7/bazinga/2011111" async></Script>
            
        </div>
    )
}

export default Outstreams;
