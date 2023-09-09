"use client";

import {Suspense} from "react";

// можна використовувати loading яка на рівні app
import Loading from "@/app/loading";
// можна використовувати loading яка на рівні ClientPage
import LoadingClientPage from "@/app/client-page/loading";

import {TextServer} from "@/components/TextServer";
import {TextClient} from "@/components/TextClient";

export const Client = () => {

   return (
      <>
         <h1 className={'mb-4 font-semibold capitalize text-2xl'}>Client page</h1>
         <p className={'mb-2 font-medium text-emerald-700'}>Is it not in Suspense wrapper</p>
         <Suspense fallback={<LoadingClientPage/>}>
            <TextServer id={1}/>
         </Suspense>

         {/*не працює з клієнськими компонентами*/}
         <Suspense fallback={<Loading/>}>
            <TextClient/>
         </Suspense>
      </>
   );
};