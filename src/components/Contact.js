


export function Contact(){

    return (
        <div className="p-2 mt-12 h-svh">
            <h1 className="text-3xl text-white font-bold text-center">Get in touch</h1>

            <div className="h-4/5 mt-12 py-4 my-4">
            <div className="h-full bg-contact-phone bg-cover bg-center bg-no-repeat relative">
            <div className="h-full bg-black opacity-50"></div>

              <div className="absolute top-0 left-0 w-full h-full">
                <div className="h-full flex flex-col items-center justify-around">
              <input placeholder="Name" className="px-8 py-4 bg-black text-white border-2 border-gray-100"/>
            <input placeholder="Email"  className="px-8 py-4 bg-black text-white border-2 border-gray-100"/>
            <input placeholder="Phone"  className="px-8 py-4 bg-black text-white border-2 border-gray-100"/>
            <input placeholder="Message"  className="py-12 px-8 bg-black text-white border-2 border-gray-100"/>
            <button className="bg-sky-400 hover:bg-sky-300 px-8 py-4 rounded-md text-white">Submit</button>
                </div>
                </div>  
            </div>
            </div>
        </div>
    )
}