import React from "react";
import PropTypes from "prop-types";

import {Grid, TextField, Button} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const SearchBar = ({ updateTerm, cleanResults, term }) => (
  <>
    <Grid item container justifyContent="center" alignItems="flex-end" xs={12}>
      <Grid item container justifyContent="center" alignItems="flex-end" xs={8}>
        <TextField
          id="standard-basic"
          fullWidth
          label="Inicia busqueda"
          onChange={updateTerm}
          value={term}
        />
      </Grid>
    </Grid>

    <Grid item container justifyContent="center" alignItems="flex-end" xs={12}>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={cleanResults}
      >
        Limpiar resultados
      </Button>
    </Grid>
  </>
);

SearchBar.propTypes = {
  updateTerm: PropTypes.string.isRequired,
  cleanResults: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired,
};

export default SearchBar;
