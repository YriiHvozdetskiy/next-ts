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

type State = {
   finishLoading(data: any): unknown;
   startLoading(): unknown;
   setError(message: string): unknown;
   data: any,
   loading: boolean,
   error: string,
   fetchData: () => Promise<void>
}

const API_URL = 'https://api.example.com/data';

async function fetchAPIData() {
   const res = await fetch(API_URL)
   return await res.json()
}

export const useStore = createWithEqualityFn<State>((setState) => ({

      data: null,
      loading: false,
      error: '',

      startLoading: () => setState({loading: true, error: ''}),
      finishLoading: (data: any) => setState({data, loading: false}),
      setError: (error: string) => setState({error, loading: false}),
      fetchData: async () => {
         useStore.getState().startLoading();
         try {
            const data = await fetchAPIData();
            useStore.getState().finishLoading(data);
         } catch (error) {
            if (error instanceof Error) {
               useStore.getState().setError(error.message);
            }
         }
      }
   }),
   shallow
);