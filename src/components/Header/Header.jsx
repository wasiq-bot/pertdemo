import React from "react";
import "./Header.css";






function Header(){


  return (
  <div className="header-1">
    <div className="header-1-1">
      <div className="header-1-2">
          <h1 className="header-sentence">Crafting Digital Experiences, <br></br>One Website at a Time.</h1>
                      <div className="passage">
                        <p className="welcome-messege">Welcome to our web design hub, where creativity
                           meets functionality. We are dedicated to crafting unique
                            digital experiences that resonate with your audience. Our team
                             combines innovative design with the latest technology to create websites
                              that are not only visually stunning but also user-friendly and responsive.
                               Explore our portfolio, learn about our services, and let’s start building your
                                digital presence together. Thank you for choosing us as your web design partner.</p>
                          <p> As a
                             subscriber, you’ll get updates on website 
                             design trends and insights into our creative
                              process. Our newsletters aim to provide valuable
                               content that helps you navigate the digital landscape.
                                Stay tuned for exciting content.</p>
                      </div>
                      <div className="input-email" >
                        <input type="Email" placeholder="Subscribe your email"></input>
                        <button>Get Started</button>
                      </div>
                      <div className="users">
                        <img src="./public/users.png"></img>
                        <span>10+ people have visited the page in the last 24 hours</span>

                      </div>
                      <div className="social-media-dive">
                        <span><img src="./public/x.png"></img></span>
                        <span><img src="./public/insta.png"></img></span>
                        <span><img src="./public/youtube.png"></img></span>
                        <span><img src="./public/facebook.png"></img></span>
                      
                        </div>
      </div>
      <div>
          <img src="./public/profile.png" className="profile-picture"></img>
      </div>
    </div>
    
  </div>
  
  )

}



export default Header ;