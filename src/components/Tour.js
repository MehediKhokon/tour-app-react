import { useState } from 'react'

function Tour({ id, image, information, name, removeTour }) {
  const [more, setMore] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
        </div>
        <p>
          {more ? information : `${information.substring(0, 200)}...`}
          <button onClick={() => setMore(!more)}>
            {more ? 'show less' : 'show more'}{' '}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
