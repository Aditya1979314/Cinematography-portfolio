import { use, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Worknavbar } from "../components/Worknavbar";





export function Works(){
const[presentlink,setpresentlink] = useState();
const[presentdata,setpresentdata] = useState([]);
const data = {
    Modelling: [
      "https://www.youtube.com/embed/ZcHTpqWcWFY?si=-lkcHbrW8l3sg6oU",
      "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
      "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
      "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
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

useEffect(()=>{
setpresentlink('Modelling')
},[])

    return (
        <div className="pt-24 overflow-hidden">
             
         

        <div className="flex flex-col items-center">
          <Worknavbar links={['Modelling','Wedding','Cinematic','Music','Editing','Cinematography']}  setpresentlink={setpresentlink}/>
            
            <div>
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