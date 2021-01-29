import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";

import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

import { Fragment } from "react";
import { IoCaretForward, IoCloseSharp } from "react-icons/io5";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../components/Loader";

const Sermons = () => {
  const [playData, setPlayData] = useState(null);
  const [showVid, setShowVid] = useState(null);
  const [nextPage, setNextPage] = useState(true);
  const [totalLength, setTotalLength] = useState(null);

  const apikey = "";
  // const apikey = "AIzaSyBUbN1QdY-3vqlOl7FUKZU8gOeYIdJLlfQ";

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
        params: {
          part: "snippet",
          maxResults: 25,
          key: apikey,
          playlistId: "PLhtK0tdhEYix0GV0GU3D2pW646dP8B9cP",
        },
      })
      .then((res) => {
        setPlayData(res.data.items);
        setTotalLength(res.data.pageInfo.totalResults);
        setNextPage(res.data.nextPageToken);
      });
  }, []);

  const fetchMoreData = () => {
    const existingData = playData;
    setTimeout(() => {
      axios
        .get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
          params: {
            part: "snippet",
            maxResults: 24,
            key: apikey,
            playlistId: "PLhtK0tdhEYix0GV0GU3D2pW646dP8B9cP",
            pageToken: nextPage,
          },
        })
        .then((res) => {
          setPlayData(existingData.concat(res.data.items));
          if (res.data.nextPageToken) {
            setNextPage(res.data.nextPageToken);
          } else {
            setNextPage(null);
          }
        });
    }, 1500);
  };

  return (
    <Layout toTop page="sermonsPage fixed_top">
      <div id="Sermons">
        <div className="headerTitle">
          {playData &&
            playData.map((item, idx) => (
              <Fragment>
                {idx == 0 ? (
                  <div key={idx} className="ytitem">
                    <div className="inWrap">
                      <img
                        className="ytImg"
                        src={item.snippet.thumbnails.maxres.url}
                      />
                      <span className="play" onClick={() => setShowVid(item)}>
                        <IoCaretForward />
                      </span>
                    </div>
                  </div>
                ) : null}
              </Fragment>
            ))}
        </div>
        <div className="container">
          <h1 className="main-heading-ttl">Sermons</h1>
          {playData ? (
            <InfiniteScroll
              dataLength={playData.length}
              next={fetchMoreData}
              hasMore={playData.length <= totalLength}
              loader={<Loader block />}
              endMessage={<h3 className="main-heading-ttl">We are Done.</h3>}
            >
              <div className="ytlist">
                {playData.map((item, idx) => (
                  <Fragment>
                    {idx !== 0 ? (
                      <div
                        key={idx}
                        onClick={() => setShowVid(item)}
                        className="ytitem"
                      >
                        <div className="inWrap">
                          <img
                            className="ytImg"
                            onClick={() => setShowVid(item)}
                            src={
                              item.snippet.thumbnails.standard
                                ? item.snippet.thumbnails.standard.url
                                : item.snippet.thumbnails.medium
                                ? item.snippet.thumbnails.medium.url
                                : item.snippet.thumbnails.standard.url
                            }
                          />

                          <span className="dot">
                            <IoCaretForward />
                          </span>
                          <div className="ytTitle">{item.snippet.title}</div>
                        </div>
                      </div>
                    ) : null}
                  </Fragment>
                ))}
              </div>
            </InfiniteScroll>
          ) : null}
        </div>
        {showVid ? (
          <DialogOverlay
            isOpen={showVid}
            className="dialogOverlay  large"
            onDismiss={() => setShowVid(null)}
          >
            <DialogContent className="dialogContent " aria-label="View Jobs">
              <span className="close">
                <IoCloseSharp onClick={() => setShowVid(null)} />
              </span>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${showVid.snippet.resourceId.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h1 className="main-heading-ttl">{showVid.snippet.title}</h1>
            </DialogContent>
          </DialogOverlay>
        ) : null}
      </div>
    </Layout>
  );
};

export default Sermons;
