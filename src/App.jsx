import { Route, Routes } from 'react-router-dom';
import Footer from './Components/footer/index';
import Header from './Components/header/index';
import About from './Pages/About/index';
import Collection from './Pages/Collection/index';
import Home from './Pages/Home';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Collection" element={<Collection />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
