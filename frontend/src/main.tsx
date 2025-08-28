import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './pages/login'
import Chat from './pages/chat'
import Friends from './pages/friends'
import { AppProvider } from './utils/context'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/friends' element={<Friends/>} />
          <Route path='/chat' element={<Chat />}/>
        </Routes>
      </Router>
    </AppProvider>
  </StrictMode>
)
