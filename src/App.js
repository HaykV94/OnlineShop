import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Kids from "./Components/Kids";
import Men from "./Components/Men";
// import Women from "./Components/Women";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import JacketsM from "./Components/Men/JacketsM";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";



function App() {
  return (
    <BrowserRouter>
          <Menu />   
        {/* <Cart/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Men" element={<Men />} />
            <Route path="Men/JacketsM" element={<JacketsM />} />
            {/* <Route path="Men" element={<Men/>}/>
          <Route path="Women" element={<Women/>}/> */}
          </Routes>
    </BrowserRouter>
  );
}

export default App;
