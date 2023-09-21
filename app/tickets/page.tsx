"use client"

// export const metadata = {
//    title: 'next-ts | Tickets'
// }

interface Props {

}

const getPosts = async () => {
   const res = await fetch('https://api.sciepro.sheep.fish/api/tickets')
}

const getTickets = async () => {
   const res = await fetch('https://api.sciepro.sheep.fish/api/tickets')
}

export default function TicketsPage({}: Props) {
   // https://youtu.be/8pzIuLFuv6U?t=1302
   // const [posts, tickets] = await Promise.all([getPosts(), getTickets()])

   return (
      <section className={'container'}>
         <h1>Tickets</h1>
      </section>
   );
};