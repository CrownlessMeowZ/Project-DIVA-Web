import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { useDivaAccent } from './hooks/useDivaAccent';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import Characters from './pages/Characters';
import SkinAndSong from './pages/SkinAndSong';
import VersionAndGameplay from './pages/VersionAndGameplay';
import GameHistory from './pages/GameHistory';
import Producers from './pages/Producers';
import Concerts from './pages/Concerts';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <InnerApp />
      </BrowserRouter>
    </AppProvider>
  );
}

// Wrapper thêm padding-top cho inner pages, class transition
function PageWrapper({ children, isHome }) {
  return (
    <div
      className={`page-transition${isHome ? '' : ' inner-page'}`}
      style={isHome ? {} : { paddingTop: 'var(--topbar-h)' }}
    >
      {children}
    </div>
  );
}

function InnerApp() {
  const location = useLocation();
  useDivaAccent();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <>
      <Topbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageWrapper isHome><Home /></PageWrapper>
        } />
        <Route path="/characters" element={
          <PageWrapper><Characters /></PageWrapper>
        } />
        <Route path="/skin-and-song" element={
          <PageWrapper><SkinAndSong /></PageWrapper>
        } />
        <Route path="/version-gameplay" element={
          <PageWrapper><VersionAndGameplay /></PageWrapper>
        } />
        <Route path="/game-history" element={
          <PageWrapper><GameHistory /></PageWrapper>
        } />
        <Route path="/producers" element={
          <PageWrapper><Producers /></PageWrapper>
        } />
        <Route path="/concerts" element={
          <PageWrapper><Concerts /></PageWrapper>
        } />
      </Routes>
    </>
  );
}
