import { use, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Worknavbar } from "../components/Worknavbar";





export function Works(){
const[navs,setnavs] = useState(['Modelling','Wedding','Cinematic','Music','Editing','Cinematography'])
const[presentlink,setpresentlink] = useState("Modelling");
const[presentdata,setpresentdata] = useState([]);
const[desktopdata,setdesktopdata] = useState({});
const data = {
    Modelling: [
      "https://www.youtube.com/embed/ZcHTpqWcWFY?si=-lkcHbrW8l3sg6oU?modestbranding=1&rel=0&controls=1&autoplay=0&showinfo=0&iv_load_policy=3",
      "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6?modestbranding=1&rel=0&controls=1&autoplay=0&showinfo=0&iv_load_policy=3",
      "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6?modestbranding=1&rel=0&controls=1&autoplay=0&showinfo=0&iv_load_policy=3",
      "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6?modestbranding=1&rel=0&controls=1&autoplay=0&showinfo=0&iv_load_policy=3",
    ],
    Wedding: [
      "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
      "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
      "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
      "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
    ],
    Cinematic: [
      "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
      "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
      "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
      "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
    ],
    Music:[
        "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
        "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
        "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
        "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
    ],
    Editing:[
        "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
        "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
        "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
        "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
    ],
    Cinematography:[
        "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
        "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
        "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
        "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
    ]
  };


function onclickhandler(){
const currentcount = presentdata.length;
const newdata = data[presentlink].slice(currentcount,currentcount+2);
setpresentdata((prev)=>[...prev,...newdata]);
}

function onclickhandlerformediumscreen(nav){
  if(desktopdata[nav]){
    const currentarr = desktopdata[nav];
    const currentcount = currentarr.length;
    const newdata = data[nav].slice(currentcount,currentcount+3);
    setdesktopdata((prev) => ({
      ...prev,
      [nav]: [...currentarr, ...newdata], // Update the specific key while keeping the rest intact
    }));
  }
}

useEffect(()=>{
console.log(desktopdata)
},[desktopdata])

useEffect(()=>{
function initalrender(){
  const newdata = {};
  navs.forEach((nav)=>{
    newdata[nav] = data[nav].slice(0,3);
  })
  setdesktopdata(newdata);
}

initalrender();

},[])

useEffect(()=>{
function setinitaldata(){
    if(data[presentlink]){
        let fullarr = data[presentlink];
        let finalarr = fullarr.slice(0,2);
        setpresentdata(finalarr); 
    }
}

setinitaldata();
},[presentlink])


    return (
        <div className="pt-24 overflow-hidden">

        <div className="hidden md:block">
          {
            (navs.length > 0) && navs.map((nav)=>{
             return ( <div className="">
                 <h1 className="text-4xl font-bold text-white px-8">{nav}</h1>
                 <div className="grid grid-cols-3 p-6 gap-4">
                      {
                        (desktopdata) && (desktopdata[nav] || []).map((url)=>{
                          return (
                            <div className="w-full h-60 border-2 border-gray-100 mt-8">
                        <iframe className="w-full h-full" src={url} loading="lazy"></iframe>
                        </div>
                          )
                        })
                      }
                  </div>
                  <div className="flex justify-center items-center mt-8">
            <button onClick={()=>onclickhandlerformediumscreen(nav)} className="rounded-full cursor-pointer text-2xl bg-black border-white border-2 px-6 py-3  text-white hover:text-black hover:bg-white hover:border-black">Load More</button>
            </div>
              </div>)
            })
          }
        </div>

        <div className="flex flex-col items-center md:hidden">
          <Worknavbar links={navs}  setpresentlink={setpresentlink}/>
            

            <div className="">
                {
                   presentdata &&  presentdata.map((url)=>{
                        return  <div className="w-full h-60 border-2 border-gray-100 mt-8">
                        <iframe className="w-full h-full" src={url} ></iframe>
                        </div>
                    })
                }
            </div>

            <div className="flex justify-center items-center mt-8">
            <button onClick={onclickhandler} className="rounded-full cursor-pointer text-2xl bg-black border-white border-2 px-6 py-3  text-white hover:text-black hover:bg-white hover:border-black">Load More</button>
            </div>
        </div>

        

        </div>
    )
}