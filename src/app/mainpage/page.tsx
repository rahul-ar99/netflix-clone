// "use client"

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



import React from 'react';

export default function Home({ genres }) {
  return (
    <div>
      <h1>Movie Genres</h1>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // Fetching data from the API
  const apiKey = 'c335ae1ffb9a62f766ee249471af6986';
  const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
  const data = await response.json();

  // Pass data to the page via props
  return {
    props: {
      genres: data.genres,
    },
  };
}