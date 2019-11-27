import React, { Component } from "react";
import Navigation from "./navigatorbar";
import AethosMap from "./map";

import whiteImage from "./images/backgrounds/executive-bg.jpg";
import missionImage from "./images/backgrounds/LIGHT-BG-1.jpg";
import slateImage from "./images/backgrounds/IMG_7195-copy-1.jpg";
import bottegaBg from "./images/backgrounds/bottega-bg-1.jpg";
import bussinesBg from "./images/backgrounds/bfi-bg.jpg";

import slateWhiteLogo from "./images/logos/Slate-Logo-2.png";
import slateLogo from "./images/logos/Artboard-5.png";
import bottegaLogo from "./images/logos/Artboard-1.png";
import bottegaWhiteLogo from "./images/logos/Bottega-logo-pack.png";
import huduLogo from "./images/logos/Hudu-logo-3.png";
import huduGreyLogo from "./images/logos/Hudu-logo-grey.png";
import featherImage from "./images/logos/Hudu-feather.png";
import dashLogo from "./images/logos/Artboard-4.png";
import villageLogo from "./images/logos/village-logo.png";
import bfLogo from "./images/logos/bussines-logo.png";
import bfWhiteLogo from "./images/logos/bfi-logo-1.png";
import ringSevenLogo from "./images/logos/ring-seven-logo.png";
// import bpuLogo from "./images/logos/BPU-Logo.png";

import filiImage from "./images/team/Fili.jpg";
import ericImage from "./images/team/EricWold.jpg";

