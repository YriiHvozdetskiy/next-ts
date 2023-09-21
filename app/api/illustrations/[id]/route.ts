import {NextResponse} from "next/server"

export async function GET(_: Request, {params}: { params: { id: string } }) {
   const id = params.id

   const res = await fetch(`https://api.sciepro.sheep.fish/api/illustrations/${id}`)
   const illustration = await res.json()

   if (!res.ok) {
      return NextResponse.json({error: 'Cannot find illustration'}, {
         status: 404
      })
   }

   return NextResponse.json(illustration, {
      status: 200
   })
}
