"use client"

import Navbar from "@/app/components/Navbar"
import { useEffect, useState } from "react"

export default function SingleItems({
    params}:{
        params:{mainpage:string}
    }){
        const [movie, setMovie] = useState()

        const getMovie1 = () =>{
            fetch(`https://api.themoviedb.org/3/movie/${params.mainpage}?api_key=c335ae1ffb9a62f766ee249471af6986`)
            .then((res) => res.json())
            .then((movie) => {
                setMovie(movie)
            })
            // .then(json => setMovie(json.results))
        }
        useEffect(()=>{
            getMovie1()
        },[])
        
        // console.log(movie)

        
        return (
            <>
            <div style={{backgroundImage:'linear-gradient(to right,rgba(0, 0, 0, 1),rgba(0, 0, 0, .7),rgba(0, 0, 0, 0)),url(../../assets/images/spotlight_1.jpg)'}} className="w-screen h-screen z-[-1]">
                <div className="flex pr-6 bg-black items-center">
                    <Navbar />
                    <button className="px-3 py-2 h-min bg-red-600 font-bold rounded">Logout</button>
                </div>
                <div className="px-20">
                    <div className="mt-[250px]">
                        <div className="w-[200px] h-[100px]">
                            <img src="/assets/images/logo.png" alt="" />
                        </div>
                        <div className="w-[600px]">
                            <h3 className="text-3xl">Leo</h3>
                            <div className="flex text-gray-500 gap-3 text-lg">
                                <p>2023</p>
                                <span>|</span>
                                <p>U/A 7+</p>
                                <span>|</span>
                                <p>1h 47m</p>
                                <span>|</span>
                                <p>kids</p>
                            </div>
                            <div className="text-lg ">
                                <p className="text-justify py-4">adam akjj;sakf sdalkfj slk;dfj lksdajfhlk sdafoipsdaf sdf psoda jfl; sdkajfs ldfk laskjf alskdf asdjifa sldfijeoipf alsdkfj aosief asledf jaoi alskdfj asdifjasldkfjoiaf asldfj woeif asdl;fjasdl fsad</p>
                                <p><span className=" text-gray-500 ">Starring: </span> adam sandler, Bill Burr, Cecily Strong</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="px-20 flex flex-col">
                <hr  className="h-1 "/>
                <div className="w-full py-6 flex justify-center">

                    <p className="text-xl w-[600px] text-center">Adam Sandler stars in this clever coming-of-age comedy with the voices of Bill Burr, Cecily Strong, Jason Alexander and more.</p>
                </div>
                <hr  className="h-1 "/>
            </div>
            <div className="px-20 flex flex-col">
                <div>
                    <h2>Videos</h2>
                    <span>|</span>
                    <h4>Leo</h4>
                </div>
                <div>

                    <div>
                        <video src="/assets/videos/tv_video.m4v"></video>
                    </div>
                    <p>Trailer: leo</p>
                </div>
            </div>
            <div className="px-20 flex flex-col">
                <div>
                    <h2>More Details</h2>
                </div>
                <div>
                    <div>
                        <div>
                            <h6>Watch offline</h6>
                            <p>Download and watch everywhere you go.</p>
                        </div>
                        <div>
                            <h6>Watch offline</h6>
                            <p>Download and watch everywhere you go.</p>
                        </div>
                        <div>
                            <h6>Watch offline</h6>
                            <p>Download and watch everywhere you go.</p>
                        </div>
                        <div>
                            <h6>Watch offline</h6>
                            <p>Download and watch everywhere you go.</p>
                        </div>
                    </div>
                    <div>
                        <h6>Subtitles</h6>
                        <p>English</p>
                    </div>
                </div>
                <div>
                    <h6>Cast</h6>
                    <div>
                        <p>Adam Sandler</p>
                        <p>Adam Sandler</p>
                        <p>Adam Sandler</p>
                        <p>Adam Sandler</p>
                        <p>Adam Sandler</p>
                        <p>Adam Sandler</p>
                        <p>Adam Sandler</p>
                        <p>Adam Sandler</p>
                        <p>Adam Sandler</p>
                        <p>Adam Sandler</p>
                        <p>Adam Sandler</p>
                    </div>
                </div>
            </div>
            </>
        )
    }