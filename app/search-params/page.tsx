"use client";

import {useSearchParams} from "next/navigation";

interface Props {

}

export default function SearchParamsPage({}: Props) {
   const searchParams = useSearchParams()

   const isHas = searchParams.has("a")
   console.log('isHas', isHas)// false

   console.log('searchParams', searchParams)
   //TODO  використати useRouter для зміни url, див "збережене" телеграм
   return (
      <section className={'container'}>
         SearchParams
      </section>
   );
}