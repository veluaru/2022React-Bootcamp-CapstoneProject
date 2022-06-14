import './App.css'
import React from 'react'
import Home from './pages/Home.jsx'
import ProductList from './pages/ProductList.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [viewEngine, setViewEngine] = React.useState({ engine: '' })

  const switchEngine = (engine) => {
    setViewEngine(engine)
  }

  const renderMap = {
    Home: <Home setView={switchEngine} />,
    ProductList: <ProductList setView={switchEngine} />,
  }

  React.useEffect(() => {
    setViewEngine('ProductList')
  }, [])

  return (
    <div className="app">
      <Header setView={switchEngine} />
      <div className="app-content">{renderMap[viewEngine]}</div>
      <Footer />
    </div>
  )
}

export default App
