import { Brands } from "../components/Brands";
import { Contact } from "../components/Contact";
import { ContactDesktop } from "../components/ContactDesktop";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Worksfeed } from "../components/Worksfeed";




export function Home(){
    return (
        <div>
              <Hero/>
              <Worksfeed/>
              <Brands/>
              <div className="lg:hidden"><Contact/></div>
              <div className="hidden lg:block"><ContactDesktop/></div>
              <Footer/>
        </div>
    )
}