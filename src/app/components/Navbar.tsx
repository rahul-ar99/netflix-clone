import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="flex w-full justify-between items-center">
                <h1 className="">
                    <Link href="/">
                        <div className="">
                            <img className="max-w-52" src="/assets/images/logo.png" alt="netflix" />
                        </div>
                    </Link>
                </h1>
            </nav>
    )
}