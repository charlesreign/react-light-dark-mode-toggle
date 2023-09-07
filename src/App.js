import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import useLocalStorage from "use-local-storage";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light")
  const [switchBtn, setSwitchBtn] = useState(false)

  useEffect(() => {
    if (theme === 'dark') {
      setSwitchBtn(true)
    }
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    setSwitchBtn(!switchBtn)
  }

  return (
    <div className='main'>
      <Header mytheme={theme} onToggleTheme={toggleTheme} onSwitch={switchBtn}/>
      <Hero mytheme={theme}/>
      <Footer mytheme={theme}/>
    </div>
  )
}

export default App
