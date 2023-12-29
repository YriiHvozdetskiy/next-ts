import Image from "next/image";
import {notFound} from "next/navigation";
import axios from "axios";

export async function generateMetadata({params}: { params: { id: string } }) {
   const id = params.id

   const res = await fetch(`https://api.sciepro.sheep.fish/api/illustrations/${id}`)

   const data = await res.json()

   if (!res.ok) {
      notFound()
   }

   return {
      title: `SciePro | ${data?.data?.illustration?.title}`,
      description: `${data?.data?.illustration?.short_description}`,
   }


   /* ======= with axios  no cache======= */
   // try {
   //    const {data} = await axios.get(`https://api.sciepro.sheep.fish/api/illustrations/${id}`)
   //   
   //    return {
   //       title: `SciePro | ${data?.data?.illustration?.title}`,
   //       description: `${data?.short_description}`,
   //    }
   // } catch (error) {
   //    notFound()
   // }
}


async function getIllustration(id: string) {
   const res = await fetch(`https://api.sciepro.sheep.fish/api/illustrations/${id}`, {
      // cache: 'no-store'
      next: {
         revalidate: 60
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
