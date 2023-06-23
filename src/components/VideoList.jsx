import React from 'react'
import VideoItem from './VideoItem'
import { Grid } from '@mui/material';

const VideoList = (props) => {
  const listOfVideos = props.videos.map((video, id) =>(
    <VideoItem onVideoSelect={props.onVideoSelect} key={id} video={video}/>
  ));
  return (
    <Grid container spacing={4}>
      {listOfVideos}
    </Grid>
  )
}

export default VideoList