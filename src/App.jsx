import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCountdown } from './hooks/useCountTimer'
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegPauseCircle } from "react-icons/fa";

function App() {
  const [timer, setTimer] = useState(15)
  const [play,setPlay] = useState(false)
  const { minutes, seconds, handlePlayPause, handleReset } = useCountdown(timer);

  const handelInputChange=(e)=>{
    setTimer(e.target.value);
  }
  const handlePause = () => {
    handlePlayPause();
    setPlay(!play);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'start', flexDirection: 'column', marginBottom: '10px', gap:'0.25px' }}>
      <label htmlFor="min" >Enter Minutes</label>
      <input type="number" name='min' value={timer} onChange={handelInputChange} style={{ width:'100%', fontSize : '1.4rem', borderRadius: "8px"}} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={handlePause} style={{ fontSize : '3.2rem', color :'#85bdee',marginLeft : '15px'}}>{play? <FaRegCirclePlay /> : <FaRegPauseCircle />}</button>
        <h1 style={{ marginLeft : '10px' }}>{minutes >= 10 ? minutes : '0'+minutes} : {seconds >= 10 ? seconds : '0' + seconds}</h1>
        <button onClick={handleReset} style={{ fontSize : '3.2rem', color: '#85bdee'}}>Reset</button>
      </div>
    </div>
  )
}

export default App
