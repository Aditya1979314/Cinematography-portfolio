import { Link } from "react-router-dom";
import InstagramIcon from "./Instagramicon";
import { Yticon } from "./Yticon";


export function Desktopnav(){
  


    return (
        <div className="hidden lg:block lg:flex lg:justify-around lg:items-center w-4/5 text-white">
            <Link to={'/'} className="text-md font-semibold">Home</Link>
                    <Link to={'/works'} className="text-md font-semibold">Works</Link>
                    <p className="text-md font-semibold ">Contact</p>
                    <Link className="text-md font-semibold">About</Link>
                    <a href="https://instagram.com/unofficial_filmmaker" target="_blank"><InstagramIcon/></a>
                    <a href="https://www.youtube.com/@UnofficialFilmMaker" target="_blank"><Yticon/></a>
        </div>
    )
}