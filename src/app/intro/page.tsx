// import LoginPage from "@/loginPage/page"
import Link from "next/link"
import Footer from "../components/Footer"


export default function Intro() {
    return (
<>
        <div style={{backgroundImage:'linear-gradient(to bottom,rgba(0, 0, 0, 0.495),rgba(0, 0, 0, 0.313),rgba(0, 0, 0, 0.57)),url(../../assets/images/spotlight_1.jpg)'}} className="flex flex-col w-screen px-80 border-b-8 border-neutral-800">
            <nav className="flex w-full justify-between items-center">
                <h1 className="">
                    <Link href="/">
                        <div className="">
                            <img className="max-w-52" src="/assets/images/logo.png" alt="netflix" />
                        </div>
                    </Link>
                </h1>
                <div className="flex justify-between h-max gap-x-5">
                    <select className="bg-black border px-3" name="language" id="language">
                        <option value="english">English</option>
                        <option value="malayalam">Malayalam</option>
                    </select>
                    <Link href="/loginpage">
                        <button className="bg-red-600 px-3 py-1 rounded-md">Sign in</button>

                    </Link>
                </div>
            </nav>
                <div className="flex flex-col justify-center items-center w-full py-32">
                    <div className="text-center">
                        <h3 className="text-5xl font-black py-3">The biggest Indian hits. Ready to watch here from<br/>$149.</h3>
                        <p className="text-xl py-3">Join today. Cancel anytime.</p>
                        <p className="text-xl py-3">Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                    <div>
                        <form action="/" className="flex gap-4">
                            <input className="w-56 bg-black bg-opacity-2 border px-4 py-2" type="email" placeholder="Email address"/>
                            <input className="bg-red-600 px-3 py-1 rounded-md" type="submit" value="Get Started >"/>
                        </form>
                    </div>
                </div>
            </div>

            <div>
                {/* first */}
                <div className="w-screen flex justify-center items-center  border-b-8 border-neutral-800 py-10">
                    <div className="w-[600px]">
                        <h4 className="text-5xl font-bold mb-7">Enjoy on your TV</h4>
                        <p className="text-2xl text-wrap ">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apply TV, Blu-ray players and more.</p>
                    </div>
                    <div className="relative ">
                        <img src="assets/images/tv.png" alt=""  className="z-0"/>
                        <video autoPlay loop muted 
                            src="assets/videos/tv_video.m4v"  
                            className="absolute top-24 left-20 z-[-1]"
                        ></video>
                    </div>
                </div>

                {/* second */}
                <div className="w-screen flex justify-center items-center  border-b-8 border-neutral-800 py-10">
                    <div className="relative">
                        <img src="assets/images/mobile.jpg" alt=""  className="z-0"/>
                        <div className="flex border-2 rounded-xl p-2 absolute bottom-5 bg-black left-36 items-center">
                            <div className="w-20 mr-10">
                                <img src="assets/images/boxshot.png" alt=""/>
                            </div>
                            <div className="mr-10">
                                <p className="text-xl font-bold">Stranger Things</p>
                                <p className="text-blue-700">Downloading...</p>
                            </div>
                            <div>a</div>
                        </div>
                    </div>
                    <div className="w-[600px]">
                        <h4 className="text-5xl font-bold mb-7">Download your shows to watch offline</h4>
                        <p className="text-2xl text-wrap ">Save your favourites easly and always have somethings to watch.</p>
                    </div>
                </div>
                {/* third */}
                <div className="w-screen flex justify-center items-center  border-b-8 border-neutral-800  py-10">
                    <div className="w-[600px]">
                        <h4 className="text-5xl font-bold mb-7">Watch everywhere</h4>
                        <p className="text-2xl text-wrap ">Steam unlimited movies and TV Shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <div className="relative ">
                        <img src="assets/images/devices.png" alt=""  className="z-0"/>
                        <video autoPlay loop muted 
                            src="assets/videos/tv_video1.m4v"  
                            className="absolute top-[40px] left-32 z-[-1] w-[400px]"
                        ></video>
                    </div>
                </div>
                {/* fourth */}
                <div className="w-screen flex justify-center items-center  border-b-8 border-neutral-800  py-10">
                    <div className="relative">
                        <img src="assets/images/children.png" alt=""  className="z-0"/>
                        
                    </div>
                    <div className="w-[600px]">
                        <h4 className="text-5xl font-bold mb-7">Create profile for kids</h4>
                        <p className="text-2xl text-wrap ">Send children on adventures with their favourite characters in a space made just for them--free with your memebership</p>
                    </div>
                </div>
            </div>

            {/* Footer*/}
            <Footer />
    </>
    )
}