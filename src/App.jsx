import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faTwitter,faPinterest } from "@fortawesome/free-brands-svg-icons";
import logo from "./assets/images/logo.svg"
import logoFooter from "./assets/images/logo-footer.svg"
import headerDesk from "./assets/images/desktop/image-header.jpg"
import headerMobile from "./assets/images/mobile/image-header.jpg"
import arrowDown from "./assets/images/icon-arrow-down.svg"
import eggImg from "./assets/images/desktop/image-transform.jpg"
import eggMobile from "./assets/images/mobile/image-transform.jpg"
import cupImg from "./assets/images/desktop/image-stand-out.jpg"
import cupMobile from "./assets/images/mobile/image-stand-out.jpg"
import emilyImg from "./assets/images/image-emily.jpg"
import thomasImg from "./assets/images/image-thomas.jpg"
import jennieImg from "./assets/images/image-jennie.jpg"
import milkImg from "./assets/images/desktop/image-gallery-milkbottles.jpg"
import milkMobile from "./assets/images/mobile/image-gallery-milkbottles.jpg"
import orangeImg from "./assets/images/desktop/image-gallery-orange.jpg"
import orangeMobile from "./assets/images/mobile/image-gallery-orange.jpg"
import coneImg from "./assets/images/desktop/image-gallery-cone.jpg"
import coneMobile from "./assets/images/mobile/image-gallery-cone.jpg"
import sugarImg from "./assets/images/desktop/image-gallery-sugarcubes.jpg"
import sugarMobile from "./assets/images/mobile/image-gallery-sugar-cubes.jpg"
import facebookIcon from "./assets/images/icon-facebook.svg"
import instagramIcon from "./assets/images/icon-instagram.svg"
import twitterIcon from "./assets/images/icon-twitter.svg"
import pinterestIcon from "./assets/images/icon-pinterest.svg"



function App() {

  return (
    <div className='container'>
      <div className="header">
        <nav className="nav-section">
          <div className="logo-div">
            <img src={logo} className="logo"/>
          </div>
          <div className="navigation">
            <input type="checkbox" className="toggle-menu"/>
            <div className="hamburger"></div>
            <ul className="menu">
            <div className="triangle-menu"></div>
              <li className="menu-item"><a href="">About</a></li>
              <li className="menu-item"><a href="">Services</a></li>
              <li className="menu-item"><a href="">Projects</a></li>
              <li className="menu-item"><button className="contact-btn">CONTACT</button></li>
            </ul>
          </div>
        </nav>
        <div className="header-info">
          <h1 className="header-text">WE ARE CREATIVES</h1>
          <img className="header-arrow" src={arrowDown}/>
        </div>
        <img className="header-img" src={headerDesk}/>
        <img className="header-img-mobile" src={headerMobile}/>
      </div>
      <div className="content-1">
        <img className="content-1-img" src={eggImg}/>
        <img className="content-1-img-mobile" src={eggMobile}/>
      </div>
      <div className="content-2">
        <h2 className="content-2-title">Transform your brand</h2>
        <p className="content-2-text">We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
        <button className="content-2-btn">LEARN MORE</button>
      </div>
      <div className="content-3">
        <img className="content-3-img" src={cupImg} />
        <img className="content-3-img-mobile" src={cupMobile} />
      </div>
      <div className="content-4">
      <h2 className="content-4-title">Stand out to the right audience</h2>
        <p className="content-4-text">Using a collaborative formula of designers, reserchers,photographers,videographers,and copywriters,we'll build and extend your brand in digital places.</p>
        <button className="content-4-btn">LEARN MORE</button>
      </div>
      <div className="content-5">
        <div className="content-5-info">
          <h2 className="content-5-title">Graphic Design</h2>
          <p className="content-5-text">Great design makes you memorable.We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
        </div>
      </div>
      <div className="content-6">
        <div className="content-6-info">
          <h2 className="content-6-title">Photography</h2>
          <p className="content-6-text">Increase your credibility by getting the most stunning,high-quality photos that improve your business image.</p>
        </div>
      </div>
      <div className="content-7">
        <h2 className="content-7-title">CLIENT TESTIMONIALS</h2>
        <div className="client-container">
          <div className="single-client">
            <img className="client-img" src={emilyImg} />
            <p className="client-coment">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            <h3 className="client-name">Emily R.</h3>
            <p className="client-description">Marketing Director</p>
          </div>
          <div className="single-client">
            <img className="client-img" src={thomasImg} />
            <p className="client-coment">Sunnyside's enthunsiasm coupled with their keen interest in out brand's sucess made it a satisfying and enjoyable experience.</p>
            <h3 className="client-name">Thomas S.</h3>
            <p className="client-description">Chief Operating Officer</p>
          </div>
          <div className="single-client">
            <img className="client-img" src={jennieImg} />
            <p className="client-coment">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
            <h3 className="client-name">Jennie F.</h3>
            <p className="client-description">Business Owner</p>
          </div>
        </div>
      </div>
      <div className="content-8">
        <img className="content-8-img" src={milkImg} />
        <img className="content-8-img" src={orangeImg} />
        <img className="content-8-img" src={coneImg} />
        <img className="content-8-img" src={sugarImg} />
        <div className="content-8-row-1">
          <img className="content-8-mobile" src={milkMobile} />
          <img className="content-8-mobile" src={orangeMobile} />
        </div>
        <div className="content-8-row-2">
          <img className="content-8-mobile" src={coneMobile} />
          <img className="content-8-mobile" src={sugarMobile} />
        </div>
      </div>
      <footer className="footer">
        <img src={logoFooter} className="footer-logo" />
        <div className="footer-menu">
          <h2 className="footer-menu-item"><a href="#">About</a></h2>
          <h2 className="footer-menu-item"><a href="#">Services</a></h2>
          <h2 className="footer-menu-item"><a href="#">Projects</a></h2>
        </div>
        <div className="footer-socials">
          <a href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook} className="social-icon"/></a>
          <a href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} className="social-icon"/></a>
          <a href="https://www.twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter} className="social-icon"/></a>
          <a href="https://www.pinterest.com" target="_blank"><FontAwesomeIcon icon={faPinterest} className="social-icon"/></a>
        </div>
      </footer>
    </div>
  )
}

export default App
