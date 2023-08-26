import {FC, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage
} from "@/components/ui/form";
import {Modal} from "@/components/Modal";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useModalStore} from "@/stores";

interface Props {

}

// схема валідації форми
const formSchema = z.object({
   name: z.string().min(1, 'Name is required'),
})

export const FormCustom: FC<Props> = () => {
   const [isOpen, onOpen, onClose] = useModalStore((state) => [state.isOpen, state.onOpen, state.onClose]);
   // fix hydration error
   const [isMounted, setIsMounted] = useState(false);

   //react-hook-form, розпиляєм потім пропси в Form {...form}
   const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: '',
         image: ''
      }
   })

   const isLoading = form.formState.isSubmitting;

   const onSubmit = async (values: z.infer<typeof formSchema>) => {
      console.log('values', values)
   }

   // fix hydration error
   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) {
      return null;
   }

   return (
      <>
         <Modal isOpen={isOpen} onClose={onClose}>
            <Form {...form}>
               {/*берем submit з form*/}
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className={'space-y-8'}
               >
                  <div className={'space-y-8 px-6'}>
                     <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                           // це просто div
                           <FormItem>
                              <FormLabel
                                 className={'uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'}
                              >
                                 Server name
                              </FormLabel>
                              {/*тут контролюється інпут*/}
                              <FormControl>
                                 <Input
                                    disabled={isLoading}
                                    className={'bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'}
                                    placeholder="Enter server name"
                                    {...field} // передаєм всі пропси onChange, onBlur,onFocus
                                 />
                              </FormControl>
                              {/*тут відображається помилка з валідаціїї name: z.string().min(1, 'Name is required')*/}
                              <FormMessage/>
                           </FormItem>
                        )}
                     />
                  </div>
                  <Button disabled={isLoading}>
                     Create
                  </Button>
               </form>
            </Form>
         </Modal>
         <Button onClick={() => onOpen()}>open form</Button>
      </>
   );
};
