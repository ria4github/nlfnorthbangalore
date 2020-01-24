import React from "react";
import Layout from "../components/Layout";
import { GMap } from "../components/GMap";
const connect = () => {
  return (
    <Layout>
      <div id="connect">
        <div className="container">
          <h1>Connect</h1>
          <div id="maps">
            <GMap
            // googleMapURL="https://maps.googleapis.com/maps/api/js?key=-MDUXvXM&v=3.exp&libraries=geometry,drawing,places"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default connect;
