import { useState } from 'react'
import styles from './styles/styles'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={` ${styles.flexCenter}`}>
        <div className='w-full px-6'>
          <Navbar />
        </div>
      </div>
      <Homepage />
      <Services />
      <Footer />
    </div>
  )
}

export default App
