import React from 'react';
import Header from './components/Header';
import Mission from './components/Mission';
// import Projects from './components/Projects';
//import GetInvolved from './components/GetInvolved';
// import './styles/App.css';
import HeadUp from './components/HeadUp';
import ImageContent from './components/ImageContent';
import ContactForm from './components/donation';
import TeamPage from './components/TeamMember';
import Footer from './components/Footer_val';

const App = () => {
  return (
    <div className="App">
       <HeadUp/>
      <Header />
        <ImageContent/>
        <Mission />
        <TeamPage/>
        <ContactForm/>
        <Footer/>
    </div>
  );
};

export default App;
