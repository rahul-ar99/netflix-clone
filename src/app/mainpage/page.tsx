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




interface Genre {
    id: number;
    name: string;
}




 const MainPage: React.FC = ()=> {
    const [genre, setGenre] = useState<Genre[] | null>(null);
    const [isloading, setIsLoading] = useState(true)
    const router = useRouter()




    const handleLogout =  async () =>{
        try{
            await signOut(auth);
            router.push('/')
        }catch(error){
            const errorMessage = (error as Error).message;
            console.error("logout error:", errorMessage)
        }  
    }



    useEffect(()=>{
        const fetchGenre = async () => {
    try {
        const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c335ae1ffb9a62f766ee249471af6986");
        const data = await response.json();
        if (data.genres) {
            setGenre(data.genres);
            setIsLoading(false);
        }
    } catch (error) {
        console.error(error);
    }
};
fetchGenre();
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
            <div className="flex pr-4 justify-center items-center bg-black">
                <Navbar />
                <button className="p-2 h-min rounded-xl bg-red-600" onClick={handleLogout}>Logout</button>
            </div>
            <div className="px-14 pt-10">
                <div className="w-screen p-5 pb-10">
                    <div className="w-[600px]">
                        <h3 className="text-6xl font-bold mb-3">Netflix Originals</h3>
                        <p className="text-xl">Netflix is the home of amazing original progamming that you can't find anywhere else. Movies, TV shows, specials and more, it's all tailored specifically to you.</p>
                    </div>
                </div>
                <div className="px-5">

                    <MovieList categoryLink={"now_playing"} categoryName={"Now Playing"}/>
                    {/* <MovieList categoryLink={"popular"} categoryName={"Popular"} /> */}
                    <MovieList categoryLink={"upcoming"} categoryName={"Upcoming"} />
                    <MovieList categoryLink={"top_rated"} categoryName={"Top Rated"} />
                    {/* {console.log(genre)} */}
                    { isloading?<p>Loading......</p>:
                       (<>
                            {genre && genre.map((genreItem, index) => (
                                <ComponentMain key={index} genreId={genreItem.id} genreName={genreItem.name} />

                            ))}
                        </>
                        
                        )
                    }
            
                </div>
            </div>
            <Footer />
        </>
        )
    }
}

export default MainPage;
