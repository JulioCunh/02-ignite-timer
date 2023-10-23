import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { History } from './History'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/History" element={<History />} />
    </Routes>
  )
}
