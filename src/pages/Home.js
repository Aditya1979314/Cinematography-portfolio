import { Brands } from "../components/Brands";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { Worksfeed } from "../components/Worksfeed";




export function Home(){
    return (
        <div>
              <Hero/>
              <Worksfeed/>
              <Brands/>
              <Contact/>
        </div>
    )
}