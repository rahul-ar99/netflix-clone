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
    id:number;
}

export default function ComponentMain({genreId, genreName}){




    // add movie details to movie state
    const [movieList, setMovieList] = useState<Movie[]>([])


    // api is full load then the site will show
    const [isLoading, setIsLoading] = useState(true)

    const [imageList, setImageList] = useState([])
    


    


    // fetching movie image and name with api
    async function getMovie(){

        // await fetch("https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986")


        await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986&language=en-US&sort_by=release_date.desc&page=1&with_genres=${genreId}`)
        .then(res => res.json())
        .then(json => {setMovieList(json.results)})
        .then(()=>console.log(movieList))


        // await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=c335ae1ffb9a62f766ee249471af6986")
        // .then(res1 => res1.json())
        // .then(json => {setImageList(json.result)})
        // .then(()=> console.log(imageList))
            
        // const request1 = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986&language=en-US&sort_by=release_date.desc&page=1&with_genres=${genreId}`).then(response => response.json());
        // const request2 = fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=c335ae1ffb9a62f766ee249471af6986").then(response => response.json());
        // Promise.all([request1, request2])
        // .then(([data1, data2]) => {
        //     console.log(data1, data2);
        //     setImageList(data1.results)
        //     setMovieList(data2.results)

        // })
        // .catch(error => {
        //     console.error(error);
        // });
    }

    useEffect(()=>{
        getMovie()
        setIsLoading(false)
    },[])
    console.log(movieList)
    console.log(imageList)

    const settings = {
        centerMode: false,
        infinite: false,
        centerPadding: "0px",
        slidesToShow: 4.3,
        speed: 1000,
        rows: 1,
        slidesToScroll:4
        };

    return(
        <>
            <h5 className="text-2xl mb-3">{genreName}</h5>
            
            <div className="flex pb-5 items-center px-3">
                <button className="w-[20px] h-full flex "><img src="/assets/images/left_arrow.png" alt="" className="invert h-min w-min"/></button>
                <div className="flex gap-2 w-full flex-col">
                    <ul className="flex w-full gap-1" >
                        {isLoading ? (<p>Loading Movies...</p>):
                            (<Slider {...settings} className="w-full flex">
                                { movieList.map((movie,index)=>{
                                    if(movie.backdrop_path!=null){
                                        return (
                                            <li key={index} className="w-min h-auto">
                                            <div>
                                                <Link href={`/mainpage/${movie.id}`} key={index}>
                                                    <div className="flex flex-col justify-center items-center " >
                                                        <div className="w-[380px] h-auto ">  
                                                            <img src={`${MOVIE_IMG_URL}${movie.backdrop_path}`} alt="Movie image" className="" />
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