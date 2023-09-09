'use client';

import {usePathname} from "next/navigation";
import Link from "next/link";

import {navRoutes} from "@/constants";

export const Navigate = () => {
   const pathname = usePathname()

   return (
      <nav>
         <ul className={'flex items-center space-x-[2rem]'}>
            {navRoutes.map((route) => {
               const isCurrent = pathname === route.path

               return (
                  <li key={route.path}>
                     <Link className={`${isCurrent ? 'text-yellow-600' : ''} font-semibold`}
                           href={route.path}>{route.name}</Link>
                  </li>)
            })}
         </ul>
      </nav>
   );
}