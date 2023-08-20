import Link from "next/link";

import {Button} from "@/components/ui/button";

export default function HomePage() {
   return (
      <>
         <section className={'container'}>
            HomePage
            {/*якщо потрібна силка asChild*/}
            <Button asChild>
               <Link href={'/about'}>About</Link>
            </Button>
         </section>
      </>
   )
}
