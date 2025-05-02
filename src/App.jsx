import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import ReminderSection from './Components/ReminderSection'
import AchievementSection from './Components/AchievementSection'
import FaqSection from './Components/FaqSection'
import SubscribeSection from './Components/SubscribeSection'
import AboutSection from './Components/AboutSection'
import CopyrightSection from './Components/CopyrightSection'

function App() {
  return (<div id='main-wrapper'>
    <div className='main-container'>
      <Navbar />
      <HeroSection />
      <ReminderSection/>
      <AchievementSection/>
      <FaqSection/>
      <SubscribeSection/>
      <AboutSection/>
      <CopyrightSection/>
    </div>
  </div>)
}

export default App