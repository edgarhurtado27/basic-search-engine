import {useState, useCallback} from 'react';
import useMiniSearch from './hooks/useMiniSearch'

import Main from './pages/Main';
import Title from './components/Title/Title'
import SearchBar from './components/SearchBar/SearchBar';
import SearchResult from './components/SearchResult/SearchResult'


function App() {
  const [result, setResult] = useState([])
  const [notFoundMsg, setNotFoundMsg] = useState(false)
  const {searchEngine} = useMiniSearch()

  const searchData = useCallback((text) => {
    const coincidencias = searchEngine.search(text)

    setResult(coincidencias)
    if (coincidencias && coincidencias.length === 0)
      setNotFoundMsg(true)

  }, [searchEngine])

  const handleChange = useCallback((event) => {
    const value = event.target.value || ""

    if (value && value.length > 5) {
      searchData(value)
    }
    else if (value === "") {
      setResult([])
      setNotFoundMsg(false)
    }

  }, [setNotFoundMsg, searchData])


  return (
    <Main>
      <Title />
      <SearchBar handleChange={handleChange} cleanResults={() => setResult([])} />
      <SearchResult result={result} notFoundMsg={notFoundMsg} />
    </Main>
  );
}

export default App;
