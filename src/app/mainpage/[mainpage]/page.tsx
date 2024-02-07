"use client"

import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import { MOVIE_IMG_URL } from "@/app/axiosConfig"
import { useEffect, useState } from "react"
import Video from "./components/videos"
import Link from "next/link"

interface Movie{
    title:string;
    release_date:string;
    runtime:number;
    overview:string;
    poster_path:string;
    name:string;
    adult:Boolean;
    genres:Array<Movie>;
    backdrop_path:string;
}

interface Image{
    logos: { file_path: string }[];
    backdrops:{file_path:string}[];
}

interface movieCr{

    cast:[{name:string}];
    name:string;
}

interface similarMovi{
    id:number;
    poster_path:string;
}
interface videoMovie{
    name:string;
    key:string;
}

interface Upcoming{
    title:string;
    overview:string;
}

interface SingleItemProp{
    params:{
        mainpage:string;
    }
}

const SingleItems: React.FC<SingleItemProp> = ({params}) =>{


        // import movie details to movie state
        const [movie, setMovie] = useState< Movie | null>(null)


        // import movie images to imageList state
        const [imageList, setImageList] = useState<Image| null>(null)


        // import this movie's similarMovies to similarMovie State
        const [similarmovie, setSimilarmovie] = useState<similarMovi | null>(null)


        // import movie trailer and other videos to movieVideo
        const [movieVideo, setMovieVideo] = useState<videoMovie | null>(null)


        // checking is there api has videos
        const [isVideo, setIsvideo] = useState(true)


        // import upcoming movie details to 
        const [movieUpcoming, setMovieUpcoming] = useState<Upcoming |null>(null)


        // 
        const [movieCredits, setMovieCredits] = useState<movieCr | null>(null)


        // check all api is load and fetch to state
        const [isLoading, setIsLoading] = useState(true)


        // youtube video modal
        const[videoModal, setVideoModal] = useState(false)


        // convert min to (hour and minits)
        function time(input:number):string{
            const hour = Math.floor(input/60);
            const minits = input%60;
            return `${hour}h ${minits}m`
            
        }


        // this is for slider settings
        const settings = {
            centerMode: false,
            infinite: false,
            centerPadding: "0px",
            slidesToShow: 3,
            speed: 1000,
            rows: 1,
            slidesToScroll:4,
            arrow:true,
            
            };

        
        useEffect(()=>{

            // fetching api and import data and fetching to state
            function fetchData(){
                const request1 = fetch(`https://api.themoviedb.org/3/movie/${params.mainpage}/images?api_key=c335ae1ffb9a62f766ee249471af6986`).then(response => response.json());
                const request2 = fetch(`https://api.themoviedb.org/3/movie/${params.mainpage}?api_key=c335ae1ffb9a62f766ee249471af6986`).then(response => response.json());
                const request3 = fetch(`https://api.themoviedb.org/3/movie/${params.mainpage}/videos?api_key=c335ae1ffb9a62f766ee249471af6986`).then(response => response.json());
                const request4 = fetch(`https://api.themoviedb.org/3/movie/${params.mainpage}/credits?api_key=c335ae1ffb9a62f766ee249471af6986`).then(response => response.json());
                const request5 = fetch(`https://api.themoviedb.org/3/movie/${params.mainpage}/similar?api_key=c335ae1ffb9a62f766ee249471af6986`).then(response => response.json());
                const request6 = fetch(`https://api.themoviedb.org/3/movie/${params.mainpage}/similar?api_key=c335ae1ffb9a62f766ee249471af6986`).then(response =>response.json());                
                Promise.all([request1, request2,request3,request4, request5, request6])
                .then(([data1, data2, data3, data4, data5 , data6]) => {
                    setImageList(data1)
                    setMovie(data2)
                    setMovieVideo(data3.results)
                    setMovieCredits(data4)
                    setSimilarmovie(data5.results)
                    setMovieUpcoming(data6.results)
                    
                    // load after set all data's
                    setIsLoading(false)
                })
                .catch(error =>{
                    console.error("error: ",error)
                })
            }
            fetchData()
            

        },[])



        // it's for when trailer video click modal is open and site scroll stop
        // then modal is close site scroll will scroll
        useEffect(()=>{
            if(videoModal===true){
                document.body.style.overflow = "hidden"
            }
            else{
                document.body.style.overflow = "auto"

            }
        },[videoModal])
        console.log(movie)
        
        
        return (
            <>
            {isLoading?<div className="w-screen h-screen flex justify-center items-center">
                        <video src="https://tenor.com/view/loading-gif-20768857"></video>
                </div>
                :
            // imageLoad?<p>other loading</p>:
            <>
            {movie && movieCredits && movieUpcoming && similarmovie && imageList &&
            <div>
            <div>

                <div style={{backgroundImage:`linear-gradient(90deg,rgba(0, 0, 0, .9) 25%,rgba(0, 0, 0, .8) 40%,rgba(0,0,0,.0) 100%),url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`}} className="h-screen w-screen bg-cover bg-no-repeat z-[-1]">
                    <div className="flex w-screen pr-6 bg-black items-center">   
                        <Navbar />
                        <button className="px-3 py-2 h-min bg-red-600 font-bold rounded">Logout</button>
                    </div>

                        <div className="px-20"> 
                            <div className="mt-[250px]">
                                <div className="mb-6">
                                    {imageList && imageList.logos && imageList.logos[0] && (
                                        <img src={`${MOVIE_IMG_URL}${imageList.logos[0].file_path}`} alt="" className="max-h-[300px] max-w-[300px]"/>
                                        )}
                                </div>
                                <div className="w-[600px]">
                                    <h3 className="text-3xl font-bold mb-3">{movie.title}</h3>
                                    <div className="flex text-gray-500 gap-3 text-lg items-center">
                                        <p>{(movie.release_date).slice(0,4)}</p>
                                        <span>|</span>
                                        <span className="border-[1px] p-1">
                                        {movie.adult ?<p>A</p>:<p>U/A 7+</p>}
                                        </span>
                                        <span>|</span>``
                                        <p>{time(movie.runtime)}</p>
                                        <span>|</span>
                                        <p>{movie.genres[0].name}</p>
                                    </div>  
                                    <div className="text-lg ">
                                        <p className="text-justify py-4">{movie.overview}</p>
                                        <p><span className=" text-gray-500 ">Starring: </span> 
                                        {Array.isArray(movieCredits) && movieCredits.cast.map((element,index)=>{
                                            if(index>=3){
                                                return null
                                            }
                                            return(<>{movieCredits.cast[index].name}, </>)
                                        })}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="px-20 flex flex-col  my-16">
                    <hr  className="h-1 "/>
                    <div className="w-full py-6 flex justify-center">

                        <p className="text-xl w-[1000px] text-center">{movie.overview}</p>
                    </div>
                    <hr  className="h-1 "/>
                </div>
                <div className="px-20 flex flex-col">
                    <div className="flex text-xl pb-4 gap-2">
                        <h2>Videos</h2>
                        <span>|</span>
                        <h4>{movie.title}</h4>
                    </div>

                    <div className="flex w-[1757px] overflow-scroll">
                        {/* <Slider {...settings} className="w-full flex"> */}

                            {Array.isArray(movieVideo) && movieVideo.map((element, index)=>{
                                if(index>=4){
                                    return null
                                }
                                if(element){
                                    return (
                                        <div className="flex ">
                                    {/* <Link href={""} key={index}> */}
                                        <div className="w-min" onClick={()=>setVideoModal(true)} >
                                                    <>
                                                        <div className="w-[820px] mr-9 relative">
                                                            <img src={`http://image.tmdb.org/t/p/w1280${imageList.backdrops[index].file_path}`} alt="asdf" className="w-full" />
                                                            <img src="../../assets/images/play.png" alt="" className="w-[100px] absolute bottom-0 left-0" />
                                                        </div>  
                                                    </>
                                            <p className="w-full">Trailer: {element.name}</p>
                                        </div>
                                        {videoModal && <Video modal={setVideoModal} videoId={`${element.key}`} />}
                                        {/* </Link> */}
                                    </div>                
                                )
                                }else{
                                    return null
                                }
                            })}
                        {/* </Slider> */}
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
                                <h6 className="text-gray-700 text-xl">Genres</h6>
                                <p className="">{movie.genres.map((i)=> `${i.name}, ` )}</p>
                            </div>
                            <div className="w-[24%]">
                                <h6 className="text-gray-700 text-xl">This show is..</h6>
                                <p className="">Excting, Romantic</p>
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
                            {Array.isArray(movieCredits?.cast) && movieCredits.cast.map((element , index)=>{
                                if(index >= 16){
                                    return null;
                                }else{
                                    return (<p className="w-[25%]">{element.name}</p>)
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div className="px-20 flex flex-col mt-10 w-full">
                    <h2 className="text-3xl font-bold pb-[10px]">More Like This</h2>
                    <div className="flex flex-wrap justify-between gap-y-[20px]">
                        {Array.isArray(similarmovie) && similarmovie.map((element, index)=>{
                            return <Link href={`/mainpage/${element.id}`}>
                                        <div className="min-w-[10%]">
                                            <img src={`http://image.tmdb.org/t/p/w500${element.poster_path}`} alt="" className="w-[300px]" />
                                        </div>
                                    </Link>
                        })}
                    </div>
                </div>
                <div  className="px-20 flex flex-col mt-10 w-full">
                    <h2 className="text-5xl font-bold pb-[10px]">Coming Soon</h2>
                    <div className="w-full flex flex-wrap justify-between gap-y-4">
                        {Array.isArray(movieUpcoming)&& movieUpcoming.map((element, index)=>{
                            if(index>=12){
                                return null
                            }
                            
                            return <div className="w-[24%]" key={index}>
                                        <h6 className="text-lg font-bold">{element.title}</h6>
                                        <p className="">{element.overview.slice(0,200)+("...")}</p>
                                    </div>
                        })}
                    </div>
                </div>
                <Footer />
                </div>
            }</>
            }
            </>
        )
    }

export default SingleItems