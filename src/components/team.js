import React from "react";

import filiImage from "./images/team/Fili.jpg";
import ericImage from "./images/team/EricWold.jpg";

const TeamSection = () => {
  return (
    <div className="">
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
    </div>
  );
};

export default TeamSection;
