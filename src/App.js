import axios from "axios";
import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import { data } from "./Data/words-data";
import { app_id,app_key,baseUrl } from './Data/constants'

function App() {
  const [meaning, setMeaning] = useState('');
  
  const wordId = data[0];
  useEffect(() => {

    const getMeaning = () => {
      const path =
          "/entries/en-us/" +
          wordId
      axios.get(baseUrl + path,{
        headers: {
          app_id: app_id,
          app_key: app_key,
          'Content-Type': 'text/plain'
        }, 
      }).then((res)=>{
        const result =  res.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]
        setMeaning(result)
      })
    };
    getMeaning();
  }, []);

  return (
    <div>
      {console.log(`Meaning of ${wordId}: `)}
      {meaning && console.log(meaning)}
      <Home />
    </div>
  );
}

export default App;
