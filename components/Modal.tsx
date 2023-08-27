import {ReactNode} from 'react';

import {Dialog, DialogContent} from "@/components/ui/dialog";

interface Props {
   children: ReactNode
   isOpen: boolean
   onClose: () => void
   contentStyle?: string
}

export const Modal = (
   {
      children,
      isOpen,
      onClose,
      contentStyle,
   }: Props) => {

   const onChange = (isOpen: boolean) => {
      if (!isOpen) {
         onClose()
      }
   }

   return (
      <Dialog open={isOpen} onOpenChange={onChange}>
         <DialogContent className={contentStyle}>
            {children}
         </DialogContent>
      </Dialog>
   );
};