import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import Header from './components/Header'
import VideoCall from './components/VideoCall'
import Chat from './components/Chat'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar';
import './App.css';


const App = () => {
 
  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
      <Header />
        <Sidebar />
        
      <VideoCall />
      <Chat />
      <Footer />
  </div>
  </ThemeProvider>

  );
};

export default App;