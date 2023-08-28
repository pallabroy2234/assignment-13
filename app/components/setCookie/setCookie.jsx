'use server'

import {cookies} from "next/headers";

export async function setCookie() {
    cookies().set({
        name: 'theme',
        value: 'dark',
        httpOnly: true,
        path: '/',
        expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
    })
}