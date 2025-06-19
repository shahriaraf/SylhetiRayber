import { Routes, Route, Link } from 'react-router-dom';

import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div>
     <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
