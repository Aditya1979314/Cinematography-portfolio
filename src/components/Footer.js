



export function Footer(){

    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-4 items-center border-t-2 border-gray-100 p-4 lg:p-16">
            <div className="text-white justify-center col-start-1 col-span-2 row-start-1 row-span-2 lg:w-1/3">
                <h1 className="text-lg font-semibold mb-2 lg:text-xl">About us</h1>
                <p className="text-sm lg:text-md">This is some dummy copy. You’re not really supposed to read this dummy copy</p>
            </div>

            <div className="flex gap-4 lg:justify-center">
                <img src="assests/instalogo.png"/>
                <img src="assests/ytlogo.png"/>
            </div>
        </div>
    )
}