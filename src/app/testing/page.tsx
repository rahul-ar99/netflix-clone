"use client"

import { useEffect, useState } from "react";



export default function Testing(){


    const [image, setImageList] = useState([])
    const [movie, setMovieList] = useState([])



    const request1 = fetch(`https://api.themoviedb.org/3/movie/866398/images?api_key=c335ae1ffb9a62f766ee249471af6986`).then(response => response.json());
    const request2 = fetch(`https://api.themoviedb.org/3/movie/866398?api_key=c335ae1ffb9a62f766ee249471af6986`).then(response => response.json());
    Promise.all([request1, request2])
        .then(([data1, data2]) => {
            // console.log(data1, data2);
            setImageList(data1)
            setMovieList(data2)
        })

    useEffect

        // console.log(image,movie)
    }
    return <>hello world</>

}
