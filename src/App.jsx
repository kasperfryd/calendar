
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Mainpage } from './pages/Mainpage'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<Mainpage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
