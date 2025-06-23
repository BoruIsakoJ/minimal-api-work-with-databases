import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pizza from './Pizza'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pizza/>
  </StrictMode>,
)
