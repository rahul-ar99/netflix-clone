"use client"

import Link from "next/link"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import { MOVIE_IMG_URL } from "../axiosConfig"




// async function getMovie (){
//     const res = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986")
//     // .then(res => res.json())
//     // .then(json => setMovieList(json.results))
//     return res.json()
// }

export default function Mainpage(){

    console.log("sdlfkjlkjl")
    var arr = [];
    let arrStart = 0;
    let arrEnd = arrStart + 15;
    for(let i=1;i<=15;i++){
        arr.push(i)
    }


    // add movie details to movie state
    const [movieList, setMovieList] = useState([])



    // fetching movie image and name with api
    const getMovie = () =>{
        // fetch("https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986")
        // comedy movies 
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986&language=en-US&sort_by=release_date.desc&page=1&with_genres=28")
        .then(res => res.json())
        .then(json => setMovieList(json.results))
    }

    useEffect(()=>{
        getMovie()
    // var movieList = {}
    // const movieList = await getMovie()
    // console.log(movieList)
    // console.log("asdfds")

    // setMovieList(mov)
    },[])


    
    
    // console.log(movieList)


    return(
        <div className="">
            <div className="flex pr-4 justify-center items-center">
                <Navbar />
                <Link href="/" className="p-2 h-min rounded-xl bg-red-600">Logout</Link>
            </div>
            <div className="w-screen p-5 pb-10">
                <div className="w-[600px]">
                    <h3 className="text-4xl">Netflix Originals</h3>
                    <p className="text-xl">Netflix is the home of amazing original ptogamming that you can't find anywhere else. Movies, TV shows, specials and more, it's all tailored specifically to you.</p>
                </div>
            </div>
            <div className="block px-3">
                { arr.map(()=>{
                    arr = []
                    arrStart += 15


                    return(
                <>
                <h5 className="text-2xl mb-3">Comedy Movies</h5>
                <div className="flex pb-10 items-center">
                    <button className="w-[20px] h-full flex items-center justify-center"><img src="/assets/images/left_arrow.png" alt="" className="invert h-min w-min"/></button>
                    <div className="flex gap-2 w-screen overflow-scroll">

                        { movieList.map((movie)=>{
                            // let img_path = MOVIE_BASE_URL + movie.poster_path
                            // console.log(img_path)
                          
                            return (
                                <Link href={`/mainpage/${movie.id}`}>
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="w-[299px] h-[449px] ">
                                            <img src={`${MOVIE_IMG_URL}${movie.poster_path}`} alt="asdf" />
                                        </div>
                                        <p className="mt-2 text-lg">{movie.title}</p>
                                    </div>
                                </Link>
                            )
                        }) }
                        
                    </div>
                    <button className="w-[20px] h-full flex items-center justify-center"><img src="/assets/images/right_arrow.png" alt="" className="invert h-min w-min"/></button>
                </div>
                </>

                    )
                })}
            </div>
            <Footer /> 

        </div>
    )
}