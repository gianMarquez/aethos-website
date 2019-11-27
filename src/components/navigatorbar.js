import React from "react";
// @ts-ignore
import logoImage from "./images/logos/Aethos-logo.png";
import MobileNavigation from "./navBars";

const Navigation = () => {
  return (
    <div className="navigation-wrapper">
      <div className="navigation-bar">
        <div className="left-side">
          <div className="logo-image">
            <a id="logo" href="url(http://www.aethos.com)">
              <img src={logoImage} />
            </a>
          </div>
        </div>

        <div className="divider" style={{ width: "20px" }}></div>

        <div className="right-side">
          <div className="NavBurguer">
            <MobileNavigation />
          </div>

          <div className="link-routes">
            <div className="link">
              <a href="#portfolio">Portfolio</a>
            </div>

            <div className="link">
              <a href="#team">Team</a>
            </div>

            <div className="link">
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
