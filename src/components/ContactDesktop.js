

export function ContactDesktop(){

    return (
        <div className="grid grid-cols-2 grid-rows-6 px-28 py-16 md:px-16 md:py-24 md:gap-y-16">

            <div className="col-start-1 col-span-1 row-start-1 row-span-1">
            <h1 className="text-6xl md:text-5xl text-white font-bold text-center">Get in touch</h1>
            </div>

            <div className="col-start-1 col-span-1 row-start-2 row-span-5">
            <div className="h-full flex flex-col items-center justify-between">
              <input placeholder="Name" className="px-8 py-4 bg-black text-white border-2 border-gray-100"/>
            <input placeholder="Email"  className="px-8 py-4 bg-black text-white border-2 border-gray-100"/>
            <input placeholder="Phone"  className="px-8 py-4 bg-black text-white border-2 border-gray-100"/>
            <input placeholder="Message"  className="py-12 px-8 bg-black text-white border-2 border-gray-100"/>
            <button className="bg-sky-400 hover:bg-sky-300 px-8 py-4 rounded-md text-white">Submit</button>
                </div>
            </div>

            <div className="bg-contact-phone bg-cover bg-center bg-no-repeat h-full row-start-1 row-span-6">
                
            </div>

        </div>
    )
}