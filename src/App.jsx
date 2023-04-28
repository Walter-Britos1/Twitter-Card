import { TwitterFollowCard } from "./TwitterFollowCard";


import './App.css'

const users = [
  {
    userName: 'Lilith',
    name: ' Yamila Martinez...🐐',
    isFOllowing: true
  },
  {
    userName: 'Flavy',
    name: 'Flavy...🦄',
    isFOllowing: false 
  },
  {
    userName: 'Walter',
    name: 'Walter Britos...💻',
    isFOllowing: false 
  },
  {
    userName: 'Alex',
    name: 'Alex Perez...👮🏻‍♂️',
    isFOllowing: false 
  },
]

export function App () {
  return(
    <section className='App'>
      {
        users.map( user => {
          const { userName, name, isFOllowing} = user;
          return (
            <TwitterFollowCard 
            key={userName}
            userName={userName}
            initialIsFOllowing={isFOllowing}>
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}


