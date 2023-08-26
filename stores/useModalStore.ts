import {createWithEqualityFn} from 'zustand/traditional'
import {shallow} from 'zustand/shallow'
import {devtools, persist} from "zustand/middleware";

interface StateProps {
   isOpen: boolean;
   onOpen: () => void;
   onClose: () => void;
}

export const useModalStore = createWithEqualityFn<StateProps>()(
   devtools(
      persist(
         (set) => ({
            isOpen: false,
            onOpen: () => set({isOpen: true}, false, 'onOpen'),
            onClose: () => set({isOpen: false}, false, 'onClose'),
         }),
         {name: 'ModalStore'}
      ),
      {
         name: 'ModalStore' // даєм назву store в ReduxDevtools
      }
   ),
   shallow,
)