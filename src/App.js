import {useState} from 'react';
import useMiniSearch from './hooks/useMiniSearch'

import Main from './pages/Main';
import Title from './components/Title/Title'
import SearchBar from './components/SearchBar/SearchBar';
import SearchResult from './components/SearchResult/SearchResult'


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


  return (
    <Main>
      <Title />
      <SearchBar handleChange={handleChange} cleanResults={() => setResult([])} />
      <SearchResult result={result} />
    </Main>
  );
}

export default App;
