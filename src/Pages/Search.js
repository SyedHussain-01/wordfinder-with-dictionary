import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { app_id, app_key, baseUrl } from "../Data/constants";
import logo from "../Assets/logo.jpg";
import axios from "axios";

function Search() {
  const location = useLocation();
  const state = location.state;
  const [meaning, setMeaning] = useState({});

  useEffect(() => {
    const getMeaning = () => {
      const path = "/entries/en-us/" + state[0];
      axios
        .get(baseUrl + path, {
          headers: {
            app_id: app_id,
            app_key: app_key,
            "Content-Type": "text/plain",
          },
        })
        .then((res) => {
          const result =
            res.data.results[0].lexicalEntries[0].entries[0].senses[0]
              .definitions[0];
          setMeaning({ ...meaning, wordId: result });
        });
    };
    getMeaning();
  }, [state]);

  const next = () => {
    setMaxPage(maxpage+20)
    setMinPage(maxpage+1)
  }

  const previous = () => {
    setMaxPage(maxpage-20)
    setMinPage(minpage-20)
  }

  const [minpage, setMinPage] = useState(0)
  const [maxpage, setMaxPage] = useState(20)

  return (
    <>
      <section id="dictionary">
        <div className="container">
          <div className="header">
            <h1>Word Finder</h1>
            <img src={logo} alt="Logo" width="100px;" />
          </div>
          <div>
            <ul>
              {state.slice(minpage, maxpage).map((word) => {
                return <li>{word}</li>;
              })}
            </ul>
          </div>
          <div className="btn-search">
            <button onClick={previous} >{"<"}</button>
            <button onClick={next} >{">"}</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
