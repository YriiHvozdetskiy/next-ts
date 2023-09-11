import {wait} from "@/utils";
import axios from "axios";

export const TextServer = async ({id = 2}: { id?: number }) => {
   // with fetch. чомусь відбувається ТРИ фетча
   const response = await fetch(`https://api.sciepro.sheep.fish/api/illustrations/${id}`).then(res => res.json())
   //

   // with axios. чомусь відбувається ТРИ запита
   // const {data} = await axios.get(`/illustrations/${id}`)

   await wait(2000)

   return (
      <>
         <p className={'mb-3'}>Text <b>server</b> + <strong>async function </strong> wait 2sec + фетч</p>

         {/*fetch*/}
         <p>title: {response?.data?.illustration?.title || 'no title'}</p>

         {/*axios*/}
         {/*<p>title: {data?.data?.illustration?.title || 'no title'}</p>*/}
      </>
   )
}