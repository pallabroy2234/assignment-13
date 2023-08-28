import {NextResponse} from "next/server";


// If you want to access login route set a header.  Header key is token and value is  Bearer-XYZ

export const GET = (req, res) => {
    return NextResponse.json({
        message: "You are logged in"
    })
}