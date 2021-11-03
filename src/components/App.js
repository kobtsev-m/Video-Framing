import { useState } from 'react';
import { BarLoader } from 'react-spinners';
import { FramesList } from './FramesList';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  Slider,
  Tooltip,
  Typography
} from '@mui/material';

function App() {
  const [frames, setFrames] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const [videoDuration, setVideoDuration] = useState(0);
  const [videoName, setVideoName] = useState('');
  const [videoObjectUrl, setVideoObjectUrl] = useState('');
  const [imagesToLoad, setImagesToLoad] = useState(0);

  const handleVideoChange = (e) => {
    let video = document.createElement('video');
    video.preload = 'metadata';
    video.onloadedmetadata = () => {
      setVideoDuration(video.duration);
      setVideoName(e.target.files[0].name);
      setVideoObjectUrl(URL.createObjectURL(e.target.files[0]));
    };
    video.src = URL.createObjectURL(e.target.files[0]);
  };

  const handleVideoProcess = async (e) => {
    e.preventDefault();
    if (!videoObjectUrl || !imagesToLoad) {
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
        const fps = duration / imagesToLoad;
        let localFrames = [];
        let currentTime = 0;

        while (localFrames.length < imagesToLoad) {
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

  const RangeTooltip = ({ children, value }) => (
    <Tooltip enterTouchDelay={0} placement='top' title={value}>
      {children}
    </Tooltip>
  );

  return (
    <Box sx={{ backgroundColor: '#282c34' }}>
      <Container
        fixed={true}
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 3
        }}
      >
        <Card style={{ width: '30rem' }}>
          <CardContent>
            <Typography variant='h5'>Select video to process:</Typography>
            <form onSubmit={handleVideoProcess}>
              <Box sx={{ mt: 2 }}>
                <input
                  type='file'
                  id='videoFileInput'
                  style={{ display: 'none' }}
                  onChange={handleVideoChange}
                />
                <ButtonGroup sx={{ width: '100%' }}>
                  <label htmlFor='videoFileInput'>
                    <Button variant='contained' component='span'>
                      Choose...
                    </Button>
                  </label>
                  <Button disabled={true} sx={{ flexGrow: 1 }}>
                    {videoName
                      ? videoName.slice(0, 20) + '...'
                      : 'No file selected'}
                  </Button>
                </ButtonGroup>
              </Box>
              {!!videoDuration && (
                <Box sx={{ mt: 2 }}>
                  <Typography gutterBottom>
                    Number of images to upload
                  </Typography>
                  <Slider
                    valueLabelDisplay='auto'
                    components={{ ValueLabel: RangeTooltip }}
                    defaultValue={Math.floor(videoDuration / 2)}
                    max={Math.floor(videoDuration)}
                    onChange={(e) => setImagesToLoad(e.target.value)}
                  />
                </Box>
              )}
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Button
                  type='submit'
                  variant='outlined'
                  disabled={isProcessing}
                  sx={{ mr: 2 }}
                >
                  Process video
                </Button>
                {isProcessing && <BarLoader />}
              </Box>
            </form>
          </CardContent>
        </Card>
        {!!frames.length && <FramesList frames={frames} />}
      </Container>
    </Box>
  );
}

export default App;
