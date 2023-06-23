import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const VideoDetail = (props) => {
  if (!props.video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`

  return (
    <Grid item xs={12} style={{margin:'0 40px'}}>
      <Paper elevation={6} style={{margin:'0 40px', height: '100%'}} >
        <iframe style={{width:'100%',height:'80vh'}} title='Video Player' src={videoSrc} />
        <Paper elevation={6} style={{padding:'10px', height: '100%'}}>
          <Typography variant='h4' >{props.video.snippet.title} - {props.video.snippet.channelTitle}</Typography>
          <Typography variant='subtitle1' style={{color:'red'}} >{props.video.snippet.channelTitle}</Typography>
          <Typography variant='subtitle2' >{props.video.snippet.description}</Typography>
        </Paper>
      </Paper>
    </Grid>
  )
}

export default VideoDetail