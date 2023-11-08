'use client';

import {useEffect, useState} from 'react';
import Link from "next/link";

import {Button} from "@/components/ui/button";
import {FormCustom} from "@/components/FormCustom";
import {RadioGroupDemo} from "@/components/RadioGroupDemo";

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


   useEffect(() => {
      fetch('test/')
   }, []);


   console.log('EXAMPLES')
   return (
      <>
         <div>{title}</div>
         <FormCustom/>
         <RadioGroupDemo/>
         <Button asChild>
            <Link href={'/examples/1'}>link to slug element with suspense</Link>
         </Button>
      </>
   );
};