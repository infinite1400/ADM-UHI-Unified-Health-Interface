import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
// import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Patientlogin from './components/Patient/patientlogin'
import Patientsignup from './components/Patient/patientsignup'
import Landing from './components/Landing'
import Patient from './components/Patient/centralpagePatient'
import PatientMain from './components/Patient/patientmainpagre'
import Doctor from './components/Docter/doctorcentralpage'
import DoctorMain from './components/Docter/DoctorMain'
import FindDoctor from './components/Patient/findDoctor'
import DoctorSignup from './components/Docter/doctorRegister'
import Doctorlogin from './components/Docter/doctorlogin'
import Patientprofile from './components/Patient/Patientprofile'
import PatientEdit from './components/Patient/patientEdit'
import DoctorEdit from './components/Docter/doctorEdit'
import DoctorProfile from './components/Docter/doctorprofile'
// import Finddoctorprofile from './components/Patient/profile'
import Appointment from './components/Patient/appointment'
import Appointmenthistory from './components/Docter/appointmenthistory'
import Checklocationpage from './components/Patient/checklocationpage'
import { checkTargetForNewValues } from 'framer-motion'
const App = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/checklocationpage" element={<Checklocationpage />}/>
        <Route exact path="/Doctor" element={<Doctor />} />
        <Route exact path="/DoctorMain" element={<DoctorMain />} />
        <Route exact path="/DoctorMain/history" element={<Appointmenthistory />} />
        <Route exact path="/DoctorMain/profile" element={<DoctorProfile />} />
        <Route exact path="/Doctor/Signup" element={<DoctorSignup />} />
        <Route exact path="/Doctor/Login" element={<Doctorlogin />} />
        <Route exact path='/PatientMain/findDoctor' element={<FindDoctor/>}/>
        {/* <Route exact path='/PatientMain/findDoctor/appointment' element={<Appointment/>}/> */}
        <Route exact path='/Patient' element={<Patient/>}/>
        <Route exact path='/PatientMain' element={<PatientMain/>}/>
        <Route exact path='/edit' element={<PatientEdit/>}/>
        <Route exact path='/editdoc' element={<DoctorEdit/>}/>
        <Route exact path='/PatientMain/profile' element={<Patientprofile/>}/>
        <Route exact path="/Patient/signup" element={<Patientsignup />} />
        <Route exact path="/patient/login" element={<Patientlogin />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route 
          path="/PatientMain/finddoctor/:id"
          element={<Appointment/>}
        />
      </Routes>
    </>
  )
}

export default App

