import CardMovie from "./components/CardMovie.tsx"

function App() {
  return (
    <div className="container text-center">
      <div className="row row-cols-2">
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
      </div>
    </div>
  )
}

export default App
