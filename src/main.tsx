import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

// styles
import './index.css'

// App
import {App} from './App.tsx'

// i18n
import "./i18n.ts"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
