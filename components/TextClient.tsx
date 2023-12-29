'use client'

import {useEffect, useState} from "react";
import {wait} from "@/utils/delay";


export const TextClient = () => {
   const [isShow, setIsShow] = useState(false)

   const fetchData = async () => {
      await wait(1000);
      setIsShow(true)
   }

   useEffect(() => {
      fetchData()
   }, []);

   return (
      <div className={'border-t border-amber-100'}>
         <p className={'mb-2'}>відображається поки йде завантаження</p>
         {isShow && <p>Text <b>client</b> loading 1sec</p>}
      </div>
   )
}