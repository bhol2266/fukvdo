import Script from "next/script";

function PopunderAds() {
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();

    return (
        <div className="flex items-center justify-center">


            <Script src="./rough.js" strategy="beforeInteractive" />
            <Script id={uniqid} data-cfasync="false" type="text/javascript" src="//ku42hjr2e.com/aas/r45d/vki/2010928/c85f697b.js" async
                onError="qgmjc()"></Script>


        </div>
    )
}

export default PopunderAds;
