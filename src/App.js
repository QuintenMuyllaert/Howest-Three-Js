import './App.css';
import './scripts/three';

function App() {
  return (
    <div className="App">
      <h1>Emile <span className='yellow'>Goeminne</span></h1>
      <header className='mainHeader'>
        <div className='mainHeader__content'>
          <canvas className="webgl"></canvas>
        </div>
        <div className='mainHeader__videoContainer'>
          <video className="mainHeader__video" muted autoPlay loop>
            <source src="/videos/yt5s.com-Dark.mov(360p).mp4" type="video/mp4" />
          </video>
        </div>
      </header>
      <div>
        more stuff
      </div>
      <div>
        more stuff
      </div>
    </div>
  );
}

export default App;
