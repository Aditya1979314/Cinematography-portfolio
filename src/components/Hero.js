import heroimage from "../assests/heroimagedesktop.png"
import { Hamburgericon } from "./Hamburgericon"


export function Hero(){

    return (
        <div className="h-svh">
        <div className="h-full bg-hero-phone lg:bg-hero-desktop bg-center bg-cover bg-no-repeat ">
              <div className="h-full bg-black opacity-60"></div>


              {/* <div className="text-xl font-bold text-white absolute top-2 right-3 lg:top-2 lg:left-1">
                    Unofficial Filmmaker
              </div> */}

              <div className="text-2xl text-white absolute top-32 left-5">
              Creating Films That Speak <br/>Beyond Words
              </div>

              <button className="cursor-pointer text-2xl absolute bottom-24 left-8 bg-black border-white border-2 px-6 py-3  text-white hover:text-black hover:bg-white hover:border-black">
                My works
              </button>
        </div>
        </div>
    )
}