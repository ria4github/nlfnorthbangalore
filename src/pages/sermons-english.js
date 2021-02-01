import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";

import Sermons from "../components/Sermons";

const SermonsEnglish = () => {
  return (
    <Layout toTop page="sermonsPage fixed_top">
      <SEO
        title="Seromons - English | NLFY"
        description="We are group of people from all walks of life who are being
    transformed by Jesus Christ passionate about sharing his love
    by caring for each other."
      />
      <Sermons
        title="Sermons - English"
        list="PLhtK0tdhEYix0GV0GU3D2pW646dP8B9cP"
      />
    </Layout>
  );
};

export default SermonsEnglish;
