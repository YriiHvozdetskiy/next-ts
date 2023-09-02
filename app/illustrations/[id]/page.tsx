import Image from "next/image";

// export const dynamicParams = true
//
// export async function generateStaticParams() {
//    const res = await fetch(ILLUSTRATIONS())
//
//    const {data} = await res.json()
//
//    return data.map((element) => ({
//       id: element.id.toString()
//    }))
// }

// export async function generateMetadata({params}) {
//    const id = params.id
//
//    // const res = await fetch(ILLUSTRATIONS(id))
//    //
//    // const data = await res.json()
//    //
//    // if (!res.ok) {
//    //    notFound()
//    // }
//
//    // return {
//    //    title: `SciePro | ${data?.title}`,
//    //    description: `${data?.short_description}`,
//    // }
//
//    try {
//       const {data} = await axios.get(ILLUSTRATIONS(id))
//
//       return {
//          title: `SciePro | ${data?.title}`,
//          description: `${data?.short_description}`,
//       }
//    } catch (error) {
//       notFound()
//    }
// }

import {notFound} from "next/navigation";

async function getIllustration(id: string) {
   const res = await fetch(`https://api.sciepro.sheep.fish/api/illustrations/${id}`, {
      // cache: 'no-store'
      next: {
         revalidate: 0
      }
   })

   if (!res.ok) {
      notFound()
   }

   return res.json()
}

// {params}: { params: { id: string } } - це тому так, що [id] так написано
export default async function IllustrationDetails({params}: { params: { id: string } }) {
   const id = params.id
   const response = await getIllustration(id)
   const data = response?.data?.illustration;
   // console.log('data getIllustration', data)

   return (
      <div className={'container'}>
         <div>
            <Image
               className={'product-img w-full h-full object-cover'}
               src={data?.preview}
               alt={'picture'}
               width={'840'}
               height={'470'}
            />
         </div>
         <div
            className={'flex items-center justify-between max-lg:py-[1.6rem] max-lg:border-b max-lg:border-[#F1F2F6] max-lg:absolute w-full bottom-0 lg:mt-[1.6rem]'}>
            <div className={'info-picture-wrapper__body'}>
               <div>
                  <b className={'text-[1.1rem lg:text-[1.2rem] font-semibold'}>Original resolution</b>
                  <span
                     className={'text-[1.1rem lg:text-[1.2rem] font-semibold text-[#747D8C]'}>
                           {`${data?.width}x${data?.height}px`}
                        </span>
               </div>
            </div>
            <div className={'info-picture-wrapper__body'}>
               <div>
                  <b className={'text-[1.1rem lg:text-[1.2rem] font-semibold'}>Upload date</b>
                  <span
                     className={'text-[1.1rem lg:text-[1.2rem] font-semibold text-[#747D8C]'}>{data?.uploaded_at}</span>
               </div>
            </div>
            <div className={'info-picture-wrapper__body'}>
               <div>
                  <b className={'text-[1.1rem lg:text-[1.2rem] font-semibold'}>Id</b>
                  <span
                     className={'text-[1.1rem lg:text-[1.2rem] font-semibold text-[#747D8C]'}>{data?.unique_key}</span>
               </div>
            </div>
         </div>
      </div>
   )
}
