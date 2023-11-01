import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName:'Lauti',
    name:'Lautaro Toledo',
    isFollowing:true
  },
  {
    userName:'austin',
    name:'Lautaro Toledo',
    isFollowing:false
  },
  {
    userName:'rober',
    name:'Lautaro Toledo',
    isFollowing:true
  },
  {
    userName:'nahuel',
    name:'Lautaro Toledo',
    isFollowing:false
  },
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({userName, name, isFollowing}) => (
            <TwitterFollowCard
            key={userName}
            userName={userName}
            inicialIsFollowing={isFollowing}
            >
            {name}
            </TwitterFollowCard>
        ))
      }


      {/* <TwitterFollowCard userName="Lautiii.321" inicialIsFollowing>
        Lauatro Nahuel Toledo
      </TwitterFollowCard>

      <TwitterFollowCard userName="goku"  isFollowing>
      Goku el grande
      </TwitterFollowCard>

      <TwitterFollowCard userName="vxnder" isFollowing={false}>
        Soy de Prueva 
      </TwitterFollowCard> */}

    </section>
  )
}