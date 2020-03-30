import React, { useState } from "react";
import Layout from "../components/Layout";
import Player from "../components/Player";

const Sermons = () => {
  const [playIndex, setPlayIndex] = useState(-1);
  const trackList = [
    "/ramesh-pandranki/sets/kanneerelamma",
    "/mfmklg3kkul8/sets/jesus-song-srusti-kartha",
    "/rajprakashpaul/ninnu-choodani-version-2?in=krupaprakash-226/sets/raj-prakash-paul",
    "/joel-kodali/rojantha-harish-raghavendra?in=joel-kodali/sets/rojantha-24hrs-his-feet",
    "/ashers-songsbin-05/mahima-gala-raja"
  ];
  console.log(playIndex);

  return (
    <Layout>
      <div id="Sermons">
        <div className="container">
          <div className="sermonList">
            {trackList.map((src, i) => (
              <Player
                status={playIndex < 0 ? false : playIndex}
                onClick={val => setPlayIndex(val)}
                key={i}
                idx={i}
                url={src}
                refid={i}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sermons;
