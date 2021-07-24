import React, { useState,useEffect } from 'react';
import './App.css';

import buymeacoffee from './bmc-button.svg';
import profilepic from "./ProfilePic.jpg";
import youtubelogo from "./youtube.svg";
import twitterlogo from "./twitter.svg";
import telegramlogo from "./telegram.svg";
import snapchatlogo from "./snapchat.svg";
import instagramlogo from "./instagram.svg";
import githublogo from "./github.svg";
import facebooklogo from "./facebook.svg";

import {CgMenuGridO} from 'react-icons/cg';

function App() {

  const [contactMeAllowed,setcontactMeAllowed] = useState(false);
  const [showinsta,setshowinsta] = useState(false);
  const [visited,setvisited] = useState(false);
  const camehere = 'yes';

  const openContact = () =>{
    setcontactMeAllowed(!contactMeAllowed) 
    setshowinsta(false)
  }

  const visitedHere = () =>{
    localStorage.setItem('visited',JSON.stringify(camehere))
  } 

  useEffect(()=>{
    const Didvisited = JSON.parse(localStorage.getItem('visited'))
    if(Didvisited==='yes'){
      setvisited(true)
    }
  },[])

  return (
    <div>
      <div className="bodyOfPG">
        <div className="ProfilePic">
          <img src={profilepic} aria-hidden alt="Profile Picture"/>
        </div>
        <div className="message" onMouseEnter={visitedHere} onTouchMove={visitedHere}>
          <h1>Hello,</h1>
          { visited ?
            <h2>Woow it's really great to see you here once again in this page</h2>:
            <h2>It's really great to see you here on this page :)</h2>
          }
          <p>
            Your small support will helps me a lot or in another way which 
            will put some value on my skills / hard work<br/>
            and which motivates me for doing or exploring new things 
            and your every contribution help me to invest in my skills 
            and enhance my productivity
          </p>
          <br/>
          <p>
            You can show your support by clicking on <i>"Buy me a coffee"</i> button
          </p>
          <br/>
          { !visited &&
            <p>
              <b>Do You Know:</b> I have discovered some talents inside me like 
              Programming,  Photographing, and still discovering new hidden talents <br/>
              and if you want to see my other talents click on the circular button on the 
              bottom right corner of this page
            </p>
          }
        </div>
        <div className="SupportMe">
          <a href="https://www.buymeacoffee.com/sukarnajana">
            <img src={buymeacoffee} alt="Support Me"/>
          </a>
        </div>
      </div>
      <div className="ContactMe">
        <button className="contactlogo" onClick={openContact}><CgMenuGridO size="30px" color="#ffffff"/></button>
        { contactMeAllowed && 
          <ul className="differentPlatform">
            <li><button className="insta" onClick={()=>{setshowinsta(!showinsta)}}><img src={instagramlogo} aria-hidden alt="instagram"/></button>
              { showinsta &&
                  <ul className="differentIG">
                    <li><a href="https://www.instagram.com/sukarnajana/">Lifestyle</a></li>
                    <li><a href="https://www.instagram.com/glance_of_nature/">Photography</a></li>
                    <li><a href="https://www.instagram.com/sukarnascience/">Programming</a></li>
                  </ul>
              }
            </li>
            <li><a href="https://github.com/Sukarnascience"><img src={githublogo} alt="github"/></a></li>
            <li><a href="https://www.facebook.com/sukarna.jana.9"><img src={facebooklogo} alt="facebook"/></a></li>
            <li><a href="https://www.snapchat.com/add/sukarna_j2020"><img src={snapchatlogo} alt="snapchat"/></a></li>
            <li><a href="https://t.me/SukarnaJana"><img src={telegramlogo} alt="telegram"/></a></li>
            <li><a href="https://twitter.com/JanaSukarna"><img src={twitterlogo} alt="twitter"/></a></li>
            <li><a href="https://www.youtube.com/channel/UCKkr1oGBN5RbZ2LSdg-VOaQ"><img src={youtubelogo} alt="youtube"/></a></li>
          </ul>
        }
      </div>
    </div>
  );
}

export default App;
