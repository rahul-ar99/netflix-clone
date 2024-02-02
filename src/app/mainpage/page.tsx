"use client"

import { useEffect, useState } from "react";
import ComponentMain from "./component";
import Link from "next/link";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";
import MovieList from "./movieList";


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

interface Details{
    id:number;
}


export default function MainPage(){

    const router = useRouter()
    const handleLogout =  async () =>{
        try{
            await signOut(auth);
            router.push('/loginpage')
        }catch{
            const errorMessage = (error as Error).message;
            console.error("logout error:", errorMessage)
        }
        
    }


    const [genre,setGenre] = useState<Details | null>([])
    const [isloading, setIsloading] = useState(true)
    
    const genreDetail = async () =>{
        try{
            const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c335ae1ffb9a62f766ee249471af6986");
            const json = await response.json();

            if(json){
                setGenre(json)
                if(genre){
                    setIsloading(false)
                }
                // console.log(json)
            } 
        }catch (error){
            console.log(error)
        }
    }
    useEffect(()=>{
        genreDetail()
    },[])
    if(isloading===false){
        // console.log(genre)
    }
    console.log(genre)
    if(!genre){
        return <p>Loading...</p>
    }
    else{
        return (
            <>
            <div className="flex pr-4 justify-center items-center">
                <Navbar />
                <button className="p-2 h-min rounded-xl bg-red-600" onClick={handleLogout}>Logout</button>
            </div>
            <div className="px-14">
                <div className="w-screen p-5 pb-10">
                    <div className="w-[600px]">
                        <h3 className="text-4xl">Netflix Originals</h3>
                        <p className="text-xl">Netflix is the home of amazing original progamming that you can't find anywhere else. Movies, TV shows, specials and more, it's all tailored specifically to you.</p>
                    </div>
                </div>
                <div className="px-5">

                    <MovieList categoryLink={"now_playing"} categoryName={"Now Playing"}/>
                    <MovieList categoryLink={"popular"} categoryName={"Popular"} />
                    <MovieList categoryLink={"upcoming"} categoryName={"Upcoming"} />
                    <MovieList categoryLink={"top_rated"} categoryName={"Top Rated"} />
                    {/* {console.log(genre)} */}
                    { isloading?<p>Loading......</p>:
                        [...Array(19)].map((i,j)=>{
                            return(
                                <>
                                    <ComponentMain genreId={genre.genres[j].id} genreName={genre.genres[j].name}/>                        
                                </>)
                            
                        }
                        
                        )
                    }
            
                </div>
            </div>
            <Footer />
        </>
            // console.log(genre)
            // <>
            // {(for i in genre.genres){
            //     return <h1>{i}</h1>
            // }}
            // <h1>{genre.genres[2]}</h1>
            // </>
        )
    }
}