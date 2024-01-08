import React, { useState } from "react";
import "./NavBar.css";
import { flushSync } from "react-dom";

function NavBar(){
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuBar =  
    <>
      <a>Home</a>
      <a>Blog</a>
      <a>Publications</a>
      <a>Downloads</a>
      <a>Contact</a>
   </>
   
   function menuBarClose(){
    setToggleMenu(false)
   }


  return (
  <div>
    <div  className="navigation-bar">
        <div><img src="./public/logo (2).png" className="logo-image-1"></img></div>
        <div className="menu-bar">{menuBar}</div>
    </div>

   <div className="navigation-bar-smartphone">
      <div>
      <div><img src="./public/logo (2).png" className="logo-image-2"></img></div>
      </div>
      <div>
          <img onClick={()=>{setToggleMenu(true)}} src="./public/menu.png" className="bar-image"></img>
          {toggleMenu &&(<div className="toggle-menu">
          <img src="./public/close.png" className="close-icon" onClick={()=>{setToggleMenu(false)}}></img>
          {menuBar}
          
        </div>)}
      </div>
      
   </div>
   
  </div>
  
  )

}



export default NavBar 