import AnnButton from "./components/AnnButton/AnnButton"
import FCUButton from "./components/FCUButton/FCUButton"
import Knob from "./components/GatedKnob/GatedKnob"

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
              <AnnButton
                config={{
                  top: {
                    text: "AVAIL",
                    color: "green",
                    box: false,
                  },
                  bottom: {
                    text: "ON",
                    color: "cyan",
                    box: true,
                  },
                }}
                state={{
                  top: true,
                  bottom: false,
                }}
              />
            </div>
            <div className="w-50 shrink-0">
              <AnnButton
                config={{
                  top: {
                    text: "FAULT",
                    color: "amber",
                    box: false,
                  },
                  bottom: {
                    text: "OFF",
                    color: "white",
                    box: true,
                  },
                }}
                state={{
                  top: true,
                  bottom: false,
                }}
              />
            </div>
            <div className="w-50 shrink-0">
              <AnnButton
                config={{
                  top: {
                    text: "MASTER",
                    color: "yellow",
                    box: false,
                  },
                  bottom: {
                    text: "CAUT",
                    color: "yellow",
                    box: false,
                  },
                }}
                state={{
                  top: true,
                  bottom: true,
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-center mt-20 text-mist-300">
            FCU Button Test
          </h3>
          <div className="flex flex-col items-center justify-center gap-4 mx-auto my-10">

            <div className="w-50 shrink-0">
              <FCUButton
                config={{
                  text: "AP 1",
                }}
                state={{
                  fcuState: true,
                }}
              />
            </div>
            <div className="w-50 shrink-0">
              <FCUButton
                config={{
                  text: "AP 2",
                }}
                state={{
                  fcuState: false,
                }}
              />
            </div>
            <div className="w-50 shrink-0">
              <FCUButton
                config={{
                  text: "A/THR",
                }}
                state={{
                  fcuState: true,
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-center mt-20 text-mist-300">
            Gated Knob Test
          </h3>
          <div className="flex flex-col items-center justify-center gap-4 mx-auto my-10">
            <div className="w-50 shrink-0">
              <Knob />
            </div>
            <div className="w-50 shrink-0">
              <Knob />
            </div>
            <div className="w-50 shrink-0">
              <Knob />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
