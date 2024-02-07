"use client";

// Import dependencies that are only needed in the browser

import Link  from "next/link"
import { useRouter } from "next/navigation";
import React, {useRef, useState} from "react"
import { auth } from "../firebase";
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import("../components/Navbar"));
const Footer = dynamic(() => import("../components/Footer"));
import { createUserWithEmailAndPassword } from "firebase/auth";

// Define the component
export default function LoginPage() {
    const router = useRouter();

    const [message, setMessage] = useState("");
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const signin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (email && password) {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert('Login Successful');
                router.push("/mainpage");
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage);
            });
        }
    }

    return (
        <>
            <div style={{backgroundImage:'linear-gradient(to bottom,rgba(0, 0, 0, 0.495),rgba(0, 0, 0, 0.313),rgba(0, 0, 0, 0.57)),url(../../assets/images/spotlight_1.jpg)'}} className="flex flex-col w-screen border-b-8 border-neutral-800">
                <Navbar />
                <div className="flex flex-col justify-center items-center w-full py-32">
                    <div className="bg-neutral-950/[0.7] p-14 w-[450px]">
                        <h3 className="mb-8 text-3xl">Sign In</h3>
                        {message && <h5 className="text-red-600">{message}</h5>}
                        <form onSubmit={signin}  className="flex flex-col gap-3">
                            <input 
                                className="h-14 w-full rounded px-3 bg-stone-800/[0.7]" 
                                type="email" 
                                placeholder="Email or Phone number"
                                ref={emailRef}
                                // onChange={(e)=>setUsername(e.target.value)}
                            />
                            <p></p>
                            <input 
                                className="h-14 w-full rounded px-3 bg-neutral-900/[0.8]" 
                                type="password" 
                                placeholder="Password" 
                                // onChange={(e)=>setPassword(e.target.value)}
                                ref={passwordRef}
                            />  
                            <input className="h-12 w-full rounded bg-red-600 mt-3" type="submit" value="Sign In"/>
                        </form>
                        <div className="text-slate-600">
                            <div className="flex justify-between">
                                <div>
                                    <input type="checkbox" id="rememberme" />
                                    <label htmlFor="rememberme">Remember me</label>
                                </div>
                                <p>need help?</p>
                            </div>
                            <div className="my-4">
                                <p>Already a member? <Link href={"/loginpage"} className="text-white cursor-pointer" >Log in now</Link></p>
                            </div>
                            <div>
                                <p>this page is protected by google recaptcha to ensure you're not a bot. <span className="text-blue-600">Learn more.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}





// import Link  from "next/link"
// import { useRouter } from "next/navigation";
// import Footer from "../components/Footer"
// import Navbar from "../components/Navbar";
// import React, {useRef, useState} from "react"
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import { BASE_URL } from "../axiosConfig";
// import { MOVIE_BASE_URL } from "../axiosConfig";




// export default function LoginPage(){

//     // if user is entered correct details, then redirect to main page
//     const router = useRouter();


//     //stype method 

//     const [message, setMessage] = useState("")
  
//     // create useRef element for email and password
//     const emailRef = useRef<HTMLInputElement>(null);
//     const passwordRef = useRef<HTMLInputElement>(null);

//     // creating signin function
//     const signin = (e: React.FormEvent<HTMLFormElement>) =>{

        
//         // its for load correctly
//         e.preventDefault();


//         // receive data from user
//         const email = emailRef.current?.value;
//         const password = passwordRef.current?.value;

//         if(email && password){

//             // create user with firebase auth
//             createUserWithEmailAndPassword(auth,email,password)
//             .then((userCredential)=>{
//                 const user = userCredential.user;
//                 alert('login Successful')
//                 router.push("/mainpage");
                
//             })
//             .catch((error)=>{
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 alert (errorMessage)
//             })
//         }

//     }

//     return(
//         <>
//         <div style={{backgroundImage:'linear-gradient(to bottom,rgba(0, 0, 0, 0.495),rgba(0, 0, 0, 0.313),rgba(0, 0, 0, 0.57)),url(../../assets/images/spotlight_1.jpg)'}} className="flex flex-col w-screen border-b-8 border-neutral-800">
//             <Navbar />
//             <div className="flex flex-col justify-center items-center w-full py-32">
//                 <div className="bg-neutral-950/[0.7] p-14 w-[450px]">
//                     <h3 className="mb-8 text-3xl">Sign In</h3>
//                     {message && <h5 className="text-red-600">{message}</h5>}
//                     <form onSubmit={signin}  className="flex flex-col gap-3">
//                         <input 
//                             className="h-14 w-full rounded px-3 bg-stone-800/[0.7]" 
//                             type="email" 
//                             placeholder="Email or Phone number"
//                             ref={emailRef}
//                             // onChange={(e)=>setUsername(e.target.value)}
//                             />
//                         <p></p>
//                         <input 
//                             className="h-14 w-full rounded px-3 bg-neutral-900/[0.8]" 
//                             type="password" 
//                             placeholder="Password" 
//                             // onChange={(e)=>setPassword(e.target.value)}
//                             ref={passwordRef}
                            
//                             />  
//                         <input className="h-12 w-full rounded bg-red-600 mt-3" type="submit" value="Sign In"/>
//                     </form>
//                     <div className="text-slate-600">

//                         <div className="flex justify-between">
//                             <div>
//                                 <input type="checkbox" id="rememberme" />
//                                 <label htmlFor="rememberme">Remember me</label>
//                             </div>
//                             <p>need help?</p>
//                         </div>
//                         <div className="my-4">
//                             <p>Already a member? <Link href={"/loginpage"} className="text-white cursor-pointer" >Log in now</Link></p>

//                         </div>
//                         <div>
//                             <p>this page is protected by google recaptcha to ensure you're not a bot. <span className="text-blue-600">Learn more.</span></p>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//             <Footer />
//             </div>

//         </>
//     )
// }
