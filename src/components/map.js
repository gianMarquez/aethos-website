import React, { Component } from "react";

import GoogleMapReact from "google-map-react";

const AddressMap = ({ aethos }) => <div>{aethos}</div>;

class AethosMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.31,
      lng: -111.67
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key:
              "AIzaSyBPD7a2FYQYcgZRfnCvBhm4kK_0r0a70ZY" /* Test Key,enter billing key */
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AddressMap lat={40.3118562} lng={-111.6703155} aethos="Aethos" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default AethosMap;
