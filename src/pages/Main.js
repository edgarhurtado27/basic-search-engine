import React from 'react'
import {Container, Grid} from '@material-ui/core';

const Main = ({children}) => {
  return (
    <Container fixed>
      <Grid container
        justifyContent="space-around"
        direction="column"
        spacing={3}>
        {children}
      </Grid>
    </Container>
  )
}

export default Main

