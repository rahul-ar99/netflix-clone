import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="flex w-full justify-between items-center">
                <h1 className="">
                    <Link href="/">
                        <div className="p-4">
                            <img className="max-w-40" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="netflix" />
                        </div>
                    </Link>
                </h1>
            </nav>
    )
}