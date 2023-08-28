"use client";

import React from 'react';
import {setCookie} from "@/app/components/setCookie/setCookie";

const SetCookieButton = () => {
    return (
        <form action={setCookie}>
            <button type="submit"
                    className="bg-amber-500 px-8 hover:text-amber-400 text-white py-2 text-lg border-amber-400 hover:border-amber-400  border-[1px] hover:border-[1px]  hover:bg-transparent transition-all duration-200">Set
                Cookie
            </button>
        </form>
    );
};

export default SetCookieButton;