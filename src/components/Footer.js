



export function Footer(){

    return (
        <div className="grid grid-cols-2 gap-4 items-center border-t-2 border-gray-100 p-4">
            <div className="text-white">
                <h1 className="text-lg font-semibold mb-2">About us</h1>
                <p className="text-sm">This is some dummy copy. You’re not really supposed to read this dummy copy</p>
            </div>

            <div className="flex gap-4">
                <img src="assests/instalogo.png"/>
                <img src="assests/ytlogo.png"/>
            </div>
        </div>
    )
}