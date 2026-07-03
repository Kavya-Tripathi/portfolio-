import React from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import { Routes,Route} from 'react-router-dom'
import Details from './Pages/Details'
import Education from './Pages/Education'
import Certification from './Pages/Certification'

import Project from './Pages/Project'


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path = '/' element={<Details />} />
        <Route path = '/education' element={<Education />} />
        <Route path = '/certification' element={<Certification />} />
        <Route path = '/project' element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App