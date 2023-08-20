import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
   return (
      <>
         <section className={'container'}>
            AboutPage
            {/*якщо потрібна силка asChild*/}
            <Button asChild variant={'destructive'}>
               <Link href="/">Home</Link>
            </Button>
         </section>
      </>
   )
}
