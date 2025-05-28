import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home"
import Odditype from "./pages/Odditype"
import Hyperlink from "./pages/Hyperlink"
import Aaniaalto from "./pages/Aaniaalto"
import Contestations from "./pages/Contestations"
import Hypertext from "./pages/Hypertext"
import Kurrent from "./pages/Kurrent"
import Thehmm from "./pages/Thehmm"
import Menu from "./assets/Menu"
import Header from "./assets/Header"

function App() {
  let soon = false;

  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
  
      const listener = () => {
        setMatches(media.matches);
      };
  
      if (typeof media.addEventListener === "function") {
        media.addEventListener("change", listener);
      } else {
        media.addListener(listener);
      }
  
      return () => {
        if (typeof media.removeEventListener === "function") {
          media.removeEventListener("change", listener);
        } else {
          // media.removeListener(listenerList);
        }
      };
    }, [matches, query]);
  
    return matches;
  }
  
  const useIsSmall = () => useMediaQuery("(min-width: 1000px");

  const isNotSmall = useIsSmall();

  return (
    <HashRouter basename="/cftm/">

    <Menu small={!isNotSmall} />
    <Header small={!isNotSmall} />

    <div className="pages">
      <Routes>
        <Route index path="/" element={<Home small={!isNotSmall}/>} />
        <Route index path="odditype" element={<Odditype small={!isNotSmall}/>} />
        <Route index path="hyperlink" element={<Hyperlink small={!isNotSmall}/>} />
        <Route index path="aaniaalto" element={<Aaniaalto small={!isNotSmall}/>} />
        <Route index path="contestations" element={<Contestations small={!isNotSmall}/>} />
        <Route index path="hypertext" element={<Hypertext small={!isNotSmall}/>} />
        <Route index path="kurrent" element={<Kurrent small={!isNotSmall}/>} />
        <Route index path="thehmm" element={<Thehmm small={!isNotSmall}/>} />
      </Routes>
      </div>
    </HashRouter>
  );
}

export default App
