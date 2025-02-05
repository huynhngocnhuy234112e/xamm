import type { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PageTwo from './pages/PageTwo'

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page-two" element={<PageTwo />} />
      </Routes>
    </Router>
  )
}