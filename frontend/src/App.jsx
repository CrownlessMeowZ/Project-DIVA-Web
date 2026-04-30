import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import Characters from './pages/Characters';
import SkinAndSong from './pages/SkinAndSong';
import VersionAndGameplay from './pages/VersionAndGameplay';
import GameHistory from './pages/GameHistory';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <InnerApp />
      </BrowserRouter>
    </AppProvider>
  );
}

function InnerApp() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/"                  element={<Home />} />
        <Route path="/characters"        element={<Characters />} />
        <Route path="/skin-and-song"     element={<SkinAndSong />} />
        <Route path="/version-gameplay"  element={<VersionAndGameplay />} />
        <Route path="/game-history"      element={<GameHistory />} />
      </Routes>
    </>
  );
}
