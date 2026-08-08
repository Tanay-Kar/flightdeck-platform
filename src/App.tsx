import AnnButton from "./components/AnnButton/AnnButton"

function App() {
  return (
    <>
      <h1 className="text-6xl font-bold text-center mt-10 text-mauve-300">
        Flightdeck Platform
      </h1>

      <h3 className="text-2xl font-bold text-center mt-20 text-mist-300">
        Annunciator Button Test
      </h3>
      <div className="flex items-center justify-center gap-4 mx-auto my-10">

        <div className="w-50 shrink-0">
          <AnnButton top={{ text: "AVAIL", color: "green", box: false }} bottom={{ text: "", color: "off", box: false }} />
        </div>
        <div className="w-50 shrink-0">
          <AnnButton top={{ text: "", color: "off", box: false }} bottom={{ text: "OFF", color: "white", box: true }} />
        </div>
        <div className="w-50 shrink-0">
          <AnnButton top={{ text: "MASTER", color: "yellow", box: false }} bottom={{ text: "CAUT", color: "yellow", box: false }} />
        </div>
      </div>
    </>
  )
}

export default App
