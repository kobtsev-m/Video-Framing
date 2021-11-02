import {useRef, useState} from "react";
import exampleVideo from './assets/example2.mp4'

import './App.css';


function App() {
  let video = useRef(null);
  let canvas = useRef(null);

  const [images, setImages] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const width = 400;
  const height = 250;

  const processVideo = () => {
    setIsProcessing(true);
    let newImages = [];
    let i = 0;
    let interval = setInterval(() => {
      const ctx = canvas.current.getContext("2d");
      video.current.currentTime = 10 * i + 1;
      ctx.drawImage(video.current, 0, 0, width, height);
      newImages.push(canvas.current.toDataURL("image/jpeg"));
      if (i > 30) {
        clearInterval(interval);
        setIsProcessing(false);
        setImages(newImages);
      }
      i++;
    }, 500);
  }

  return (
    <div className="App">
      <div className="App__container">
        <video className="App__video" ref={video} src={exampleVideo}/>
        <div className="App__canvas">
          <h3>Video:</h3>
          <canvas ref={canvas} width={width} height={height}/>
          <button className="App__button" disabled={isProcessing} onClick={processVideo}>Process video</button>
        </div>
        {!!images.length &&
          <div>
            <h3>Results:</h3>
            {images.map((image, i) => (
              <img key={i} src={image} alt="..." width={160} height={90}/>
            ))}
          </div>
        }
      </div>
    </div>
  );
}

export default App;
