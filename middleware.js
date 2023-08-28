import {NextResponse} from "next/server";

export const middleware = (req, res) => {
    if (req.nextUrl.pathname.startsWith(("/api/login"))) {
        const headerList = new Headers(req.headers);
        const token = headerList.get('token');
        if (token === "Bearer-XYZ") {
            return NextResponse.next()
        } else {
            return NextResponse.json({
                message: "Unauthorized Access. Please set a token header. Header key is token and value is  Bearer-XYZ"
            })
        }
    }
}