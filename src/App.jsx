import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import BackgroundSlideshow from './components/BackgroundSlideshow'
import Home from './pages/Home'
import Matches from './pages/Matches'
import Teams from './pages/Teams'
import TeamDetail from './pages/TeamDetail'
import Facts from './pages/Facts'
import Goals from './pages/Goals'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <BackgroundSlideshow />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:teamId" element={<TeamDetail />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
