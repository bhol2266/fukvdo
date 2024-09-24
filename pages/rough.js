import Script from "next/script";
import Videos from "../components/Videos";
import { scrapeVideos } from "../config/spangbang";

function Rough({ video_collection }) {
    return (

        <div>

            <div className="m-2 p-2 flex mb-4 items-start">
                <div className="bg-slate-500 flex-grow aspect-video basis-3/4 3xl:basis-4/5">im working player</div>

                <div className="hidden lg:block flex-grow basis-1/4 3xl:basis-1/5 bg-blue-500">
                    <div className="mx-1 mb-2 rounded bg-pink-300 aspect-video">Video item 1</div>
                    <div className="mx-1 mb-2 rounded bg-blue-300 aspect-video">Video item 2</div>
                    <div className="mx-1 mb-2 rounded bg-yellow-300 aspect-video">Video item 3</div>
                    <div className="hidden 3xl:block m-2 rounded bg-purple-300 aspect-video">Video item 5</div>
                </div>
            </div>


            <Videos data={video_collection} />

        </div>
    );
}

export default Rough;


export async function getStaticProps(context) {


    let href = `https://spankbang.party/`;

    const obj = await scrapeVideos(href)
    const finalDataArray = obj.finalDataArray
    const pages = obj.pages

    return {
        props: {
            video_collection: finalDataArray,
            pages: pages
        }
    }

}

