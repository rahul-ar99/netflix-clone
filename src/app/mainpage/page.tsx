import Link from "next/link"
import Navbar from "../components/Navbar"

export default function(){

    let arr = []
    for(let i=1;i<=15;i++){
        arr.push(i)
    }


    return(
        <div className="">
            <Navbar />
            <div className="w-screen p-5 pb-10">
                <div className="w-[600px]">
                    <h3 className="text-4xl">Netflix Originals</h3>
                    <p className="text-xl">Netflix is the home of amazing original ptogamming that you can't find anywhere else. Movies, TV shows, specials and more, it's all tailored specifically to you.</p>
                </div>
            </div>
            <div className="block">
                <h5 className="text-2xl mb-5">Comedy Movies</h5>
                <div className="flex">
                    <button>^</button>
                    { arr.map(()=>{
                        return (
                            <h1>sdfsdf</h1>
                        )
                    }) }
                    <div className="flex gap-2 w-screen overflow-scroll">
                        <div className="flex flex-col items-center">
                            <div className="w-[299px] h-[168px]">
                                <img src="/assets/images/movies/movie_images01.jpg" alt="asdf" />
                            </div>
                            <p>lift</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-[299px] h-[168px]">
                                <img src="/assets/images/movies/movie_images01.jpg" alt="asdf" />
                            </div>
                            <p>lift</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-[299px] h-[168px]">
                                <img src="/assets/images/movies/movie_images01.jpg" alt="asdf" />
                            </div>
                            <p>lift</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-[299px] h-[168px]">
                                <img src="/assets/images/movies/movie_images01.jpg" alt="asdf" />
                            </div>
                            <p>lift</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-[299px] h-[168px]">
                                <img src="/assets/images/movies/movie_images01.jpg" alt="asdf" />
                            </div>
                            <p>lift</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-[299px] h-[168px]">
                                <img src="/assets/images/movies/movie_images01.jpg" alt="asdf" />
                            </div>
                            <p>lift</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-[299px] h-[168px]">
                                <img src="/assets/images/movies/movie_images01.jpg" alt="asdf" />
                            </div>
                            <p>lift</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-[299px] h-[168px]">
                                <img src="/assets/images/movies/movie_images01.jpg" alt="asdf" />
                            </div>
                            <p>lift</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-[299px] h-[168px]">
                                <img src="/assets/images/movies/movie_images01.jpg" alt="asdf" />
                            </div>
                            <p>lift</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-[299px] h-[168px]">
                                <img src="/assets/images/movies/movie_images01.jpg" alt="asdf" />
                            </div>
                            <p>lift</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-[299px] h-[168px]">
                                <img src="/assets/images/movies/movie_images01.jpg" alt="asdf" />
                            </div>
                            <p>lift</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-[299px] h-[168px]">
                                <img src="/assets/images/movies/movie_images01.jpg" alt="asdf" />
                            </div>
                            <p>lift</p>
                        </div>
                    </div>
                    <button>^</button>
                </div>
            </div>

        </div>
    )
}