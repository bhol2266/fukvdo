import Script from "next/script";

function PopunderAds() {


    return (
        <div className="flex items-center justify-center">

            <Script
                type="text/javascript"
                src="//cdn.tsyndicate.com/sdk/v1/p.js"
                data-ts-spot="50ac8f7dda1d420f9102b11386adfa0a"
                data-ts-extid="{extid}"
                data-ts-session-duration="300"
                data-ts-count="5"
                data-ts-mode="selective"
                async
                defer
            />

        </div>
    )

}

export default PopunderAds;
