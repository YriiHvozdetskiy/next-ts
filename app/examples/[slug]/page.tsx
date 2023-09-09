import {Suspense} from "react";

import {wait} from "@/utils";
// не застусується
import Loading from "@/app/loading";
// застосується якщо в папці [slug] немає файлу loading
import LoadingExamples from "@/app/examples/loading";
// застосується в першу чергу, даже якщо в папці examples є loading файл
import LoadingExamplesDetails from "@/app/examples/[slug]/loading";
import {TextServer} from "@/components/TextServer";

export default function ExamplesDetails() {


   return (
      <section className={'container'}>
         <h1 className={'mb-4 font-semibold capitalize text-2xl'}>Example Details page</h1>
         <p className={'mb-2 font-medium text-emerald-700'}>Is it not in Suspense wrapper</p>
         <Suspense fallback={<LoadingExamplesDetails/>}>
            <TextServer/>
         </Suspense>
      </section>
   )
}
