import {useState} from 'react';
import {Container, Grid, Typography, TextField, Button, ListItem} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useMiniSearch from './hooks/useMiniSearch'
import './App.css';


function App() {
  const [result, setResult] = useState([])
  const {searchEngine} = useMiniSearch()

  const searchData = (text) => {
    if (text && text.length > 5) {
      const coincidencias = searchEngine.search(text)
      setResult(coincidencias)
    }
  }

  const handleChange = (event) => {
    const value = event && event.target && event.target.value
    searchData(value)
  }

  const renderResult = () => {
    return (
      result.map(({text, title, id}) => (
        <ListItem button>
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
              <Typography display="inline" variant="subtitle1">Contenido : {text}</Typography>
            </Grid>
            <Grid item xs={2}
              container
              justifyContent="center"
              direction="column"
              alignItems="flex-start">
              <Typography display="inline" variant="h3">{id}</Typography>
            </Grid>

          </Grid>
        </ListItem>
      ))
    )
  }

  return (
    <Container fixed>
      <Grid container
        justifyContent="space-around"
        direction="column"
        spacing={3}>

        <Grid item
          container
          justifyContent="center"
          alignItems="flex-end"
          xs={12}>
          <Typography display="inline" variant="h4">Buscador basico</Typography>
        </Grid>

        <Grid item
          container
          justifyContent="center"
          alignItems="flex-end"
          xs={12}>
          <Grid item
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
            onClick={() => setResult([])}
          >
            Limpiar resultados
          </Button>
        </Grid>
        {
          result && result.length > 0 && renderResult()
        }

      </Grid>
    </Container>
  );
}

export default App;
