import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Worksfeed } from "./components/Worksfeed";
import { Home } from "./pages/Home";
import { Works } from "./pages/Works";
import { Hamburgericon } from "./components/Hamburgericon";


function App() {
  return (
    <div className="bg-black">

            <div className="pointer absolute top-2 left-2 z-10 cursor-pointer lg:hidden">
              <Hamburgericon/>
              </div>

              <div className="text-xl font-bold text-white absolute top-2 right-3 lg:top-2 lg:left-1 z-10">
                    Unofficial Filmmaker
              </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
              
          </Route>
          <Route path="/works" element={<Works/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
