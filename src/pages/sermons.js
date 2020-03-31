import React, { useState } from "react";
import Layout from "../components/Layout";
import Player from "../components/Player";
import { IoIosPlay } from "react-icons/io";

const Sermons = () => {
  const [playData, setPlayData] = useState(null);
  const [playStatus, setPlayStatus] = useState(false);
  const [playerShow, setPlayerShow] = useState(false);
  const [idx, setIdx] = useState(0);
  const trackList = [
    {
      title: "Kanneerelamma",
      date: "02nd Nov, 2019",
      author: "PS. Raja Manohar",
      art: "aart-1",
      url: "/ramesh-pandranki/sets/kanneerelamma"
    },
    {
      title: "Shrusti Kartha",
      date: "06th dec, 2019",
      author: " Ps. V.Sateesh",
      art: "aart-2",
      url: "/mfmklg3kkul8/sets/jesus-song-srusti-kartha"
    },
    {
      title: "Neethonundani ",
      date: "27th Dec, 2019",
      author: "PS. Raja Manohar",
      art: "aart-3",
      url:
        "/rajprakashpaul/ninnu-choodani-version-2?in=krupaprakash-226/sets/raj-prakash-paul"
    },
    {
      title: "Rojantha",
      date: "01st Jan, 2020",
      author: "PS. Raja Manohar",
      art: "aart-4",
      url:
        "/joel-kodali/rojantha-harish-raghavendra?in=joel-kodali/sets/rojantha-24hrs-his-feet"
    },
    {
      title: "Mahimagala Raja",
      date: "29th Feb, 2020",
      author: " Ps. V.Sateesh",
      art: "aart-5",
      url: "/ashers-songsbin-05/mahima-gala-raja"
    }
  ];

  return (
    <Layout noFooter>
      <div id="Sermons">
        <div className="container">
          <h1 className="main-heading-ttl">Sermons</h1>
          <div className={`sermonList ${playData ? "pad" : "nopad"}`}>
            {trackList.map((trackData, i) => (
              <div
                className="sermonItem"
                onClick={() => {
                  setPlayData(trackData);
                  setPlayStatus(true);
                  setPlayerShow(true);
                  setIdx(i);
                }}
                key={trackData.art}
              >
                {playData && playData.art === trackData.art ? (
                  <span className="icon playing">
                    <span>Now Playing</span>
                  </span>
                ) : (
                  <span className="icon">
                    <IoIosPlay />
                  </span>
                )}
                <div className={`image ${trackData.art}`}>
                  <h2 className="med-heading-ttl">{trackData.title}</h2>
                  <p className="sub">
                    <span className="author">{trackData.author}</span>
                    <span className="date">{trackData.date}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          {playData ? (
            <div className={`playerWrap ${playerShow ? "visible" : "hidden"}`}>
              <Player
                playData={playData}
                playStatus={playStatus}
                trackIndex={idx}
                trackLength={trackList.length}
                changeTrack={val => {
                  setIdx(val);
                  setPlayData(trackList[val]);
                  setPlayStatus(true);
                  setPlayerShow(true);
                }}
                pauseTrack={() => {
                  setPlayStatus(false);
                }}
                onClick={() => {
                  setPlayerShow(false);
                  setTimeout(() => {
                    setPlayData(null);
                    setPlayStatus(false);
                  }, 500);
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export default Sermons;
