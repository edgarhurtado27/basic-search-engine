import React from 'react'
import {Grid, TextField, Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const SearchBar = ({handleChange, cleanResults}) => {
  return (
    <>
      <Grid item
        container
        justifyContent="center"
        alignItems="flex-end"
        xs={12}>
        <Grid item
          container
          justifyContent="center"
          alignItems="flex-end"
          xs={8}>
          <TextField id="standard-basic" fullWidth label="Inicia busqueda" onChange={handleChange} />
        </Grid>
      </Grid>
      <Grid item
        container
        justifyContent="center"
        alignItems="flex-end"
        xs={12}>
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
  )
}

export default SearchBar

