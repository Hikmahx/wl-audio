import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { play, updateProgress } from "../../redux/reducers/audioSlice";
import { RootState } from "../../redux/store";
import audioFile from "../../assets/iniko.mp4";
const AudioPlayer = () => {
  const isPlaying = useSelector((state: RootState) => state.audio.isPlaying);
  const progress = useSelector((state: RootState) => state.audio.progress);
  const dispatch = useDispatch();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      dispatch(play(false));
    } else {
      audioRef.current?.play();
      dispatch(play(true));
    }
  };

  const handleTimeUpdate = () => {
    const audioDuration = audioRef.current?.duration || 0;
    const currentTime = audioRef.current?.currentTime || 0;
    const progressPercentage = (currentTime / audioDuration) * 100 || 0;
    dispatch(updateProgress(progressPercentage));
  };

  return (
    <>
      <div className="w-full">
        <button
          className="border-2 border-white flex items-center justify-center p-2 rounded-full w-10 h-10 m-auto"
          onClick={handlePlayPause}
        >
          {isPlaying ? (
            <>
              <i className="fa-sharp fa-solid fa-pause text-xl text-stone-200"></i>
            </>
          ) : (
            <>
              <i className="fa-sharp fa-solid fa-play text-xl text-stone-200 pl-1"></i>
            </>
          )}
        </button>
      </div>
      <audio ref={audioRef} src={audioFile} onTimeUpdate={handleTimeUpdate} />
      <div className="w-full max-w-md mt-6 h-5">
        <div className="h-1 bg-white rounded-full w-full">
          <div
            className="h-1 bg-neutral-600 relative flex"
            style={{ width: `${Math.round(progress)}%` }}
          >
            <span className="w-5 h-5 border-[3px] border-white bg-zinc-800 absolute inset-y-0 right-0 rounded-full flex items-center justify-center m-auto"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
