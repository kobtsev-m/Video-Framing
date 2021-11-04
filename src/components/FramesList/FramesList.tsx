import { Card, CardBody } from 'reactstrap';
import { FC } from 'react';

interface Props {
  frames: string[];
}

export const FramesList: FC<Props> = (props) => {
  const { frames } = props;
  return (
    <Card className='w-100 mt-3'>
      <CardBody>
        <h3>Frames:</h3>
        <hr />
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
      </CardBody>
    </Card>
  );
};
