import "./App.css";
import Footer from "./Footer";
import Navs from "./Navs";
import Home from "./Home";

import { BrowserRouter , Routes  , Route  } from 'react-router-dom';
import Viwez from "./Viwez";

function App() {
  
  return (
    <BrowserRouter>
      <Navs />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Viwez" element={<Viwez />}/>

          <Route path="/Viwez/:id" element={<Viwez />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
