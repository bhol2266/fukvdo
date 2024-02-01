import Link from 'next/link'
import React from 'react'

export default function download() {
    return (
        <div>

            <a href='/livesex.png' download>Click to download</a>


            <Link className='m-[100px]' href='/app-debug.apk' target="_blank" download>Download</Link>



        </div>
    )
}
