// import { NextResponse } from "next/server"

// const allowOrigins = process.env.NODE_ENV === 'production' 
// ? ['https://kingsley-onah.vercel.app/','https://kingsley-onah-git-main-zealmaster.vercel.app/', 
// 'https://kingsley-onah-zealmaster.vercel.app', 'https://kingsley-onah-zealmaster.vercel.app/'] 
// : ['http://localhost:3000']

// export const middleware = (request: Request) => {
//  const origin = request.headers.get('origin')
//  console.log(origin)

//  if(origin && !allowOrigins.includes(origin)) {
//     return new NextResponse(null,  {
//         status: 400,
//         statusText: 'Bad Request',
//         headers: {
//             'Content-Type': 'text/plain',
//         }
//     })
//  }

//  return NextResponse.next()
// }
// export const config = {
//     matcher: '/api/:path*',
//   }