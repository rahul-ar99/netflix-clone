"use client"

import Link from "next/link"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import { MOVIE_IMG_URL } from "../axiosConfig"
import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






interface Movie{
    poster_path:string;
    title:string;
}

export default function ComponentMain({genreId,genreName}){

    let arr = [];
    let arrStart = 0;
    let arrEnd = arrStart + 15;
    for(let i=1;i<=15;i++){
        arr.push(i)
    }


    // add movie details to movie state
    const [movieList, setMovieList] = useState<Movie[]>([])


    // api is full load then the site will show
    const [isLoading, setIsLoading] = useState(true)
    


    


    // fetching movie image and name with api
    async function getMovie(){

        // movies
        // await fetch("https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986")


        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986&language=en-US&sort_by=release_date.desc&page=1&with_genres=${genreId}`)
        .then(res => res.json())
        .then(json => {setMovieList(json.results),setIsLoading(false);})
    }

    useEffect(()=>{
        getMovie()
    },[])
    

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


    return(
        <>
                <h5 className="text-2xl mb-3">{genreName}</h5>
             
                <div className="flex pb-10 items-center px-10">
                    <button className="w-[20px] h-full flex "><img src="/assets/images/left_arrow.png" alt="" className="invert h-min w-min"/></button>
                    <div className="flex gap-2 w-full">
                        <ul className="flex w-full gap-1" >
                            {isLoading ? (<p>Loading Movies...</p>):
                                (<Slider {...settings} className="w-full flex">
                                    { movieList.map((movie,index)=>{

                                        if(movie.poster_path!=null){
                                            return (
                                                <li key={index} className="w-min-[299px] h-[449px]">
                
                                                <div>
                                                    <Link href={`/mainpage/${movie.id}`} key={index}>
                                                    <div className="flex flex-col justify-center items-center " >
                                                    <div className="w-[259px] h-auto ">  
                                                    <img src={`${MOVIE_IMG_URL}${movie.poster_path}`} alt="Movie image" className="" />
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
                </div>
            </>
    )
}