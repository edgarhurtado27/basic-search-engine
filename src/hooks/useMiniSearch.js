import {useEffect, useState} from "react";

import MiniSearch from 'minisearch'
import documents from '../resources/data'

const useMiniSearch = () => {
  const [searchEngine, setSearchEngine] = useState(null)

  useEffect(() => {
    const createMiniSearchInstance = () => {
      const miniSearch = new MiniSearch({
        fields: ['title', 'text'], // fields to index for full-text search
        storeFields: ['title', 'text'] // fields to return with search results

      })
      miniSearch.addAll(documents)
      setSearchEngine(miniSearch)
    }

    if (!searchEngine) {
      createMiniSearchInstance()
    }

  }, [searchEngine, setSearchEngine])
  return {searchEngine}
}

export default useMiniSearch

