import { useState } from 'react';



export function TwitterFollowCard ({ children, userName, initialIsFollowing}) {

  const [isFollowig, setIsFollowig] = useState(initialIsFollowing)

  const text = isFollowig ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowig ? 'tw-followCard-btn is-following ' : 'tw-followCard-btn'

  const handlerClick = () => {
    setIsFollowig(!isFollowig)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar'
          alt='foto de perfil'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>
           @{userName}
          </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handlerClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>
            Dejar de seguir
          </span>
        </button>
      </aside>
    </article>
  )
}