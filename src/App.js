import './App.css';
import Video from './Component/Video';

function App() {
  return (
    //bem
    <div className="app">
      <h1>Lets Build tiktok clone</h1>
      <div className="app_videos">
          <Video/>
          <Video/>
          <Video/>

      </div>
    </div>
  );
}

export default App;
