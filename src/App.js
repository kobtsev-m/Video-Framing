import { useState } from 'react';
import { BarLoader } from 'react-spinners';
import { Button, Card, Container, Form } from 'react-bootstrap';
import './App.css';

function App() {
  const [frames, setFrames] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const [videoObjectUrl, setVideoObjectUrl] = useState('');
  const [framesTotal, setFramesTotal] = useState(0);

  const handleVideoChange = (e) => {
    setVideoObjectUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleFramesChange = (e) => {
    setFramesTotal(e.target.value);
  };

  const handleVideoProcess = async (e) => {
    e.preventDefault();
    if (!videoObjectUrl || !framesTotal) {
      return;
    }
    setIsProcessing(true);
    const newFrames = await new Promise(async (resolve) => {
      let video = document.createElement('video');

      let seekResolve;
      video.addEventListener('seeked', async () => {
        if (seekResolve) {
          seekResolve();
        }
      });

      video.addEventListener('loadeddata', async () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const [w, h] = [video.videoWidth, video.videoWidth];
        canvas.width = w;
        canvas.height = h;

        const duration = video.duration;
        const fps = duration / framesTotal;
        let localFrames = [];
        let currentTime = 0;

        while (localFrames.length < framesTotal) {
          video.currentTime = currentTime;
          await new Promise((r) => (seekResolve = r)); // eslint-disable-line

          context.drawImage(video, 0, 0, w, h);
          const imageData = canvas.toDataURL('image/jpeg');
          localFrames.push(imageData);

          currentTime += fps;
        }

        resolve(localFrames);
      });

      video.src = videoObjectUrl;
    });
    setIsProcessing(false);
    setFrames(newFrames);
  };

  return (
    <div className='App'>
      <Container className='App__container'>
        <Card className='App__formCard'>
          <Card.Body>
            <Card.Title>Select video to process:</Card.Title>
            <form onSubmit={handleVideoProcess}>
              <Form.Group className='my-3'>
                <Form.Control type='file' onChange={handleVideoChange} />
              </Form.Group>
              <Form.Group className='my-3'>
                <Form.Control
                  type='number'
                  placeholder='Frames number'
                  onChange={handleFramesChange}
                />
              </Form.Group>
              <div className='d-flex align-items-center'>
                <Button
                  type='submit'
                  variant='dark'
                  disabled={isProcessing}
                  className='me-3'
                >
                  Process video
                </Button>
                {isProcessing && <BarLoader />}
              </div>
            </form>
          </Card.Body>
        </Card>
        {!!frames.length && (
          <Card className='App__imagesCard mt-3'>
            <Card.Body>
              <h3>Frames:</h3>
              {frames.map((frame, i) => (
                <img
                  key={i}
                  src={frame}
                  alt='...'
                  width={160}
                  height={90}
                  className='m-2'
                />
              ))}
            </Card.Body>
          </Card>
        )}
      </Container>
    </div>
  );
}

export default App;
