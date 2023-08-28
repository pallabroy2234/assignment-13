import SetCookieButton from "@/app/components/setCookie/SetCookieButton";
import {cookies} from "next/headers";
import Link from "next/link";

export default function Home() {
    const cookieStore = cookies()
    const theme = cookieStore.get('theme')
    
    return (
        <main>
            <h1 className="bg-amber-500 text-center text-xl py-3 text-white shadow-md">Home Page</h1>
            <div className="grid place-content-center h-screen">
                <div className="flex gap-4 items-center">
                    <SetCookieButton/>
                    <Link href={'/showCookie'}
                          className="hover:bg-amber-500 px-8 hover:text-white  text-amber-400 py-2 text-lg border-amber-400 hover:border-amber-400  border-[1px] hover:border-[1px]  bg-transparent transition-all duration-200">Show
                        Cookies Route</Link>
                </div>
            </div>
        </main>
    )
}
