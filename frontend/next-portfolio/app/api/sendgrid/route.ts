import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    test: 'stuff',
  })
}

// export async function POST(request: Request, response) {
//   return sendEmail(request, response);
// }