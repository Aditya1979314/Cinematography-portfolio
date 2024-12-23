import { useState } from "react"
import { Link } from "react-router-dom";



export function Worksfeed(){
const[num,setnum] = useState(0);
const[data,setdata] = useState([
    [
        "https://www.youtube.com/embed/ZcHTpqWcWFY?si=-lkcHbrW8l3sg6oU",
        "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6"
    ],
    [
        "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6",
        "https://www.youtube.com/embed/vgpH9go537Q?si=NFqX6HNxFo9YMcD6"
    ],
    [
        "https://www.youtube.com/embed/gcOyAwm2zp8?si=0EgQ29yUz8d4djVu",
        "https://www.youtube.com/embed/gcOyAwm2zp8?si=0EgQ29yUz8d4djVu"
    ]
])


    return (
        <div className="px-4 h-svh border-white mt-2 flex flex-col justify-between">
            <h1 className="text-3xl font-semibold text-white text-center">WORKS</h1>

            <div className="text-white text-xl flex justify-around mt-8">
                <button className={`${(num === 0) ? "border-b-2 border-gray-100" : ""}`} onClick={(e)=>{
                    setnum(0)
                    }}>Cinematic</button>
                <button className={`${(num === 1) ? "border-b-2 border-gray-100" : ""}`} onClick={(e)=>{
                    setnum(1)
                }}>Wedding</button>
                <button className={`${(num === 2) ? "border-b-2 border-gray-100" : ""}`} onClick={(e)=>{
                    setnum(2)
                }
                }>Reels</button>
            </div>

            <div className="mt-8 border-white grid lg:grid-cols-3 lg:grid-cols-1 gap-x-12 gap-y-12">
                {data[num].map((url)=>{
                        return (
                            <div className="w-full h-60 border-2 border-gray-100">
                            <iframe className="w-full h-full" src={url} ></iframe>
                            </div>
                        ) 
                    })
                }
            </div>

            <div className="flex justify-center items-center mt-12">
            <Link to="/works" className="rounded-full cursor-pointer text-2xl bg-black border-white border-2 px-6 py-3  text-white hover:text-black hover:bg-white hover:border-black">Load More</Link>
            </div>
                
        </div>
    )
}