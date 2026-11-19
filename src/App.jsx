import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* Routes 밖에 두어 모든 화면 맨 아래에 나오게 한다. */}
      <Footer />
    </HashRouter>
  )
}

export default App
