import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Initial } from '../view/Initial'
import { Home } from '../view/Home'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