import { FaMapMarkerAlt } from "react-icons/fa";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="Header-wrapper">
          <div className="header-text">
            <div className="title">
              <h1>
                Top Tier Ventures,
                <br />
                Leaders & Software
              </h1>
            </div>

            <div className="subtitle">
              <h6>
                Our companies are disrupting industries by connecting innovative
                minds to cutting edge software. Our portfolio has been formed to
                provide both continuity between projects as well as giving us a
                foothold in several emerging industries.
              </h6>
            </div>
            <div className="header-link">
              <a href="#team">EXECUTIVE TEAM</a>
            </div>
          </div>
          <img src={whiteImage} />
        </div>

        <div id="portfolio" className="grid-links-wrapper">
          <div className="grid-row">
            <div className="two-blocks">
              <div className="block-1">
                <div className="slate">
                  <div className="logo-link">
                    <a href="#slate">
                      <img src={slateLogo} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="block-2">
                <div className="bottega">
                  <div className="logo-link">
                    <a href="#bottega">
                      <img src={bottegaLogo} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="two-blocks">
              <div className="block-1">
                <div className="hudu">
                  <div className="logo-link">
                    <a href="#hudu">
                      <img src={huduLogo} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="block-2">
                <div className="dash">
                  <div className="logo-link">
                    <a href="http://dashb.io">
                      <img src={dashLogo} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-row">
            <div className="two-blocks">
              <div className="block-2">
                <div className="village">
                  <div className="logo-link">
                    <a href="http://joinvillage.io">
                      <img src={villageLogo} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="block-1">
                <div className="BF">
                  <div className="logo-link">
                    <a href="#BF">
                      <img src={bfLogo} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="two-blocks">
              <div className="block-2">
                <div className="Ring-Seven">
                  <div className="logo-link">
                    <a href="https://ringseven.com/">
                      <img src={ringSevenLogo} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="block-1 ">
                <div className="BPU">
                  <div className="logo-link">
                    <a href="#">
                      <img src={bpuLogo} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mission-wrapper">
          <div className="mission-text-content">
            <div className="title">
              <h1>
                Our mission,
                <br />
                simply put.
              </h1>
            </div>

            <div className="subtitle">
              <h6>
                Software has proven to be one of the most disruptive economic
                forces in human history. Our goal is to leverage our command of
                software development to create products and companies that will
                shape the future.
              </h6>
            </div>
            <div className="contact-link">
              <a href="#contact">CONTACT US</a>
            </div>
          </div>
          <img src={missionImage} />
        </div>

        <div id="team" className="executive-team-wrapper">
          <div className="team-text-header">
            <div className="title">
              <h1>Executive team</h1>
            </div>
            <div className="subtitle">
              <p>
                The Aethos executive team is filled with some of the most
                incredible industry talent. They are a tightly knit team capable
                of executing even the most ambitious goals. They bring with them
                decades of experience and knowledge.
              </p>
            </div>
          </div>

          <div className="team-images-wrapper">
            <div className="grid-row">
              <div className="block-1">
                <div className="image-picture">
                  <div className="team-detail">
                    <h4>Fili Ledezma</h4>
                    <p>M</p>
                  </div>
                  <img src={filiImage} />
                </div>
                <div className="image-picture">
                  <div className="team-detail">
                    <h4>Eric wold</h4>
                    <p>Cheif Executive Office</p>
                  </div>
                  <img src={ericImage} />
                </div>
                <div className="image-picture">
                  <div className="team-detail">
                    <h4>Fili Ledezma</h4>
                    <p>M</p>
                  </div>
                  <img src={filiImage} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="links-wrapper">
          <div id="slate" className="slate-block">
            <div className="slate-column">
              <div className="slate-text">
                <div className="logo">
                  <img
                    style={{ width: "150px", height: "100%" }}
                    src={slateWhiteLogo}
                  />
                </div>
                <div className="subtitle">
                  <h6>
                    Where game-changing software is built. We have brought
                    together some of the highest recruited talent into an adept
                    team that gets things done. Whether for clients or our own
                    ideas, Slate is building the future.
                  </h6>
                </div>
              </div>

              <div className="slate-link-website">
                <a>Visit Website</a>
              </div>
            </div>
            <img src={slateImage} />
          </div>

          <div id="bottega" className="bottega-block">
            <div className="bottega-column">
              <div className="bottega-text">
                <div className="logo">
                  <img
                    style={{ width: "250px", height: "100%" }}
                    src={bottegaWhiteLogo}
                  />
                </div>
                <div className="subtitle">
                  <h6>
                    We have recently launched a coding bootcamp built around
                    ensuring high quality employable graduates. The response has
                    given extremely positive market feedback and has translated
                    into incredible growth.
                  </h6>
                </div>
                <div className="link-website">
                  <a>Visit Website</a>
                </div>
              </div>
            </div>
            <img src={bottegaBg} />
          </div>

          <div id="hudu" className="hudu-academy-block">
            <div className="hudu-academy-column">
              <div className="hudu-text">
                <div className="logo">
                  <h1>
                    <img
                      style={{ width: "250px", height: "100%" }}
                      src={huduGreyLogo}
                    />
                  </h1>
                </div>
                <div className="subtitle">
                  <h6>
                    A new dawn is breaking in education and Hudu Academy is at
                    the forefront of it. Making quality education accessible,
                    affordable, and easy to manage.
                  </h6>
                </div>

                <div className="link-website">
                  <a>Visit Website</a>
                </div>
              </div>

              <div className="hudu-feather-image">
                <img
                  src={featherImage}
                  style={{ height: "20%", width: "100%" }}
                />
              </div>
            </div>
          </div>

          <div id="BF" className="bf-block">
            <div className="bf-column">
              <div className="bf-text">
                <div className="logo">
                  <img
                    style={{ width: "250px", height: "100%" }}
                    src={bfWhiteLogo}
                  />
                </div>

                <div className="subtitle">
                  <p>
                    Business Format is our government contract arm of
                    development. Having already obtained the necessary awards to
                    pursue these lucrative contracts we are primed and ready to
                    start winning them.
                  </p>
                </div>
                <div className="link-website">
                  <div className="link">
                    <a href="url(http://www.businessformatinc.com)">
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img src={bussinesBg} />
          </div>
        </div>

        <div className="form-box-wrapper">
          <div className="form-box">
            <div id="contact" className="form-content-wrapper">
              <div className="text-wrapper">
                <div className="header">
                  <h1>Let's Chat</h1>
                </div>

                <div className="divider" style={{ height: "20px" }}></div>

                <div className="subtitle">
                  <h6>Fill out the form below and we'll be in touch.</h6>
                </div>
              </div>

              <div className="divider" style={{ height: "20px" }}></div>

              <div className="form-wrapper">
                {/* <form action="{{url_for('contact')}}" method="POST"> */}
                {/* please add aditional information in python documents from twilio (if that the case) to made it work */}
                <form>
                  <div className="row-input-wrapper">
                    <div className="input">
                      <input type="text" placeholder="Name" />
                    </div>

                    <div className="input">
                      <input type="text" placeholder="Email" />
                    </div>

                    <div className="input">
                      <input type="text" placeholder="Phone #" />
                    </div>
                  </div>
                </form>
                <div className="submit-btn">
                  <div className="link-btn">
                    <a>Send Message</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ubication-wrapper">
          <div className="address-wrapper">
            <div className="lehi-office-and-icon">
              <div className="icon">
                <FaMapMarkerAlt style={{ width: "50px", height: "50px" }} />
              </div>
              <div className="address">
                <p>
                  Lehi OFFICE
                  <br />
                  2912 Executive Pkwy #220,
                  <br />
                  Lehi, UT 84043
                </p>
              </div>
            </div>
          </div>

          <div className="map-container">
            <AethosMap />
          </div>
        </div>
        <Navigation />

        <footer>
          <p>&copy;2019 Aethos.</p>
        </footer>
      </div>
    );
  }
}
