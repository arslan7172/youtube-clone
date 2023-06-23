import React, { useState } from 'react'
import {Paper, TextField} from '@mui/material'

const SearchBar = (props) => {

  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  };
  const handleSubmit =(e) => {
    e.preventDefault();
    props.onSubmit(input)
  };
  return (
    <Paper elevation={6} style= {{padding:'25px'}} >
      <form onSubmit={handleSubmit} >
        <TextField value={input} onChange={handleChange} fullWidth label="Search for a video" variant="standard" />
      </form>
    </Paper>
  )
}

export default SearchBar