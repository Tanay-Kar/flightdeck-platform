import AnnButton from "./components/AnnButton/AnnButton"
import FCUButton from "./components/FCUButton/FCUButton"

function App() {
  return (
    <>
      <h1 className="text-6xl font-bold text-center mt-10 text-mauve-300">
        Flightdeck Platform
      </h1>
      <div className="flex flex-row items-center justify-center gap-20 mx-auto my-10">
        <div>
          <h3 className="text-2xl font-bold text-center mt-20 text-mist-300">
            Annunciator Button Test
          </h3>
          <div className="flex flex-col items-center justify-center gap-4 mx-auto my-10">

            <div className="w-50 shrink-0">
              <AnnButton top={{ text: "AVAIL", color: "green", box: false, annState: "on" }} bottom={{ text: "START", color: "cyan", box: true, annState: "off" }} />
            </div>
            <div className="w-50 shrink-0">
              <AnnButton top={{ text: "FAULT", color: "amber", box: false, annState: "on" }} bottom={{ text: "OFF", color: "white", box: true, annState: "off" }} />
            </div>
            <div className="w-50 shrink-0">
              <AnnButton top={{ text: "MASTER", color: "yellow", box: false, annState: "on" }} bottom={{ text: "CAUT", color: "yellow", box: false, annState: "on" }} />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-center mt-20 text-mist-300">
            FCU Button Test
          </h3>
          <div className="flex flex-col items-center justify-center gap-4 mx-auto my-10">

            <div className="w-50 shrink-0">
              <FCUButton text="AP 1" fcuState="on" />
            </div>
            <div className="w-50 shrink-0">
              <FCUButton text="AP 2" fcuState="off" />
            </div>
            <div className="w-50 shrink-0">
              <FCUButton text="A/THR" fcuState="on" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
