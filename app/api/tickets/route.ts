import {NextResponse} from "next/server"
// TODO це для роботи з базою даних
//2. або зробити щоб всі запити по цьому марштуру були динамічніми
export const dynamic = 'force-dynamic'

// static routes + cached - default
export async function GET() {
   // цей запит виконується на сервері
   const res = await fetch('http://localhost:4000/tickets', {
      //1. можем зробити щоб дані не кишувалися
      // next: {
      //    revalidate: 0
      // }
   })

   const tickets = await res.json()
   // ми не можемо просто повернути tickets, нам потрібно повернути обєкт, тому викор NextResponse
   return NextResponse.json(tickets, {
      status: 200
   })
}

export async function POST(request: Request) {
   // request - тут ми отримуєм тіло(body) запиту
   const ticket = await request.json()

   const res = await fetch('http://localhost:4000/tickets', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(ticket)
   })

   const newTicket = await res.json()

   return NextResponse.json(newTicket, {
      status: 201
   })
}