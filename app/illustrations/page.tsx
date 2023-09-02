import Link from "next/link";

// export const dynamicParams = true // Dynamic Routes with dynamicParams: true

// export async function generateStaticParams() {
//    const res = await fetch(ILLUSTRATIONS())
//
//    const {data} = await res.json()
//
//    return data.map((element) => ({
//       id: element.id.toString()
//    }))
// }

export default async function IllustrationsPage() {
   const res = await fetch('https://api.sciepro.sheep.fish/api/filters', {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json'
      }
   });

   return (
      <div className={'container'}>
         <Link href={'/illustrations/1'}>link</Link>
      </div>
   )
}
