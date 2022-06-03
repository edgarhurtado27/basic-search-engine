import React from "react";
import PropTypes from "prop-types";

import { Grid, Typography, List, ListItem } from "@material-ui/core";

const renderResult = ({ text, title, id, slot }) => {
  return (
    <ListItem key={id} button>
      <Grid container justifyContent="space-between" direction="row">
        <Grid
          item
          md={10}
          xs={9}
          container
          justifyContent="center"
          direction="column"
          alignItems="flex-start"
        >
          <Typography display="inline" variant="h4">
            {title}
          </Typography>
          <Typography display="inline" variant="subtitle1">
            {text}
          </Typography>
        </Grid>
        <Grid
          item
          md={2}
          xs={3}
          container
          justifyContent="center"
          direction="column"
          alignItems="center"
        >
          <Typography display="inline" variant="h3" color="secondary">
            {slot}
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  );
};

const SearchResult = ({ result, notFoundMsg }) => (
  <List>
    {result && result.length > 0 && result.map((item) => renderResult(item))}
    {result && result.length === 0 && notFoundMsg && (
      <Grid
        item
        xs={12}
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
      >
        <Typography display="inline" variant="h3" color="primary">
          Sin resultados :(
        </Typography>
      </Grid>
    )}
  </List>
);

SearchResult.propTypes = {
  result: PropTypes.array.isRequired,
  notFoundMsg: PropTypes.bool.isRequired,
};

export default SearchResult;
