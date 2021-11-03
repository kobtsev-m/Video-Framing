import {
  Card,
  CardContent,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  Typography
} from '@mui/material';

export const FramesList = (props) => {
  const { frames } = props;
  return (
    <Card sx={{ width: '100%', mt: 3 }}>
      <CardContent>
        <List>
          <ListItem>
            <Typography variant='h5'>Frames:</Typography>
          </ListItem>
          <Divider />
          <ListItem>
            <ImageList
              sx={{ width: '100%' }}
              variant='quilted'
              cols={4}
              rowHeight={160}
            >
              {frames.map((frame, i) => (
                <ImageListItem key={i}>
                  <img key={i} src={frame} alt='...' />
                </ImageListItem>
              ))}
            </ImageList>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
