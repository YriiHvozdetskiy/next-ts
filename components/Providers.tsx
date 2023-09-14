"use client";

import {ReactNode} from "react";

interface Props {
   children: ReactNode
}

export const Providers = ({children}: Props) => {
   // не дає спрацювати контекст Menu (клік лівою кнопкою миші)
   const handleContextMenu = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
   };

   return (
      <div
         // onContextMenu={handleContextMenu}
         className={'min-h-screen'}
      >
         {children}
      </div>
   );
};