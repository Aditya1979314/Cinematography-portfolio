



export function Brands(){
    return (
        <div className="mt-12 lg:px-8 lg:py-32"> 
            <h1 className="text-3xl md:text-4xl text-center font-bold text-white p-2">Brand Collaborations</h1>

            <div className="flex justify-around items-center px-4 pt-4 lg:px-1 mt-8">
                <div>
                    <img className="w-full h-20 md:h-40 object-contain" src={"/assests/ktmlogo.png"}/>   
                </div>

                <div>
                    <img className="w-full h-20 md:h-40 object-contain" src={"/assests/tvslogo.png"}/>
                </div>

            </div>
        </div>
    )
}