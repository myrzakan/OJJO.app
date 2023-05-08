
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/header/index'
import Footer from './Components/footer/index'
import About from './Pages/About/index'
import Collection from './Pages/Collection/index'




const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Collection" element={<Collection/>}/>
      </Routes>
      <Footer />
    </div>
  
  )
}

export default App;
