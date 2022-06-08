import './App.css'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
