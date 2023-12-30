import { Outstream, Placeholder } from "exoclick-react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from 'react';


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


            
        </div>
    )
}

export default Outstreams;
