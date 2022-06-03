import React from "react";

import { useState, useCallback, useEffect } from "react";
import useMiniSearch from "./hooks/useMiniSearch";

import Main from "./pages/Main";
import Title from "./components/Title/Title";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResult from "./components/SearchResult/SearchResult";

const App = () => {
  const [result, setResult] = useState([]);
  const [term, setTerm] = useState("");
  const [notFoundMsg, setNotFoundMsg] = useState(false);
  const { searchEngine } = useMiniSearch();
  const updateTerm = (event) => setTerm(event.target.value || "");
  const cleanResults = () => setTerm("");

  const searchData = useCallback(
    (term) => {
      const matches = searchEngine.search(term);

      setResult(matches);
      if (matches && matches.length === 0) setNotFoundMsg(true);
    },
    [searchEngine]
  );

  useEffect(() => {
    if (term.length > 5) {
      searchData(term);
    } else {
      setResult([]);
      setNotFoundMsg(false);
    }
  }, [term, searchData]);

  return (
    <Main>
      <Title />
      <SearchBar
        updateTerm={updateTerm}
        term={term}
        cleanResults={cleanResults}
      />
      <SearchResult result={result} notFoundMsg={notFoundMsg} />
    </Main>
  );
};

export default App;
