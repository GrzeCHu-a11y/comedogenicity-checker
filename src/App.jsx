
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import { IngredientsProvider } from './context/IngredientsContext'

function App() {

  return (
    <>
      <Navbar />
      <IngredientsProvider>
        <Home />
      </IngredientsProvider>
    </>
  )
}

export default App
