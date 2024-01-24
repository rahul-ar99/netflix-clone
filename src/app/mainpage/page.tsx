"use client"

import Link from "next/link"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import { MOVIE_IMG_URL } from "../axiosConfig"
import React, { Component } from "react";
import Slider from "react-slick";




// async function getMovie (){
//     const res = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986")
//     // .then(res => res.json())
//     // .then(json => setMovieList(json.results))
//     return res.json()
// }

export default function Mainpage(){

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

        // movies
        // fetch("https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986")


        // comedy movies 
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986&language=en-US&sort_by=release_date.desc&page=1&with_genres=35")
        .then(res => res.json())
        .then(json => setMovieList(json.results))
    }
    const result1 = fetch("https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986&language=en-US&sort_by=release_date.desc&page=1&with_genres=35")
    const result2 = fetch("https://api.themoviedb.org/3/discover/movie?api_key=c335ae1ffb9a62f766ee249471af6986&language=en-US&sort_by=release_date.desc&page=1&with_genres=28")

    Promise.all([result1,result2])
        .then(([data1,data2]) => {
            console.log(data1,data2)
        })
        .catch((error)=>{
            console.error(error)
        })

    useEffect(()=>{
        getMovie()
    },[])

    const ImageSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


    
    
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
            <div className="block px-3 py-4">
                { arr.map(()=>{
                    arr = []
                    arrStart += 15


                    return(
                <>
                <h5 className="text-2xl mb-3">Comedy Movies</h5>
                <Slider {...ImageSettings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                </Slider>
                <div className="flex pb-10 items-center">
                    <button className="w-[20px] h-full flex items-center justify-center"><img src="/assets/images/left_arrow.png" alt="" className="invert h-min w-min"/></button>
                    <div className="flex gap-2 w-screen overflow-scroll">
                        <Slider >

                        { movieList.map((movie,index)=>{
                            // let img_path = MOVIE_BASE_URL + movie.poster_path
                            // console.log(img_path)
                            
                            return (
                                <Link href={`/mainpage/${movie.id}`} key={index}>
                                    <div className="flex flex-col justify-center items-center w-max-[200px] h-max-[300px]" >
                                        <div className="w-[299px] h-[449px] ">
                                            <img src={`${MOVIE_IMG_URL}${movie.poster_path}`} alt="asdf" className="w-[100px]" />
                                        </div>
                                        <p className="mt-2 text-lg">{movie.title}</p>
                                    </div>
                                </Link>
                            )
                        }) }
                        </Slider>
                        
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