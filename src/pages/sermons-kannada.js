import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";

import Sermons from "../components/Sermons";

const SermonsKannada = () => {
  return (
    <Layout toTop page="sermonsPage fixed_top">
      <SEO
        title="Seromons - Kannada | NLFY"
        description="We are group of people from all walks of life who are being
    transformed by Jesus Christ passionate about sharing his love
    by caring for each other."
      />
      <Sermons
        title="Sermons - Kannada"
        list="PLhtK0tdhEYixhnt0-BF5xQTXzoGfxDY_Z"
      />
    </Layout>
  );
};

export default SermonsKannada;
