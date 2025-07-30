
import Home  from "./Home";
import Create from "./Create";
import { HashRouter, Routes, Route } from "react-router-dom";

function App(){
  return(
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App