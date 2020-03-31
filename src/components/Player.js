import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import Slider from "react-input-slider";
import { IoIosPlay, IoIosPause, IoIosSquare } from "react-icons/io";

const Player = ({ playData, playStatus, onClick }) => {
  const [pip, setPip] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [seeking, setSeeking] = useState(0);
  const [played, setPlayed] = useState(0);

  const playerRef = useRef(null);

  useEffect(() => {
    if (playStatus) {
      setPlaying(true);
    }
  }, [playStatus]);

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleSeekChange = e => {
    setPlayed(parseFloat(e));
    playerRef.current.seekTo(parseFloat(e));
  };

  const handleSeekMouseUp = () => {
    setSeeking(false);
  };
  const handlePlayPause = () => {
    setPlaying(!playing);
    // onClick(idx);
  };
  const handleStop = () => {
    setPlaying(false);
    setPlayed(0);
    onClick();
    playerRef.current.seekTo(0);
  };
  console.log(playing);
  return (
    <div className="sermonItem">
      <ReactPlayer
        ref={playerRef}
        url={`https://soundcloud.com${playData.url}`}
        height="0"
        className="react-player"
        width="100%"
        height="100px"
        pip={pip}
        playing={playing}
        onProgress={e => {
          if (!seeking) {
            setPlayed(parseFloat(e.played));
          }
        }}
      />
      <div className="player">
        <div className={`aart ${playing ? "playing" : "paused"}`}>
          <div className={`img ${playData.art}`} />
        </div>
        <div className={`rest ${playing ? "playing" : "paused"}`}>
          <div className="top">
            <div className="left">
              <h2 className="med-heading-ttl">{playData.title}</h2>
              <p className="sub">
                <span className="author">{playData.author}</span>
                <span className="date">{playData.date}</span>
              </p>
            </div>
            <div className="right">
              <button onClick={handlePlayPause}>
                {!playing ? <IoIosPlay /> : <IoIosPause />}
              </button>
              <button onClick={handleStop}>
                <IoIosSquare />
              </button>
            </div>
          </div>
          <div className="seekbar">
            <Slider
              axis="x"
              x={played * 100}
              onDragStart={handleSeekMouseDown}
              onDragEnd={handleSeekMouseUp}
              disabled={!playing}
              onChange={({ x }) => handleSeekChange(x / 100)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
