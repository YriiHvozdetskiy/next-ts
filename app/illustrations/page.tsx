import Link from "next/link";

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
