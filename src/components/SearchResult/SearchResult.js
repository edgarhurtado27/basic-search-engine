import React from 'react'
import {Grid, Typography, ListItem} from '@material-ui/core';

const renderResult = (result) => {
  return (
    result.map(({text, title, id}) => (
      <ListItem key={id} button>
        <Grid
          container
          justifyContent="space-between"
          direction="row">

          <Grid item xs={10}
            container
            justifyContent="center"
            direction="column"
            alignItems="flex-start">
            <Typography display="inline" variant="h4">{title}</Typography>
            <Typography display="inline" variant="subtitle1">{text}</Typography>
          </Grid>
          <Grid item xs={2}
            container
            justifyContent="center"
            direction="column"
            alignItems="center">
            <Typography display="inline" variant="h3">{id}</Typography>
          </Grid>

        </Grid>
      </ListItem>
    ))
  )
}

const SearchResult = ({result}) => result && result.length > 0 && renderResult(result)

export default SearchResult

