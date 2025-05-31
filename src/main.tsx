import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

// styles
import './index.css'

// App
import {App} from './App.tsx'

// i18n
import "./i18n.ts"

// font
import '@fontsource/inter/300.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
