import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Initial } from '../view/Initial'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
