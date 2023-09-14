import Link from "next/link";

import {Button} from "@/components/ui/button";

export default function HomePage() {

   //  спроба не дати відкрити devtools
   // useEffect(() => {
   //    window.addEventListener('keydown', function (event) {
   //
   //       if ((event.metaKey && event.shiftKey && event.key === 'C')) {
   //          event.preventDefault();
   //       }
   //
   //       if ((event.metaKey && event.altKey && event.key === 'C') || (event.ctrlKey && event.altKey && event.key === 'C')) {
   //          event.preventDefault();
   //       }
   //
   //       if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'C'))) {
   //          event.preventDefault();
   //       }
   //
   //       if ((event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I'))) {
   //          event.preventDefault();
   //       }
   //
   //       if ((event.ctrlKey && event.shiftKey && event.key === 'C')) {
   //          event.preventDefault();
   //       }
   //
   //       if ((event.metaKey && event.altKey && event.key === 'C') || (event.ctrlKey && event.altKey && event.key === 'C')) {
   //          event.preventDefault();
   //       }
   //    });
   // }, []);

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
