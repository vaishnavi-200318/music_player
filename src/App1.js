
import { useRef, useState } from 'react';

import './App1.css';



function App1() {
  const [curreMusicDetails, setcurreMusicDetails]= useState({
    songName:'Chasing',
    songArtist:'NEFFEX',
    songSrc:'./assets/songs/Chasing - NEFFEX.mp3',
    songAvatar:'./assets/images/image1.jpg'
  })
 
  const [audioProgress, setAudioProgress]= useState(0);
  const [isAudioPlaying, setIsAudioPlaying]= useState(false);
  const [musicIndex, setMusicIndex]=useState(0);
  const [musicTotalLength, setMusicTotalLength]=useState('04 : 38');
  const [musicCurrentTime, setMusicCurrentTime]=useState('00 : 00');
  const [videoIndex, setVideoIndex] = useState(0);

  const currentAudio = useRef()

  const handleMusicProgressBar =(e)=>{
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime = e.target.value * currentAudio.current.duration/100 ;
  }

  let avatarClass=['objectFitCover','objectfitContain','none']
  const [avatarClassIndex,setAvatarClassIndex]=useState(0)
  const handleAvatar=()=>{
    if(avatarClassIndex >= avatarClass.length - 1){
      setAvatarClassIndex(0)
      
    }else{
      setAvatarClassIndex(avatarClassIndex + 1)
    }
  }




  const handleAudioPlay = ()=>{
    if(currentAudio.current.paused){
      currentAudio.current.play();
      setIsAudioPlaying(true);
  }else{
    currentAudio.current.pause();
    setIsAudioPlaying(false);
  }
  }

  const musicAPI=[
    {
    songName:'Chasing',
    songArtist:'NEFFEX',
    songSrc:'./assets/songs/Chasing - NEFFEX.mp3',
    songAvatar:'./assets/images/image1.jpg'
    },
    {
      songName:'Apna Bana Le',
    songArtist:'Arjith Singh',
    songSrc:'./assets/songs/Apna Bana Le.webm',
    songAvatar:'./assets/images/image2.jpg'
    },
    {songName:'AURORA',
    songArtist:'NaN',
    songSrc:'./assets/songs/AURORA - Runaway (Lyrics).mp3',
    songAvatar:'./assets/images/image3.jpg'
  }
  ]

  const handleNextSong=()=>{
    if(musicIndex >= musicAPI.length - 1){
      let setNumber=0;
      setMusicIndex(setNumber)
    }else{
      let setNumber=musicIndex +1;
      setMusicIndex(setNumber)
      updateCurrentMusicDetails(setNumber);
    }
  }
  const handlePrevSong=()=>{
    if(musicIndex === 0){
      let setNumber=musicAPI.length - 1;
      setMusicIndex(setNumber)
    }else{
      let setNumber=musicIndex - 1;
      setMusicIndex(setNumber)
      updateCurrentMusicDetails(setNumber);
    }

  }
  const updateCurrentMusicDetails =(number)=>{
    let musicObject = musicAPI[number];
    currentAudio.current.src=musicObject.songSrc;
    currentAudio.current.play();
    setcurreMusicDetails({
    
        songName:musicObject.songName,
        songArtist:musicObject.songArtist,
        songSrc:musicObject.songSrc,
        songAvatar:musicObject.songAvatar
    })
    setIsAudioPlaying(true);
  }

const handleAudioUpdate =() =>{
  let min=Math.floor(currentAudio.current.duration / 60);
  let sec=Math.floor(currentAudio.current.duration % 60);
  let musicTotalLength=`${min <10? `0${min}`: min}:${sec <10? `0${sec}`: sec}`;
  setMusicTotalLength(musicTotalLength);

  let min1=Math.floor(currentAudio.current.currentTime / 60);
  let sec1=Math.floor(currentAudio.current.currentTime % 60);
  let musicCurrentT=`${min1 <10? `0${min1}`: min1}:${sec1 <10? `0${sec1}`: sec1}`;
  setMusicCurrentTime(musicCurrentT);

  const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
  setAudioProgress(isNaN(progress)? 0:progress)
}

const vidArray = ['./assets/Vedios/video1.mp4','./assets/Vedios/video2.mp4','./assets/Vedios/video3.mp4','./assets/Vedios/video4.mp4','./assets/Vedios/video5.mp4','./assets/Vedios/video6.mp4'];

const handleChangeBackground=()=>{
  if(videoIndex >= vidArray.length-1){
    setVideoIndex(0);
  }else{
    setVideoIndex(videoIndex + 1);
  }
}

  return (
   <>
   
    <div className='container'>
      <audio src='./assets/songs/Chasing - NEFFEX.mp3' ref={currentAudio} onEnded={handleNextSong} onTimeUpdate=
      {handleAudioUpdate}></audio>
      <video src={vidArray[videoIndex]}loop muted autoPlay className='backgroundVideo'></video>
      <div className="blackScreen"></div>
        <div className='music-Container'>
          <p className='MusicPlayer'>SONORA</p>
          <p className='Music-Head-Name'>{curreMusicDetails.songName}</p>
          <p className='music-Artist-Name'>{curreMusicDetails.songArtist}</p>
          <img src={curreMusicDetails.songAvatar} className={avatarClass[avatarClassIndex]}
          onClick={handleAvatar} alt='song Avatar' id="songAvatar"/>
          <div className='musicTimerDiv'>
            <p className='musicCurrentTime'>{musicCurrentTime}</p>
            <p className='musicTotalLength'>{musicTotalLength}</p>
          </div>
          <input type='range' name="musicProgressBar" className='musicProgressBar' value={audioProgress} onChange=
          {handleMusicProgressBar}/>
          <div className="musicControlers">
            <i className='fa-solid fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa-solid ${isAudioPlaying? 'fa-pause-circle':'fa-circle-play'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa-solid fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      <div className="changeBackBtn" onClick={handleChangeBackground}>Change Background</div>
    </div>
   </>
  );
}

export default App1;

