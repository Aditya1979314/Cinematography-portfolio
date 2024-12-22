import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Worksfeed } from "./components/Worksfeed";
import { Home } from "./pages/Home";
import { Works } from "./pages/Works";


function App() {
  return (
    <div className="bg-black">

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
