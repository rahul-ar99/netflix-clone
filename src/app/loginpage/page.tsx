"use client";

import Link  from "next/link"
import { useRouter } from "next/navigation";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
import React, {useRef, useState} from "react"
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";



interface LogInProp {}

// export default function LoginPage(){
const loginpage: React.FC<LogInProp> = () =>{
    // if user is entered correct details, then redirect to main page
    const router = useRouter();

    const [message, setMessage] = useState("")
    // const [emailInput, setEmail] = useState('');
    // const [passwordInput, setPassword] = useState('');

    // const handleEmailchange = (e:ChangeEvent<HTMLInputElement>)=>{
    //     setEmail(e.target.value)
    // }
    // const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>)=>{
    //     setPassword(e.target.value)
    // }

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);





    const login = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setMessage("")
        const email = emailRef.current?.value ?? "";
        const password = passwordRef.current?.value ?? "";


        signInWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{
                const user = userCredential.user;
                // alert('signup Successful')
                router.push("/mainpage");
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                setMessage("Username or Password is wrong")
                // alert (errorMessage)
            })
    }

    return(
        <>
        <div style={{backgroundImage:'linear-gradient(to bottom,rgba(0, 0, 0, 0.495),rgba(0, 0, 0, 0.313),rgba(0, 0, 0, 0.57)),url(../../assets/images/spotlight_1.jpg)'}} className="flex flex-col w-screen border-b-8 border-neutral-800">
            <Navbar />
            <div className="flex flex-col justify-center items-center w-full py-32">
                <div className="bg-neutral-950/[0.7] p-14 w-[450px]">
                    <h3 className="mb-8 text-3xl">Log In</h3>
                    {message && <h5 className="text-red-600">{message}</h5>}
                    <form onSubmit={login}  className="flex flex-col gap-3">
                        <input 
                            className="h-14 w-full rounded px-3 bg-stone-800/[0.7]" 
                            type="email" 
                            placeholder="Email or Phone number"
                            ref={emailRef}
                            />
                        <p></p>
                        <input 
                            className="h-14 w-full rounded px-3 bg-neutral-900/[0.8]" 
                            type="password" 
                            placeholder="Password" 
                            ref={passwordRef}
                            />  
                        <input className="h-12 w-full rounded bg-red-600 mt-3" type="submit" value="Log In"/>
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
                        <p>New to Netflix?<Link href={'/signuppage'} className="text-white" >Sign up now</Link></p>
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
export default loginpage