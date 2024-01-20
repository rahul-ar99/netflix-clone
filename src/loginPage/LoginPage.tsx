import Link from "next/link"

export default function LoginPage(){
    return(
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
                    <button className="bg-red-600 px-3 py-1 rounded-md">Sign in</button>
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
    </>
    )
}1