import {NextResponse} from "next/server";

export const dynamic = 'force-dynamic'

export async function GET() {
   // цей запит виконується на сервері
   const res = await fetch('https://api.sciepro.sheep.fish/api/filters')

   const filters = await res.json()
   // ми не можемо просто повернути tickets, нам потрібно повернути обєкт, тому викор NextResponse
   return NextResponse.json(filters, {
      status: 200
   })
}