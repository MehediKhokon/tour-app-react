import { useEffect, useState } from 'react'
import Tours from './components/Tours'

function App() {
  //get the data
  const url = 'https://django-recipe-app.herokuapp.com/api/'
  //set state for tour array
  const [tours, setTours] = useState([])

  async function fetchData() {
    const res = await fetch(url)
    const data = await res.json()
    setTours(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id)
    setTours(newTour)
  }

  return (
    <>
      <main>
        {tours.length === 0 ? (
          <div className='title'>
            <h2>No tour left</h2>
            <button className='btn' onClick={fetchData}>
              refreshes
            </button>
          </div>
        ) : (
          <Tours tours={tours} removeTour={removeTour} />
        )}
      </main>
    </>
  )
}

export default App
