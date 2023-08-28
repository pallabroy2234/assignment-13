'use client'
import React, {useState} from 'react';

const Btn = ({data}) => {
    let getCookie = data
    const [cookie, setCookie] = useState('')
    const handleClick = () => {
        setCookie(getCookie)
    }
    return (
        <div>
            <button onClick={handleClick}
                    className="bg-amber-500 px-8 hover:text-amber-400 text-white py-2 text-lg border-amber-400 hover:border-amber-400  border-[1px] hover:border-[1px]  hover:bg-transparent transition-all duration-200 mb-5">Get
                Cookie
            </button>
            {
                getCookie ? <div>
                    <h1>{cookie.name}</h1>
                    <h1>{cookie.value}</h1>
                </div> : null
            }
        </div>
    );
};

export default Btn;

//<p>Name :{cookie.name}  {cookie.value}</p>