import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Initial } from '../view/Initial'
import { Home } from '../view/Home'
import { Internals } from '../view/Internals/Internals'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Internals />}>
          <Route path="/home" element={<Home />}></Route>
        </Route>

        <Route path="/" element={<Initial />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
