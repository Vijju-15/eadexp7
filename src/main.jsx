import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PasswordChecker from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswordChecker />
  </StrictMode>,
)
