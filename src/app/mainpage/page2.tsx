"use client"

import Link from "next/link"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import { MOVIE_IMG_URL } from "../axiosConfig"
import React, { Component } from "react";
import Slider from "react-slick";
import ComponentMain from "./component"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




// async function getMovie (){
//     const res = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986")
//     // .then(res => res.json())
//     // .then(json => setMovieList(json.results))
//     return res.json()
// }



interface Movie{
    poster_path:string;
    title:string;
}

export default function Mainpage(){

    let arr = [];
    let arrStart = 0;
    let arrEnd = arrStart + 15;
    for(let i=1;i<=15;i++){
        arr.push(i)
    }


    // add movie details to movie state
    
    
    const [movieList, setMovieList] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [genrelist, setGenrelist] = useState([])
    


    


    // fetching movie image and name with api
    async function getMovie(){
        
        // movies
        // await fetch("https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986")
        
        
        // comedy movies 
        // fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986&language=en-US&sort_by=release_date.desc&page=1&with_genres=${genreCode}`)
        // .then(res => res.json())
        // .then(json => {setGenrelist(json.results),setIsLoading(false);})
        
        
        
        // await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=c335ae1ffb9a62f766ee249471af6986`)
        // .then(res => res.json())
        // .then(json => {setGenrelist(json.results),setIsLoading(false);})
        const res3 = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=c335ae1ffb9a62f766ee249471af6986`)
        const genre = await res3.json();
        setGenrelist(genre)
        console.log(genrelist.genres[0].id)
        // genrelist.map((items)=>{
        //     console.log("dl;kjoisdf")
        // })
        
        
    }
    
    useEffect(()=>{
        // getMovie(35)
        getMovie()
        setIsLoading(false)
    },[])
    // console.log(genrelist)
    

    const settings = {
        // className: "center",
        centerMode: false,
        infinite: false,
        centerPadding: "0px",
        slidesToShow: 6,
        speed: 1000,
        rows: 1,
        // slidesPerRow: 6,
        slidesToScroll:5
        };


    
    
    // console.log(movieList[2].genre_ids[0])


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
            <div className="block px-3 py-4 w-full">
                {/* { arr.map(()=>{
                    // arr = []
                    // arrStart += 15


                    return(
                <> */}
                {/* <h5 className="text-2xl mb-3">Comedy Movies</h5>
             
                <div className="flex pb-10 items-center px-10">
                    <button className="w-[20px] h-full flex "><img src="/assets/images/left_arrow.png" alt="" className="invert h-min w-min"/></button>
                    <div className="flex gap-2 w-full">
                        <ul className="flex w-full gap-1" >
                            {isLoading ? (<p>Loading Movies...</p>):
                                (<Slider {...settings} className="w-full flex">
                                    { movieList.map((movie,index)=>{
                                        
                                        // let img_path = MOVIE_IMG_URL + movie.poster_path
                                        // console.log(img_path)
                                        if(movie.poster_path!=null && movie.backdrop_path != null){
                                            return (
                                                <li key={index} className="w-min-[299px] h-[449px]">
                
                                                <div>
                                                    <Link href={`/mainpage/${movie.id}`} key={index}>
                                                    <div className="flex flex-col justify-center items-center " >
                                                    <div className="w-[259px] h-auto ">  
                                                    <img src={`${MOVIE_IMG_URL}${movie.poster_path}`} alt="asdf" className="" />
                                                    </div>
                                                    <p className="mt-2 text-lg">{movie.title}</p>
                                                    </div>
                                                    </Link>
                                                </div>
                                                </li>
                                            )
                                        }
                                    })}
                                </Slider>)
                            }
                        </ul>
                   
                    </div>
                    <button className="w-[20px] h-full flex items-center justify-center"><img src="/assets/images/right_arrow.png" alt="" className="invert h-min w-min"/></button>
                </div> */}
                {/* </>s */}

                    {/* )
                })} */}
                {/* {
                    isLoading ? (<p>Loading Movies...</p>):
                    (<>
                {
                    genrelist.map((items)=>{
                        return <ComponentMain genreId={28}/>
                    })
                }
                </>)
            } */}

                {/* <ComponentMain genreId={35} /> */}
            </div>
            <Footer /> 

        </div>
    )
}