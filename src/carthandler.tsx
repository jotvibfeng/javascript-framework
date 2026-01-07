import { useEffect, useState } from 'react'

function App() {
  const [myValue, setMyValue] = useState(0)

  function handleButtonClick() {
    setMyValue((prevState) => prevState + 1)
  }
  function handleButtonClickDecrase() {
    setMyValue((prevState) => prevState - 1)
  }
  function handleButtonClickRest() {
    setMyValue(0)
  }

  useEffect(() => {
    console.log('useEffect fired')
  }, [])

  console.log('Render App component')

  return (
    <div className="text-3xl font-bold underline">
      <div>{myValue}</div>
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded"
      >
        Increase +
      </button>
      <button
        onClick={handleButtonClickDecrase}
        className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded"
      >
        Decrease -
      </button>
      <button
        onClick={handleButtonClickRest}
        className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded"
      >
        Rest
      </button>
    </div>
  )
}

export default App
