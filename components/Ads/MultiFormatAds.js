import Script from "next/script";

function MultiformatAds() {

    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();

    return (
        <div className="">

            <Script
                type="text/javascript"
                src="//cdn.tsyndicate.com/sdk/v1/bi.js"
                data-ts-spot="f5d2c5a9866d46d092156555c188ab05"
                data-ts-width="300"
                data-ts-height="250"
                data-ts-extid="{extid}"
                async
                defer
            />

        </div>
    )

}

export default MultiformatAds;
