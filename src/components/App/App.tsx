import { ChangeEvent, FormEvent, useState } from 'react';
import { BarLoader } from 'react-spinners';
import { FramesList } from '../FramesList/FramesList';
import './App.scss';
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

const FPS = 30;

function App() {
  const [frames, setFrames] = useState<string[]>([]);

  const [videoObjectUrl, setVideoObjectUrl] = useState<string>('');
  const [videoDuration, setVideoDuration] = useState<number>(0);
  const [imagesToLoad, setImagesToLoad] = useState<number>(0);

  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleVideoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    let videoFile = e.target.files[0];
    let videoHtmlElement = document.createElement('video');
    videoHtmlElement.preload = 'metadata';
    videoHtmlElement.onloadedmetadata = () => {
      setVideoObjectUrl(URL.createObjectURL(videoFile));
      setVideoDuration(+videoHtmlElement.duration.toFixed(1));
      setImagesToLoad(Math.floor(videoHtmlElement.duration * FPS));
      setIsVideoLoaded(true);
    };
    videoHtmlElement.src = URL.createObjectURL(videoFile);
  };

  const handleImagesNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const percentage = parseInt(e.target.value);
    setImagesToLoad(Math.floor((percentage / 100) * videoDuration * FPS));
  };

  const handleVideoProcess = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!videoObjectUrl || !imagesToLoad) {
      return;
    }
    setIsProcessing(true);
    const newFrames = await new Promise<string[]>(async (resolve) => {
      let videoHtmlElement = document.createElement('video');

      let seekResolve: any;
      videoHtmlElement.addEventListener('seeked', async () => {
        if (seekResolve) {
          seekResolve();
        }
      });

      videoHtmlElement.addEventListener('loadeddata', async () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d') as CanvasRenderingContext2D;
        const [width, height] = [
          videoHtmlElement.videoWidth,
          videoHtmlElement.videoWidth
        ];
        canvas.width = width;
        canvas.height = height;

        const interval = videoDuration / imagesToLoad;
        let localFrames: string[] = [];
        let currentTime = 0;

        while (localFrames.length < imagesToLoad) {
          videoHtmlElement.currentTime = currentTime;
          await new Promise<null>((r) => (seekResolve = r)); // eslint-disable-line

          context.drawImage(videoHtmlElement, 0, 0, width, height);
          const imageData = canvas.toDataURL('image/jpeg');
          localFrames.push(imageData);

          currentTime += interval;
        }

        resolve(localFrames);
      });

      videoHtmlElement.src = videoObjectUrl;
    });
    setIsProcessing(false);
    setFrames(newFrames);
  };

  return (
    <div className='App'>
      <Container className='App__container'>
        <Card className='App__formCard'>
          <CardBody>
            <Form onSubmit={handleVideoProcess}>
              {!isVideoLoaded ? (
                <FormGroup>
                  <Label>Select video to process:</Label>
                  <Input type='file' lang='en' onChange={handleVideoChange} />
                </FormGroup>
              ) : (
                <>
                  <FormGroup>
                    <p>
                      <b>Video duration:</b> {videoDuration}
                    </p>
                    <p>
                      <b>Video frames per second:</b> {FPS}
                    </p>
                    <p>
                      <b>Total frames:</b> {Math.floor(videoDuration * FPS)}
                    </p>
                  </FormGroup>
                  <FormGroup>
                    <video
                      className='w-100 rounded'
                      src={videoObjectUrl}
                      controls={true}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Number of images: {imagesToLoad}</Label>
                    <Input
                      type='range'
                      defaultValue={100}
                      onChange={handleImagesNumberChange}
                    />
                  </FormGroup>
                  <FormGroup className='d-flex align-items-center'>
                    <Button
                      type='submit'
                      color='dark'
                      outline={true}
                      disabled={isProcessing}
                      className='me-3'
                    >
                      Process video
                    </Button>
                    {isProcessing && <BarLoader />}
                  </FormGroup>
                </>
              )}
            </Form>
          </CardBody>
        </Card>
        {!!frames.length && <FramesList frames={frames} />}
      </Container>
    </div>
  );
}

export default App;
