import ReactDOMClient from "react-dom/client"
import App from "./App"

import './stylesheets/index.css'
import './stylesheets/Sidebar.css'
import './stylesheets/SectionOne.css'
import './stylesheets/SectionTwo.css'
import './stylesheets/SectionThree.css'

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(<App />)
