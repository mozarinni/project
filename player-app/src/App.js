import React, {useState, useRef} from 'react';
//Import styles
import "./styles/app.scss"
//Adding components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
//Import utils
import data from './data'


function App() {
  //Ref
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration })
  };

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player 
        audioRef={audioRef}
        isPlaying={isPlaying}  
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}/>
      <Library 
        audioRef={audioRef} 
        songs={songs} 
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}/>
      <audio 
        ref={audioRef} 
        onTimeUpdate={timeUpdateHandler} 
        onLoadedMetadata={timeUpdateHandler} 
        src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
