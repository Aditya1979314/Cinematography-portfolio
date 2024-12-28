import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Worksfeed } from "./components/Worksfeed";
import { Home } from "./pages/Home";
import { Works } from "./pages/Works";
import { Hamburgericon } from "./components/Hamburgericon";
import { useState } from "react";
import InstagramIcon from "./components/Instagramicon";
import { Yticon } from "./components/Yticon";
import Phonenavbar from "./components/Phonenavbar";
import { Desktopnav } from "./components/Desktopnav";
import { Footer } from "./components/Footer";


function App() {
const[navbaropen,setnavbaropen] = useState(false);


  return (
    <div className="bg-black">
      <BrowserRouter>
            <div className="pointer absolute top-2 left-2 z-40 cursor-pointer lg:hidden">
              <Hamburgericon setnavbaropen={setnavbaropen} navbaropen={navbaropen}/>
              </div>

              {navbaropen && (
              <div
               className="lg:hidden relative top-0 left-0 h-full w-full z-20"
               onClick={() => setnavbaropen(false)} 
               ></div>
               )}

            { navbaropen && <Phonenavbar setnavbaropen={setnavbaropen} navbaropen={navbaropen}/>}
            
            <div className="absolute top-2 z-20 w-full flex justify-end items-center">
            <Desktopnav/>
              </div>
              
              <div className="text-xl font-bold text-white absolute top-2 right-3 lg:top-2 lg:left-2 z-10">
                    Unofficial Filmmaker
              </div>

      
        <Routes>
          <Route path="/" element={<Home/>}>
              
          </Route>
          <Route path="/works" element={<Works/>}/>
        </Routes>
      </BrowserRouter>
      <div className="md:pt-8"><Footer/></div>
    </div>
  );
}

export default App;
