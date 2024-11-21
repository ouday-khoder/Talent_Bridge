import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import SignupPage from './components/SignUp/SignupPage';
import Navbar from './components/Navbar/Navbar';
import Home from './components/HomePage/Home';
import { Container } from '@mui/material';
import OurMission from './components/HomePage/OurMission/OurMission';
import classes from '../src/components/HomePage/Home.module.css';

import homepageimage1 from './assets/Home-page1.png';
import homepage2 from './assets/home-page2.png';
import homepage3 from './assets/home-page3.png';
import Skills from './components/HomePage/Skills/Skills';
import HomeText from './components/HomePage/HomeText/HomeText';
import OurClient from './components/HomePage/OurClient/OurClient';
import Footer from './components/Footer/Footer';
import ClientSignUp from './components/ClientSignUp/ClientSignUp';
import ProfileForm from './components/SignUp/ProfileForm/ProfileForm';
import FreelancerSignUp from './components/FreelancerSignUp/FreelancerSignUp';
import EducationForm from './components/SignUp/ProfileForm/FreelancerForm/EducationStep/EducationForm';
import CertificationForm from './components/SignUp/ProfileForm/FreelancerForm/CertificationStep/CertificationForm';
import SignIn from './components/SignIn/SignIn';
import BrowseFreelancers from './components/AfterSignIn/ClientNewPage/BrowseFreelancers/BrowseFreelancers';
import PostProject from './components/AfterSignIn/ClientNewPage/PostProject/PostProject';
import MyProjects from './components/AfterSignIn/ClientNewPage/MyProjects/MyProjects';

function App() {
  const homeText1 = `Nusoft: Uniting <br> 
  <span class="${classes.span1}">Elite Tech Talent</span>  
  <span class="${classes.span2}"> <br> & Driving Project Success</span>`;

  const homeText2 = `<span class="${classes.span3}">Calling All Talented Freelancers!</span> <br>
        <span class="${classes.span4}">Join Nusoft and Secure Meaningful Projects with Guaranteed Payment!<span/>`;

  const homeText3 = `<span class="${classes.span5}">Discover Unparalleled Tech Talent for Your Projects</span> <br>
        <span class="${classes.span6}">Join Nusoft Today!<span/> <br>
          <span class="${classes.span7}">
            Are you seeking exceptional tech talent to elevate your projects to new heights? Look no further!
            Nusoft invites you to register and unlock access to our exclusive community of top-notch tech freelancers.
          <span/>
        `;

  const signupRef = useRef(null);

  const location = useLocation();

  const shouldShowNavbar = location.pathname === '/';

  return (
    <>  
      {shouldShowNavbar && <Navbar signupRef={signupRef}/>}

      <Routes>
        <Route path="/" element={
          <Container maxWidth="lg">
            <Home text={homeText1} imageSrc={homepageimage1} variant="search" />
            <SignupPage ref={signupRef} />
            <OurMission />
            <Home text={homeText2} imageSrc={homepage2} variant="apply" />
            <HomeText />
            <Skills />
            <Home text={homeText3} imageSrc={homepage3} variant="hire" />
            <OurClient /> 
          </Container>
        } />

        <Route path="/signup/client" element={<ClientSignUp />} />
        <Route path="/signup/freelancer" element={<FreelancerSignUp />} />
        <Route path="/client/profile/:clientId" element={<ProfileForm />} />
        <Route path="/freelancer/profile/:freelancerId" element={<ProfileForm />} />


        <Route path="/UserSignIn" element={<SignIn />} />

        {/* client sign in */}
        <Route path="/client/browse-freelancers" element={<BrowseFreelancers />} />
        <Route path="/client/post-project" element={<PostProject />} />
        <Route path="/client/posted-projects" element={<MyProjects />} />


        <Route path="/educationForm" element={<EducationForm />} />
        <Route path="/certificationForm" element={<CertificationForm />} />

      </Routes>
      <Footer />
    </>

  );
}

export default App;


