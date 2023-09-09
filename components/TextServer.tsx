import {wait} from "@/utils";

export const TextServer = async () => {

   await wait(2000)

   return (
      <p className={'mb-3'}>Text <b>server</b> loading 2sec</p>
   )
}