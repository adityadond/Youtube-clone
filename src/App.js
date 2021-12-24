import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Headers/Header';
import Sidebar from './components/Sidebar/Sidebar';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import './_app.scss'
function App() {

  const [sidebar,toggleSidebar]=useState(false)

  // const handletoggleSidebar=()=>{
  //   toggleSidebar(value=>!value)

  // }
  const handleToggleSidebar = () => toggleSidebar(value =>! value)
  return (
    // <>
    //   <Header handleToggleSidebar={handleToggleSidebar}/>
      
    //   <div className="app__container border border-info">
    //   <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
    //     <Container fluid className='app__main border border-warning'>
    //       <HomeScreen/>
    //     </Container>
    //   </div>
    // </>
    <LoginScreen/>
  );
}

export default App;
