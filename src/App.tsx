import { useEffect, useState } from 'react'

function Greeting() {
  useEffect(() => {
    console.log('Greeting mounted')

    return () => {
      console.log('Greeting unmounted')
    }
  }, [])

  return <h1 className="underline-none">Hello, Bob!</h1>
}

function App() {
  const [showGreeting, setShowGreeting] = useState(true)

  return (
    <div className="text-3xl font-bold">
      <div>
        <button
          className="bg-red-300 hover:bg-red-600 cursor-pointer active:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-200 ease-in-out"
          onClick={() => {
            setShowGreeting(false)
          }}
        >
          Hide Greeting
        </button>
      </div>
      <div>{showGreeting ? <Greeting /> : null} </div>
    </div>
  )
}

export default App
