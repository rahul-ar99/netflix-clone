"use client"

import { useEffect, useState } from "react";



export default function Testing(){


    const [image, setImageList] = useState([])
    const [movie, setMovieList] = useState([])
    const [isLoading, setIsloading] = useState(true)


    useEffect(()=>{
        function fetchData(){

            const request1 = fetch(`https://api.themoviedb.org/3/movie/866398/images?api_key=c335ae1ffb9a62f766ee249471af6986`).then(response => response.json());
            const request2 = fetch(`https://api.themoviedb.org/3/movie/866398?api_key=c335ae1ffb9a62f766ee249471af6986`).then(response => response.json());
            Promise.all([request1, request2])
            .then(([data1, data2]) => {
                setImageList(data1)
                setMovieList(data2)
                // console.log(data1,data2)
                if(movie && image){
                    setIsloading(false)
                }
            })
            .catch(error =>{
                console.error("error: ",error)
            })
        }
        fetchData()
    },[])
    
    console.log(movie, image)

    return <>
    {isLoading ? <p>Loading...</p> :
        <div className="w-screen h-screen">
        
                <p> {image.backdrops[0].file_path}</p>                        
                <p> {image.backdrops[0].file_path}</p>            
        hello world
    </div>
    }
    </>

}
