import React from 'react'

import SideBar from './components/SideBar'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'

const App = () => {
    return (
        <main>
            <SideBar />
            <div className='main-wrapper'>

            <SectionOne />
            <SectionTwo />
            <SectionThree />
            </div>
        </main>
    )
}

export default App