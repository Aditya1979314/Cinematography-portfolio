import { Link } from "react-router-dom"
import heroimage from "../assests/heroimagedesktop.png"
import { Hamburgericon } from "./Hamburgericon"


export function Hero(){

    return (
        <div className="h-svh lg:h-screen">
        <div className="h-full bg-hero-phone lg:bg-hero-desktop bg-center bg-cover bg-no-repeat">
              <div className="h-full bg-gradient-to-b from-[#181818] to-black opacity-60"></div>



              <div className="text-2xl lg:text-6xl text-white absolute top-32 left-5 lg:left-24">
              Creating Films <br className="lg:block hidden"/> That Speak <br/>Beyond Words
              </div>

              <Link to={'/works'} className="cursor-pointer text-2xl lg:text-3xl absolute bottom-24 lg:bottom-44 left-8 lg:left-40 bg-black border-white border-2 px-6 py-3 lg:px-12 lg:py-6  text-white hover:text-black hover:bg-white hover:border-black">
                My works
              </Link>
        </div>
        </div>
    )
}