import React from 'react'
import { useRouter } from "next/router";
import Link from 'next/link';
// import categories from "../JsonData/categoryImages/data.json"

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function  Sidebar() {
    const router = useRouter();



    return (
        <div className='hidden md:flex md:flex-col border-[2.5px] border-[rgba(187, 187, 187, 0.41)] rounded-[12px]  h-fit pb-8 basicMargin_sidebar'>

            
        </div>
    )
}

export default Sidebar