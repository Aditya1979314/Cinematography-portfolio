import { Link, useNavigate } from "react-router-dom";
import InstagramIcon from "./Instagramicon";
import { Yticon } from "./Yticon";



export function Phonenavbar({navbaropen,setnavbaropen}){
    const navigate = useNavigate();

    function navlinkhandler(link){
    if(navbaropen === true){
      setnavbaropen(false);
      navigate(link)
    }
    }

    return (
        <div className="lg:hidden z-30 bg-[#0F0F0F] text-white absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center">
                <div className="h-2/3 flex flex-col justify-around items-center">
                    <p onClick={()=>navlinkhandler('/')} className="text-xl font-bold">Home</p>
                    <p onClick={()=>navlinkhandler('/works')} className="text-xl font-bold">Works</p>
                    <p className="text-xl font-bold">Contact</p>
                    <Link className="text-xl font-bold">About</Link>
                    <a href="https://instagram.com/unofficial_filmmaker" target="_blank"><InstagramIcon/></a>
                    <a href="https://www.youtube.com/@UnofficialFilmMaker" target="_blank"><Yticon/></a>
                    </div>
                  </div>
    )
}


export default Phonenavbar;