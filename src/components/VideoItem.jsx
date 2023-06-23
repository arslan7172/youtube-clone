import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const VideoItem = (props) => {
  
  return (
    <Grid item xs={12}>
      <Paper onClick={()=> props.onVideoSelect(props.video)} style={{width:'90%',diplay: 'flex',cursor:'pointer', alignItems :'center',}} >
        <img style={{width:'100%'}} alt='thumbnail' src={props.video.snippet.thumbnails.medium.url} />
        <Typography variant='subtitle1' style={{padding:'10px'}}>
          <b>{props.video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default VideoItem