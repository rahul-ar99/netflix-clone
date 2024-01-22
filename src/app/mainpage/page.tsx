"use client"

import Link from "next/link"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import { MOVIE_IMG_URL } from "../axiosConfig"

export default function(){

    var arr = []
    var img_no = 0
    for(let i=1;i<=15;i++){
        arr.push(i)
    }

    const [movieList, setMovieList] = useState([])

    const getMovie = () =>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986")
        .then(res => res.json())
        .then(json => setMovieList(json.results))
    }

    useEffect(()=>{
        getMovie()
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
                    return(
                <>
                <h5 className="text-2xl mb-3">Comedy Movies</h5>
                <div className="flex pb-10">
                    <button>^</button>
                    <div className="flex gap-2 w-screen overflow-scroll">

                        { movieList.map((movie)=>{
                            // let img_path = MOVIE_BASE_URL + movie.poster_path
                            // console.log(img_path)
                          
                            return (
                                <Link href={`/mainpage/${movie.id}`}>
                                    <div className="flex flex-col items-center">
                                        <div className="w-[299px] h-[368px] flex items-baseline justify-end">
                                            <img src={`${MOVIE_IMG_URL}${movie.poster_path}`} alt="asdf" />
                                        </div>
                                        <p className="mt-2 text-lg">{movie.title}</p>
                                    </div>
                                </Link>
                            )
                        }) }
                        
                    </div>
                    <button>^</button>
                </div>
                </>

                    )
                })}
            </div>
            <Footer /> 

        </div>
    )
}