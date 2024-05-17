import { NextResponse } from "next/server"

export function middleware(request){
    console.log("Hello from todo-list");

    // return Response.json({
    //     message:'Hello there'
    // })

    // return NextResponse.redirect(new URL("/",request.url))
}

export const config={
    matcher:'/todo-list'
}