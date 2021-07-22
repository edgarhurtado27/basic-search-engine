import React from 'react'
import {Grid, Typography} from '@material-ui/core';

const Title = () => {
  return (
    <Grid item
      container
      justifyContent="center"
      alignItems="flex-end"
      xs={12}>
      <Typography display="inline" variant="h4">Buscador basico</Typography>
    </Grid>
  )
}

export default Title

