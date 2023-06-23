import { Grid } from "@mui/material";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import youtube from "./api/youtube";
import { useEffect, useState } from "react";

function App() {

  const [videos,setVideos] = useState([])
  const [selectedVideo,setSelectedVideo] = useState(null)

  const onVideoSelect = (video) =>{
    setSelectedVideo(video)
  }
  const handleSubmit = async (data) => {
    const response = await youtube.get('search', {params: {
      part: 'snippet',
      maxResults:5,
      key : 'AIzaSyChiXoFiSU7y9k_VEB8aKI2bzxmdbRBbHc',
      q: data,
  }})
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  useEffect(() =>{
    handleSubmit('meaning of life is 42')
  },[])

  return (
    <Grid justify='center' container spacing={16}>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit}/>
          </Grid>

          <Grid item xs={8}>
            <VideoDetail video={selectedVideo}/>
          </Grid>
          
          <Grid item xs={4}>
            <VideoList onVideoSelect={onVideoSelect} videos={videos}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}


export default App
 