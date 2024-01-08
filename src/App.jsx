import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Message from "./components/Message/Message";
import Brand from "./components/Brand/Brand";
import Header from "./components/Header/Header";
import data from "./components/data";
import ContactForm from "./components/ContactForm/ContactForm";






function App(){


  return (
  <div className="App">
    <div className="nav-bar-header">
      <div className="nav-bar-second">
        
      <NavBar/>
      <Header/>
      </div>
      <Message/>
      <div>
        <Brand/>
        <ContactForm/>
      </div>
   

   
  

    </div>
   



  </div>
  
  )

}



export default App 