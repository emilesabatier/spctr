import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './fonts.css'
import './index.css'
import { Router } from './routes/router.provider'


const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    localStorage.theme = 'dark'
    const root = createRoot(rootElement)
    root.render(
        <StrictMode>
            <Router />
        </StrictMode>,
    )
}
