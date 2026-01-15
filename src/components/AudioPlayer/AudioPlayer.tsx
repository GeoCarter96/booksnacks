'use client'
import { RiForward10Line, RiReplay10Line, RiPlayFill, RiPauseFill } from "react-icons/ri";

import './AudioPlayer.css'
import { useEffect, useRef, useState } from "react";

type Props = {
  audioSrc: string;
  title: string;
  author: string;
  imageLink: string;
};

export default function AudioPlayer({ audioSrc, title, author, imageLink }: Props) {
      const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
   useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
      const updateTime = () => setCurrentTime(audio.currentTime);
    const setMeta = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setMeta);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setMeta);
    };
  }, []);
   const seek = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
  };

  const formatTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

 const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
  <div className="audio__wrapper">
    <audio ref={audioRef} src={audioSrc}></audio>

   
    <div className="audio__track--wrapper">
      <figure className="audio__track--image-mask">
        <figure className="book__image--wrapper">
          <img className="book__image" src={imageLink} alt={title} />
        </figure>
      </figure>
      <div className="audio__track--details-wrapper">
        <div className="audio__track--title">{title}</div>
        <div className="audio__track--author">{author}</div>
      </div>
    </div>

  
    <div className="audio__controls--wrapper">
      <div className="audio__controls">
        <button className="audio__controls--btn" onClick={() => seek(currentTime - 10)}>
          <RiReplay10Line />
        </button>
        <button className="audio__controls--btn audio__controls--btn-play" onClick={togglePlay}>
          {isPlaying ? <RiPauseFill /> : <RiPlayFill />}
        </button>
        <button className="audio__controls--btn" onClick={() => seek(currentTime + 10)}>
          <RiForward10Line />
        </button>
      </div>
    </div>

    
    <div className="audio__progress--wrapper">
      <div className="audio__time">{formatTime(currentTime)}</div>
      <input 
        type='range' 
        min={0} 
        max={duration || 0} 
        value={currentTime} 
        className="audio__progress--bar"  
        onChange={(e) => seek(Number(e.target.value))} 
      />
      <div className="audio__time">{formatTime(duration)}</div>
    </div>
    
  </div> 
</div>

    
  )
}