import {wait} from "@/utils";

export const TextServer = async ({id = 2}: { id?: number }) => {
   // чомусь відбувається ТРИ фетча
   const response = await fetch(`https://api.sciepro.sheep.fish/api/illustrations/${id}`).then(res => res.json())

   await wait(2000)

   return (
      <>
         <p className={'mb-3'}>Text <b>server</b> + <strong>async function </strong> wait 2sec + фетч</p>
         <p>title: {response?.data?.illustration?.title || 'no title'}</p>
      </>
   )
}