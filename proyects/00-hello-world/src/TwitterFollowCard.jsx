import { useState } from 'react'
import './App.css'

export function  TwitterFollowCard({ userName, children, inicialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(inicialIsFollowing)
  
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClisck = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
        className='tw-followCard-avatar'
        alt="avatar" 
        src={`https://unavatar.io/${userName}`} />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span
          className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClisck}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}

//el children lo podes utilisar de un formato mas libre