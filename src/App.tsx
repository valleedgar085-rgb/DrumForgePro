import { StepSequencer } from './features/drums/components/StepSequencer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          DrumForge Pro
        </h1>
        <StepSequencer />
      </div>
    </div>
  )
}

export default App
