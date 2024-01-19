import Link from "next/link"

export default function LoginPage(){
    return(
    <>
        <div className="flex flex-col w-screen px-96">
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
                    <button className="bg-red-600 px-3 py-1 rounded-md">Sign in</button>
                </div>
            </nav>
                <div className="flex flex-col justify-center items-center w-full border-2 border-white py-32">
                    <div className="text-center">
                        <h3 className="text-4xl font-black py-3">The biggest Indian hits. Ready to watch here from<br/>$149.</h3>
                        <p className="text-xl py-3">Join today. Cancel anytime.</p>
                        <p className="text-xl py-3">Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                    <div>
                        <form action="/">
                            <input className="w-56 bg-transparent border px-4 py-2" type="email" placeholder="Email address"/>
                            <input className="bg-red-600 px-3 py-1 rounded-md" type="submit" value="Get Started >"/>
                        </form>
                    </div>
                </div>
            </div>    
    </>
    )
}1