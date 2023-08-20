'use client';

import {FC, useState} from 'react';

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


// props in function declaration
// export function EXAMPLES(props: Props) {}
export const EXAMPLES: FC<Props> = ({title}) => {
   //в стейті може бути тільки ці значення
   const [user, setUser] = useState<Pick<User, 'name' | 'email'>>({name: 'John', email: 'gmail'});

   return (
      <>
         <div>{title}</div>
      </>
   );
};