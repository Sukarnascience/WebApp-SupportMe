import React from 'react';
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
  return (
    <div>
      <div className="bodyOfPG">
        <div className="ProfilePic">
          <img src={profilepic} aria-hidden alt="Profile Picture"/>
        </div>
        <div className="message">
          <h1>Hello,</h1>
          <p>
            My self Sukarna Jana, and i hold some skills like: <b>Programming</b>,
            <b>Photography</b>,Always try to make a product which can help me in day to day work
          </p>
        </div>
        <div className="SupportMe">
          <a href="https://www.buymeacoffee.com/sukarnajana">
            <img src={buymeacoffee} alt="Support Me"/>
          </a>
        </div>
      </div>
      <div className="ContactMe">
        <CgMenuGridO className="contactlogo" size="30px" color="#ffffff"/>
        <ul className="differentPlatform">
          <li><img src={instagramlogo} aria-hidden alt="instagram"/>
            <ul className="differentIG">
              <li><a href="https://www.instagram.com/sukarnajana/">Lifestyle</a></li>
              <li><a href="https://www.instagram.com/glance_of_nature/">Photography</a></li>
              <li><a href="https://www.instagram.com/sukarnascience/">Programming</a></li>
            </ul>
          </li>
          <li><a href="https://github.com/Sukarnascience"><img src={githublogo} alt="github"/></a></li>
          <li><a href="https://www.facebook.com/sukarna.jana.9"><img src={facebooklogo} alt="facebook"/></a></li>
          <li><a href="https://www.snapchat.com/add/sukarna_j2020"><img src={snapchatlogo} alt="snapchat"/></a></li>
          <li><a href="https://t.me/SukarnaJana"><img src={telegramlogo} alt="telegram"/></a></li>
          <li><a href="https://twitter.com/JanaSukarna"><img src={twitterlogo} alt="twitter"/></a></li>
          <li><a href="https://www.youtube.com/channel/UCKkr1oGBN5RbZ2LSdg-VOaQ"><img src={youtubelogo} alt="youtube"/></a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
