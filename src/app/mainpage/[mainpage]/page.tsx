"use client"

import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { MOVIE_IMG_URL } from "@/app/axiosConfig"
import { useEffect, useState } from "react"

interface Movie{
    title:string;
    release_date:Date;
    runtime:number;
    overview:string;
    poster_path:string;

}

export default function SingleItems({
    params}:{
        params:{mainpage:string}
    }){

        const [movie, setMovie] = useState<Movie |null>([])
        const [imageList, setImageList] = useState([])
        const [similarmovie, setSimilarmovie] = useState([])


        const [isLoading, setIsLoading] = useState(true)
        const [imageLoad, setimageLoad] = useState(true)

        // const request1 = fetch(`https://api.themoviedb.org/3/movie/${params.mainpage}/images?api_key=c335ae1ffb9a62f766ee249471af6986`).then(response => response.json());
        // const request2 = fetch(`https://api.themoviedb.org/3/movie/${params.mainpage}?api_key=c335ae1ffb9a62f766ee249471af6986`).then(response => response.json());
        // Promise.all([request1, request2])
        //     .then(([data1, data2]) => {
        //         // console.log(data1, data2);
        //         setImageList(data1.results)
        //         setMovieList(data2.results)
        //     })
        const getMovie = async () =>{
            try {

                // const res = await fetch(`https://api.themoviedb.org/3/movie/${params.mainpage}?api_key=c335ae1ffb9a62f766ee249471af6986`)
                const res = await fetch(`https://api.themoviedb.org/3/movie/${params.mainpage}?api_key=c335ae1ffb9a62f766ee249471af6986`)
                const movieData = await res.json();
                if(movieData){
                    setMovie(movieData)
                }
                console.log(movieData)


                    
                // setIsLoading(false)   
            } catch (error){
                console.error("error asdf",error)
            }
        }
        
        const getImage = async () =>{
            try {
                const res1 = await fetch(`https://api.themoviedb.org/3/movie/${params.mainpage}/images?api_key=c335ae1ffb9a62f766ee249471af6986`)
                const imageData = await res1.json();
                if(imageData){
                    setImageList(imageData)
                }
                console.log(imageList)
                setimageLoad(false)
            }catch(error){
                
            };
            
        }
        function time(input){
            const hour = Math.floor(input/60);
            const minits = input%60;
            return `${hour}h ${minits}m`
            
        }
        
        useEffect(()=>{
            getMovie()
            getImage()
            setIsLoading(false)  
        },[])
        
        

        
        return (
            <>
            {isLoading?<p>loading.....</p>:
            imageLoad?<p>other loading</p>:
            <div>

            <div style={{backgroundImage:`linear-gradient(90deg,rgba(0, 0, 0, .9) 25%,rgba(0, 0, 0, .8) 40%,rgba(0,0,0,.0) 100%),url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,width:"100%"}} className="w-screen h-screen bg-cover bg-no-repeat z-[-1]">
                <div className="flex pr-6 bg-black items-center">   
                    <Navbar />
                    <button className="px-3 py-2 h-min bg-red-600 font-bold rounded">Logout</button>
                </div>
                <div className="px-20"> 
                    <div className="mt-[250px]">
                        <div className="w-[200px] h-[100px]">
                            {/* <img src="/assets/images/logo.png" alt="" /> */}
                        </div>
                        <div className="w-[600px]">
                            <h3 className="text-3xl">{movie.title}</h3>
                            <div className="flex text-gray-500 gap-3 text-lg">
                                <p>{(movie.release_date).slice(0,4)}</p>
                                <span>|</span>
                                <p>U/A 7+</p>
                                <span>|</span>
                                <p>{time(movie.runtime)}</p>
                                <span>|</span>
                                {/* <p>{movie.genres[0].name}</p> */}
                            </div>  
                            <div className="text-lg ">
                                <p className="text-justify py-4">{movie.overview}</p>
                                <p><span className=" text-gray-500 ">Starring: </span> adam sandler, Bill Burr, Cecily Strong</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="px-20 flex flex-col  my-16">
                <hr  className="h-1 "/>
                <div className="w-full py-6 flex justify-center">

                    <p className="text-xl w-[600px] text-center">{movie.overview}</p>
                </div>
                <hr  className="h-1 "/>
            </div>
            <div className="px-20 flex flex-col">
                <div className="flex text-xl pb-4 gap-2">
                    <h2>Videos</h2>
                    <span>|</span>
                    <h4>{movie.title}</h4>
                </div>
                <div>

                    <div>
                    <img src={`${MOVIE_IMG_URL}${movie.poster_path}`} alt="asdf" />
                    </div>
                    <p>Trailer: {movie.title}</p>
                </div>
            </div>
            <div className="px-20 flex flex-col mt-10">
                <div>
                    <h2 className="text-3xl font-bold pb-[10px]">More Details</h2>
                </div>
                <div className="block">
                    <div className="flex  pb-[20px]">
                        <div className="w-[24%]">
                            <h6 className="text-gray-700 text-xl">Watch offline</h6>
                            <p className="">Download and watch everywhere you go.</p>
                        </div>
                        <div className="w-[24%]">
                            <h6 className="text-gray-700 text-xl">Watch offline</h6>
                            <p className="">Download and watch everywhere you go.</p>
                        </div>
                        <div className="w-[24%]">
                            <h6 className="text-gray-700 text-xl">Watch offline</h6>
                            <p className="">Download and watch everywhere you go.</p>
                        </div>
                        <div className="w-[24%]">
                            <h6 className="text-gray-700 text-xl">Watch offline</h6>
                            <p className="">Download and watch everywhere you go.</p>
                        </div>
                        
                    </div>
                    <div className=" pb-[20px]">
                        <h6 className="text-gray-700 text-xl">Subtitles</h6>
                        <p>English</p>
                    </div>
                </div>
                <div>
                    <h6 className="text-gray-700 text-xl">Cast</h6>
                    <div className="flex flex-wrap">
                        <p className="w-[25%]">Adam Sandler</p>
                        <p className="w-[25%]">Adam Sandler</p>
                        <p className="w-[25%]">Adam Sandler</p>
                        <p className="w-[25%]">Adam Sandler</p>
                        <p className="w-[25%]">Adam Sandler</p>
                        <p className="w-[25%]">Adam Sandler</p>
                        <p className="w-[25%]">Adam Sandler</p>
                        <p className="w-[25%]">Adam Sandler</p>
                        <p className="w-[25%]">Adam Sandler</p>
                        <p className="w-[25%]">Adam Sandler</p>
                        <p className="w-[25%]">Adam Sandler</p>
                        <p className="w-[25%]">Adam Sandler</p>
                        <p className="w-[25%]">Adam Sandler</p>
                        <p className="w-[25%]">Adam Sandler</p>
                        <p className="w-[25%]">Adam Sandler</p>
 
                    </div>
                </div>
            </div>
            <div className="px-20 flex flex-col mt-10 w-full">
                <h2 className="text-3xl font-bold pb-[10px]">More Like This</h2>
                <div className="flex flex-wrap justify-between gap-y-[20px]">
                    {/* {similarmovie.map(()=>{
                        return <h1>hii</h1>
                    })} */}
                    <div className="min-w-[24%]">
                        <img src="/assets/images/movies/movie_images1.jpg" alt="" className="w-full h-full" />
                    </div>
                    <div className="min-w-[24%]">
                        <img src="/assets/images/movies/movie_images1.jpg" alt="" className="w-full h-full" />
                    </div>
                    <div className="min-w-[24%]">
                        <img src="/assets/images/movies/movie_images1.jpg" alt="" className="w-full h-full" />
                    </div>
                    <div className="min-w-[24%]">
                        <img src="/assets/images/movies/movie_images1.jpg" alt="" className="w-full h-full" />
                    </div>
                    <div className="min-w-[24%]">
                        <img src="/assets/images/movies/movie_images1.jpg" alt="" className="w-full h-full" />
                    </div>
                    <div className="min-w-[24%]">
                        <img src="/assets/images/movies/movie_images1.jpg" alt="" className="w-full h-full" />
                    </div>
                    <div className="min-w-[24%]">
                        <img src="/assets/images/movies/movie_images1.jpg" alt="" className="w-full h-full" />
                    </div>
                    <div className="min-w-[24%]">
                        <img src="/assets/images/movies/movie_images1.jpg" alt="" className="w-full h-full" />
                    </div>
                    <div className="min-w-[24%]">
                        <img src="/assets/images/movies/movie_images1.jpg" alt="" className="w-full h-full" />
                    </div>
                    <div className="min-w-[24%]">
                        <img src="/assets/images/movies/movie_images1.jpg" alt="" className="w-full h-full" />
                    </div>
                    <div className="min-w-[24%]">
                        <img src="/assets/images/movies/movie_images1.jpg" alt="" className="w-full h-full" />
                    </div>
                    <div className="min-w-[24%]">
                        <img src="/assets/images/movies/movie_images1.jpg" alt="" className="w-full h-full" />
                    </div>
                </div>
            </div>
            <div  className="px-20 flex flex-col mt-10 w-full">
                <h2 className="text-3xl font-bold pb-[10px]">Coming Soon</h2>
                <div className="w-full flex flex-wrap justify-between gap-y-4">
                    <div className="w-[24%]">
                        <h6 className="text-lg font-bold">NCIS</h6>
                        <p className="">Follow the quirky agents of the NCIS -- the Naval Criminal Investigative Service  as they track down terrorists and other high-profile criminals.</p>
                    </div>
                    <div className="w-[24%]">
                        <h6 className="text-lg font-bold">NCIS</h6>
                        <p className="">Follow the quirky agents of the NCIS -- the Naval Criminal Investigative Service  as they track down terrorists and other high-profile criminals.</p>
                    </div>
                    <div className="w-[24%]">
                        <h6 className="text-lg font-bold">NCIS</h6>
                        <p className="">Follow the quirky agents of the NCIS -- the Naval Criminal Investigative Service  as they track down terrorists and other high-profile criminals.</p>
                    </div>
                    <div className="w-[24%]">
                        <h6 className="text-lg font-bold">NCIS</h6>
                        <p className="">Follow the quirky agents of the NCIS -- the Naval Criminal Investigative Service  as they track down terrorists and other high-profile criminals.</p>
                    </div>
                    <div className="w-[24%]">
                        <h6 className="text-lg font-bold">NCIS</h6>
                        <p className="">Follow the quirky agents of the NCIS -- the Naval Criminal Investigative Service  as they track down terrorists and other high-profile criminals.</p>
                    </div>
                    <div className="w-[24%]">
                        <h6 className="text-lg font-bold">NCIS</h6>
                        <p className="">Follow the quirky agents of the NCIS -- the Naval Criminal Investigative Service  as they track down terrorists and other high-profile criminals.</p>
                    </div>
                    <div className="w-[24%]">
                        <h6 className="text-lg font-bold">NCIS</h6>
                        <p className="">Follow the quirky agents of the NCIS -- the Naval Criminal Investigative Service  as they track down terrorists and other high-profile criminals.</p>
                    </div>
                    <div className="w-[24%]">
                        <h6 className="text-lg font-bold">NCIS</h6>
                        <p className="">Follow the quirky agents of the NCIS -- the Naval Criminal Investigative Service  as they track down terrorists and other high-profile criminals.</p>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
        }
            </>
        )
    }