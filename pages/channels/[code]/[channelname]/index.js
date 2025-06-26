import { UserAuth } from "@/context/AuthContext";
import { LinkIcon, PlusIcon } from '@heroicons/react/outline';
import { getCookie } from 'cookies-next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import Pagination from '../../../../components/Pagination';
import Header from '../../../../components/Pornstar_Channels/Header';
import Videos from "../../../../components/Videos";
import { checkSubscribedChannel, updateSubcribedChannels } from '../../../../config/firebase/lib';
import { updateViewChannels_Cookie } from '../../../../config/utils';



function Index({ video_collection, pages, channel_name, channel_link, collageImages, channel_subscriber, channel_by,channel_image }) {

    const router = useRouter();
    const { code, channelname, isReady } = router.query


    const { setLoginModalVisible } = UserAuth();
    const currentPageNumberURL = '1'
    const [isSubscribed, setIsSubscribed] = useState(false);


    useEffect(() => {
        const fetchSubscriptionStatus = async () => {
            const subscribed = await checkSubscribedChannel(channel_name);
            setIsSubscribed(subscribed);
        };
        fetchSubscriptionStatus();


        const obj = {
            channelName: channel_name,
            href: `/${code}/channel/${channelname}/`,
            imageUrl: channel_image

        }

        updateViewChannels_Cookie(obj)

    }, [code, channelname]);


    async function clickSubscribe() {

        if (!getCookie("email")) {
            setLoginModalVisible(true)
            return
        }

        const obj = {
            channelName: channel_name,
            href: `/${code}/channel/${channelname}/`,
            imageUrl: channel_image

        }


        if (isSubscribed) {
            // Remove subscription
            await updateSubcribedChannels(obj, "remove");
            setIsSubscribed(false); // Update state to reflect removal
        } else {
            // Add subscription
            await updateSubcribedChannels(obj, "add");
            setIsSubscribed(true); // Update state to reflect addition
        }

    }

    if (router.isFallback) {
        return (
            <div className="flex justify-center mx-auto mt-10 ">
                <BeatLoader loading size={25} color={'#232b2b'} />
            </div>
        )
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    return (
        <>


            <Head>
                <title>{`${capitalizeFirstLetter(channel_name.replace('+', " ").replace("+", " "))} Porn Videos - FuckVideo`}</title>
                <meta name="description" content={`Check out the best porn videos and playlists from channel ${capitalizeFirstLetter(channel_name.replace('+', " ").replace("+", " "))}`} />
                <meta name="keywords" content="porn, xxx, streaming porn, HD porn, HD adult videos, HD pussy videos, sex movies, FuckVideo" />
                <meta property="og:title" content={`${capitalizeFirstLetter(channel_name.replace('+', " ").replace("+", " "))} Porn Videos - FuckVideo`} />
                <meta property="og:description" content={`Check out the best porn videos and playlists from channel ${capitalizeFirstLetter(channel_name.replace('+', " ").replace("+", " "))}`} />
                <meta name="twitter:title" content={`${capitalizeFirstLetter(channel_name.replace('+', " ").replace("+", " "))} Porn Videos - FuckVideo`} />
                <meta name="twitter:description" content={`Check out the best porn videos and playlists from channel ${capitalizeFirstLetter(channel_name.replace('+', " ").replace("+", " "))}`} />
                <link rel="canonical" href={`https://www.fuckvideo.live/channels/${code}/${channelname}`} />

            </Head>





            <div>

                <div className="relative h-[240px] sm:h-[290px] md:h-[260px] lg:h-[290px] xl:h-[300px] 2xl:h-[350px] 3xl:h-[370px]">
                    <div className="grid grid-cols-6 md:grid-cols-9 ">
                        {collageImages.map((thumbnail, index) => (
                            <div
                                key={index}
                                className="relative w-full h-auto"
                            >
                                <img
                                    src={thumbnail}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-auto aspect-video object-contain"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute flex top-[30px] sm:top-[100px] md:top-[50px] lg:top-[40px] xl:top-[50px] 2xl:top-[100px] 3xl:top-[120px]  left-[10px] items-b justify-between w-[calc(100%-20px)]">
                        <div>
                            <img
                                className="object-cover w-36 h-36 lg:w-44 lg:h-44 rounded-[15px] border-[1px] border-gray-200"
                                    src={channel_image}
                                alt={channel_name} loading="lazy"
                            />
                            <h2 className="text-lg lg:text-xl 2xl:text-2xl font-poppins text-gray-100 my-1 pl-1">
                                {capitalizeFirstLetter(channel_name.replace(/\+/g, " "))}
                            </h2>
                            <p className="text-xs lg:text-sm 2xl:text-md font-poppins text-gray-400 pl-1">
                                Channel by : {channel_by}
                            </p>
                        </div>

                        <div className="mt-auto flex flex-col space-y-4">
                            <Link legacyBehavior href={channel_link} rel="nofollow">
                                <a className="cursor-pointer h-fit flex items-center justify-center space-x-2 border-[1px] border-gray-300 px-3 lg:px-5 p-1.5 rounded-[20px] bg-semiblack text-white group">
                                    <LinkIcon className="h-4 lg:h-5 text-white" />
                                    <p className="text-sm lg:text-md 2xl:text-lg font-poppins">
                                        Visit
                                    </p>
                                </a>
                            </Link>


                            <div onClick={() => { clickSubscribe() }} className={` ${isSubscribed ? "bg-green-500  hover:bg-green-600" : "bg-red-500  hover:bg-red-600"} w-36 lg:w-44 mt-auto cursor-pointer h-fit flex items-center justify-center space-x-2 shadow-md text-white  p-1.5 rounded-[20px]`}>
                                {!isSubscribed &&
                                    <PlusIcon className="h-4 lg:h-5 text-white" />
                                }
                                <p className="text-sm lg:text-md 2xl:text-lg font-poppins">
                                    {isSubscribed ? "Subscribed" : "Subscribe"}
                                </p>
                                <p className="text-sm lg:text-md 2xl:text-lg font-poppins">
                                    {channel_subscriber}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>




                <Header keyword={channelname} pageNumber={currentPageNumberURL} code={code} />
                <Videos data={video_collection} type="premium" />
            </div>


            {/* PAGINATION */}
            <Pagination data={{ url: `/channels/${code}/${channelname}`, currentPageNumberURL: currentPageNumberURL, pages: pages, }} />







        </>
    )
}

export default Index


export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    code: 'l3',
                    channelname: 'kink+com'
                }
            }
        ],
        fallback: true // false or 'blocking'
    };
}





export async function getStaticProps(context) {

    const { code, channelname } = context.params;

    const parcelData = { url: `https://spankbang.party/${code}/channel/${channelname}/` };
        const API_URL = `${process.env.BACKEND_URL}getChannelVideos`;
        const rawResponse = await fetch(API_URL, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(parcelData),
        });

        const { finalDataArray, pages, channel_name, channel_subscriber, channel_by, channel_link, collageImages,channel_image } = await rawResponse.json();
        return {
            props: {
                video_collection: finalDataArray,
                pages: pages,
                channel_name: channel_name,
                channel_subscriber: channel_subscriber,
                channel_by: channel_by,
                channel_link: channel_link,
                collageImages: collageImages,
                channel_image: channel_image,

            }
        }
}


