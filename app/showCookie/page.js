import React from 'react';
import {cookies} from "next/headers";
import Btn from "@/app/showCookie/components/Btn";
import Link from "next/link";

const ShowCookie = () => {
    
    const cookieStore = cookies()
    const theme = cookieStore.get('theme')
    
    return (<div>
        <h1 className="bg-amber-500 text-center text-xl py-3 text-white shadow-md">Show Cookie Page</h1>
        <div className="grid place-content-center h-screen">
            {theme ? <Btn data={theme}/> : <div className='flex flex-col items-center gap-5'>
                <p className="text-xl font-semibold">Cookies Not Set Go Home Page and set Cookie</p>
                <Link href={'/'}
                      className="bg-amber-500 px-8 hover:text-amber-400 text-white py-2 text-lg border-amber-400 hover:border-amber-400  border-[1px] hover:border-[1px]  hover:bg-transparent transition-all duration-200">Home</Link>
            </div>}
        </div>
    </div>);
};

export default ShowCookie;