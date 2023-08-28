import {redirect} from "next/navigation";

//  hit browser with =>  http://localhost:3000/api/redirect
export const GET = (req, res) => {
    redirect('/')
}