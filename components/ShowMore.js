

function ShowMore({ href }) {



    return (
        <a href={href}>

            <div className="mt-4 relative flex items-center justify-center pt-6 px-6 cursor-pointer">
                <hr className="w-full border-t-[0.5px] border-gray-500 mb-9" />
                <span className="absolute bg-semiblack text-gray-300 border-gray-400 border-[0.5px] px-[50px] py-1 rounded-[20px] transform -translate-y-1/2 hover:bg-gray-300 hover:text-semiblack pb-1.5">
                    Show more &gt;
                </span>
            </div>
        </a>
    );
}

export default ShowMore;
