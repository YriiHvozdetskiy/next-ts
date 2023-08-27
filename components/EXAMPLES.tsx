'use client';

import {useState} from 'react';

import {Button} from "@/components/ui/button";
import {FormCustom} from "@/components/FormCustom";

// передаєм любі пропси, скільки хочем
// <EXAMPLES age={0} title={'hello'}/>
interface Props {
   [key: string]: any;
}

interface User {
   name: string
   email: string
   age?: number
}

// тип дії може бути такий або такий
type Action =
   | { type: 'increment' }
   | { type: 'decrement' };


export const EXAMPLES = ({title}: Props) => {
   //в стейті може бути тільки ці значення
   const [user, setUser] = useState<Pick<User, 'name' | 'email'>>({name: 'John', email: 'gmail'});

   return (
      <>
         <div>{title}</div>
         <FormCustom/>
      </>
   );
};