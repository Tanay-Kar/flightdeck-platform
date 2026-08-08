import KorryBtn from "./components/AnnButton/AnnButton"

function App() {
  return (
    <>
      <h1 className="text-6xl font-bold text-center mt-10 text-mauve-300">
        Flightdeck Platform
      </h1>

      <h3 className="text-2xl font-bold text-center mt-20 text-mist-300">
        Annunciator Button Test
      </h3>
      <div className="flex items-center justify-center mx-auto my-10 w-50">
        <KorryBtn />
      </div>
    </>
  )
}

export default App
