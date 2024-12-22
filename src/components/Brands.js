



export function Brands(){
    return (
        <div>
            <h1 className="text-3xl text-center font-bold text-white p-2">Brand Collaborations</h1>

            <div className="grid grid-cols-2 gap-3 px-2 mt-8">
                <div>
                    <img className="w-full h-20 object-contain" src={"/assests/ktmlogo.png"}/>   
                </div>

                <div>
                    <img className="w-full h-20 object-contain" src={"/assests/tvslogo.png"}/>
                </div>
            </div>
        </div>
    )
}