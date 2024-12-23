import { useEffect, useRef } from "react"
import { Link, resolvePath } from "react-router-dom";



export function Worknavbar({links,setpresentlink}){
const navbarRef = useRef(null);
const linksRef = useRef([]);

function navbarscroll(){
    const navbar = navbarRef.current;
    const navbarcenter = navbar.offsetWidth/2;

linksRef.current.forEach((link)=>{
    if(link){
        const rect = link.getBoundingClientRect();
        const linkcenter = rect.left + rect.width/2;

        if(Math.abs(navbarcenter - linkcenter) < rect.width/2){
            link.classList.remove('text-sm', 'opacity-50')
            link.classList.add('text-2xl')
            setpresentlink(link.innerText)
        }else{
            link.classList.remove('text-2xl')
            link.classList.add('text-sm', 'opacity-50')
        }
    }
})
}

useEffect(()=>{
const navbar = navbarRef.current;

if(navbar){
    navbar.addEventListener('scroll',navbarscroll);
}

return ()=>{
    if(navbar){
        navbar.removeEventListener('scroll',navbarscroll)
    }
}
},[])

useEffect(()=>{
navbarscroll();

},[])


    return (
        <div ref={navbarRef} className="flex items-center gap-20 w-full h-20 p-4 pr-40 pl-40 snap-x overflow-x-auto scroll-x-smooth text-white text-lg font-bold">
       
        {
            links.map((link,index)=>{
                return <Link className="text-sm opacity-50 snap-center" ref={(el)=>linksRef.current[index] = el}>{link}</Link>
            })
        }
        </div>
    )
}