import Link from "next/link"
import Footer from "../components/Footer"

export default function LoginPage(){
    return(
        <>
        <div style={{backgroundImage:'linear-gradient(to bottom,rgba(0, 0, 0, 0.495),rgba(0, 0, 0, 0.313),rgba(0, 0, 0, 0.57)),url(../../assets/images/spotlight_1.jpg)'}} className="flex flex-col w-screen border-b-8 border-neutral-800">
            <nav className="flex w-full justify-between items-center">
                <h1 className="">
                    <Link href="/">
                        <div className="">
                            <img className="max-w-52" src="/assets/images/logo.png" alt="netflix" />
                        </div>
                    </Link>
                </h1>
            </nav>
            <div className="flex flex-col justify-center items-center w-full py-32">
                <div className="bg-neutral-950/[0.6] p-14 w-[450px]">
                    <h3 className="mb-8 text-3xl">Sign In</h3>
                    <form action="/" className="flex flex-col gap-6">
                        <input className="h-14 w-full rounded px-3 bg-stone-800/[0.7]" type="email" placeholder="Email or Phone number"/>
                        <input className="h-14 w-full rounded px-3 bg-neutral-900/[0.8]" type="password" placeholder="Password" />  
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
                            <p>New to Netflix?<span className="text-white">Sign up now</span></p>
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
}1