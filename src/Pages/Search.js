import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { app_id, app_key, baseUrl } from "../Data/constants";
import logo from "../Assets/logo.jpg";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

const DescModal = ({ show, handleClose, word, meaning }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <div className="modal-container">
        <div className="card">
          <h2>{ word }</h2>
          <div className="hr" />
          <p>
            { meaning }
          </p>
        </div>
      </div>
    </Modal>
  );
};

function Search() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();
  const state = location.state;
  const [meaning, setMeaning] = useState("");

  const getMeaning = (word, id) => {
    const path = "/entries/en-us/" + word;
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
        setMeaning(result);
        handleModal(word)
        
      });
  };

  const [currWord, setCurrWord] = useState("")

  const handleModal = (word) => {
      setCurrWord(word)
      handleShow();
  }

  const next = () => {
    setMaxPage(maxpage + 20);
    setMinPage(maxpage + 1);
  };

  const previous = () => {
    setMaxPage(maxpage - 20);
    setMinPage(minpage - 20);
  };

  const [minpage, setMinPage] = useState(0);
  const [maxpage, setMaxPage] = useState(20);

  const handleReadMore = (id, word) => {
    getMeaning(word, id);
  };

  return (
    <>
      <DescModal show={show} handleClose={() => handleClose()} word={currWord} meaning={meaning} />
      <section id="dictionary">
        <div className="container">
          <div className="header">
            <h1>Dictionary</h1>
            <img src={logo} alt="Logo" width="100px;" />
          </div>
          <div className="ans-container">
            {state.slice(minpage, maxpage).map((word, id) => {
              return (
                <div key={id}>
                  <div className="ans-row">
                    <div className="ans">
                      <p>{word}</p>
                    </div>
                    <div className="ans-btn">
                      <button onClick={() => handleReadMore(id, word)}>
                        Read More
                      </button>
                    </div>
                  </div>
                  <div className="hr" />
                </div>
              );
            })}
          </div>
          <div className="btn-search">
            <button onClick={previous}>{"<"}</button>
            <button onClick={next}>{">"}</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
