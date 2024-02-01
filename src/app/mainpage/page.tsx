"use client"

import { useEffect, useState } from "react";

// import React, { useEffect, useState } from "react"

// export default function MainPage1(){

//     const [genrelist, setGenrelist] = useState<any[]>([])
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(false)


//     useEffect(() =>{
//         setLoading(true)
//         setGenrelist([])
//         setError(false)

//         const controller = new AbortController()

//         fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c335ae1ffb9a62f766ee249471af6986",{
//             signal:controller.signal,
//         })
//             .then(res => res.json())
//             .then(data =>{
//                 setError(false)
//                 setGenrelist(data)
//             })
//             .catch(()=>setError(true))
//             .finally(()=>setLoading(false))

        
//         return () => controller.abort()


//     },[])
//     if(loading) return <p>loading.....</p>
//     if(error) return <p>error.....</p>

//     console.log(genrelist)

//     return(
//         <>{
//             genrelist.map((items)=>{
//                 return <h1>{items}</h1>
//             })
//         }</>
//     )
// }


interface Details{
    adult:boolean;
    genres: {name:string}[];
    released_date?:string;
    logo_path?:string;
    original_title:string;
    id:number;
    backdrop_path:string;
    title:string;
    name:string;
    runtime:number;
    production_companies:{logo_path:string}[];
}


export default function MainPage(){


    const [genre,setGenre] = useState<Details | null>(null)
    
    const genreDetail = async () =>{
        try{
            const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c335ae1ffb9a62f766ee249471af6986");
            const json = await response.json();

            if(json){
                setGenre(json)
                console.log(json)
            } 
        }catch (error){
            console.log(error)
        }
    }
    useEffect(()=>{
        genreDetail()
        console.log(genre)
    },[])

    if(!genre){
        return <p>Loading...</p>
    }
    else{
        return (
            // console.log(genre)
            <>
            {(for i in genre.genres){
                return <h1>{i}</h1>
            }}
            <h1>{genre.genres[2]}</h1>
            </>
        )
    }
}