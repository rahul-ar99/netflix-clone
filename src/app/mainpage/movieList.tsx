"use client"

import Link from "next/link"

import { useEffect, useState } from "react"
import { MOVIE_IMG_URL } from "../axiosConfig"
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






interface Movie{
    poster_path:string;
    title:string;
    id:number;
    backdrop_path:string;
}


interface MovieListProp{
    categoryLink: string;
    categoryName:string;
}

const MovieList: React.FC<MovieListProp> = ({categoryLink,categoryName}) => {




    // add movie details to movie state
    const [movieList, setMovieList] = useState<Movie[]>([])


    // api is full load then the site will show
    const [isLoading, setIsLoading] = useState(true)

    const [imageList, setImageList] = useState([])
    
    
    
    // const request1 = fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986&language=en-US&sort_by=release_date.desc&page=1&with_genres=${genreId}`).then(response => response.json());
    // const request2 = fetch("https://api.themoviedb.org/3/movie/1235336/images?api_key=c335ae1ffb9a62f766ee249471af6986").then(response => response.json());
    // Promise.all([request1, request2])
    // .then(([data1, data2]) => {
    //     console.log(data1, data2);
    //     setImageList(data1.results)
    //     setMovieList(data2.results)
    // })


    


    // fetching movie image and name with api
    async function getMovie(){

        // await fetch("https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986")
        // await fetch(` https://api.themoviedb.org/3/movie/popular?api_key=c335ae1ffb9a62f766ee249471af6986&language=en-US&sort_by=release_date.desc&page=1&with_genres=${genreId}`)
        await fetch(` https://api.themoviedb.org/3/movie/${categoryLink}?api_key=c335ae1ffb9a62f766ee249471af6986`)
        .then(res => res.json())
        .then(json => {setMovieList(json.results)})
        .then(()=>console.log(movieList))        
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
        slidesToShow: 5.3,
        speed: 1000,
        rows: 1,
        slidesToScroll:4,
        arrow:true,
        
        };

    return(
        <>

            <h5 className="text-2xl mb-6">{categoryName}</h5>
            
            <div className="flex pb-5 items-center px-3">
                <div className="flex gap-2 w-full flex-col">
                    <ul className="flex w-full gap-1" >
                        {isLoading ? (<p>Loading Movies...</p>):
                            (<Slider {...settings} className="w-full flex">
                                { movieList.map((movie,index)=>{
                                    if(movie.poster_path!=null){
                                        return (
                                            <li key={index} className="w-min h-auto mb-10">
                                            <div>
                                                <Link href={`/mainpage/${movie.id}`} key={index}>
                                                    <div className="flex flex-col justify-center items-center " >
                                                        <div className="w-[310px] h-[180px] ">  
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
            </div>
        </>
    )
}

export default MovieList;