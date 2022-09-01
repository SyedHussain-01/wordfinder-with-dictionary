import React, { useState, useEffect } from "react";
import "../Assets/Styles/style.css";
import logo from "../Assets/logo.jpg";
import {
  startsWith,
  endsWith,
  consists,
  length,
  startsAndEnds,
  startsAndConsists,
  endsAndConsists,
} from "../Data/regex";
import { data } from "../Data/words-data";
import { useNavigate } from "react-router-dom";

const HomeScreen = (props) => {
  const navigate = useNavigate();
  const [starts, setStartsWith] = useState("");
  const [ends, setEndsWith] = useState("");
  const [contains, setContains] = useState("");
  const [lengthOfWord, setLength] = useState("");
  const [filteredArr, setFilteredArr] = useState([]);

  useEffect(()=>{
    if(filteredArr.length>0){
        navigate('/search', { state: filteredArr })
    }
  },[filteredArr.length])

  const handleSubmit = () => {

    if (ends === "" && contains === "" && lengthOfWord === "") {
      const result = data.filter((word) => {
        if (startsWith(starts, word) === true) {
          return word;
        }
      });
      setFilteredArr(result);
    } else if (starts === "" && contains === "" && lengthOfWord === "") {
      const result = data.filter((word) => {
        if (endsWith(ends, word) === true) {
          return word;
        }
      });
      setFilteredArr(result);
    } else if (starts === "" && ends === "" && lengthOfWord === "") {
      const result = data.filter((word) => {
        if (consists(contains, word) === true) {
          return word;
        }
      });
      setFilteredArr(result);
    } else if (starts === "" && ends === "" && contains === "") {
      const result = data.filter((word) => {
        if (length(lengthOfWord, word) === true) {
          return word;
        }
      });
      setFilteredArr(result);
    } else if (contains === "" && lengthOfWord === "") {
      const result = data.filter((word) => {
        if (startsAndEnds(starts, ends, word) === true) {
          return word;
        }
      });
      setFilteredArr(result);
    } else if (ends === "" && lengthOfWord === "") {
      const result = data.filter((word) => {
        if (startsAndConsists(starts, contains, word) === true) {
          return word;
        }
      });
      setFilteredArr(result);
    } else if (starts === "" && lengthOfWord === "") {
      const result = data.filter((word) => {
        if (endsAndConsists(ends, contains, word) === true) {
          return word;
        }
      });
      setFilteredArr(result);
    } else {
      alert("Not Supported");
    }
  };

  const handleLength = (e) => {
    if (e > 0) {
      setLength(e);
    }
  };

  const emptyInputsHandler = () => {
    alert("Empty Inputs")
  }

  return (
    <div>
      <section id="dictionary">
        <div className="container">
          <div className="header">
            <h1>Word Finder</h1>
            <img src={logo} alt="Logo" width="100px;" />
          </div>

            <div className="inner-div">
              <div className="icon">
                <i className="fa-solid fa-book" />
              </div>
              <div className="inputs">
                <input
                  type="text"
                  placeholder="Starts With"
                  onChange={(e) => setStartsWith(e.target.value)}
                  value={starts}
                />
              </div>
            </div>
            <div className="inner-div inner-div2">
              <div className="icon">
                <i className="fa-solid fa-swatchbook" />
              </div>
              <div className="inputs">
                <input
                  type="text"
                  placeholder="Ends With"
                  onChange={(e) => setEndsWith(e.target.value)}
                  value={ends}
                />
              </div>
            </div>
            <div className="inner-div">
              <div className="icon">
                <i className="fa-solid fa-book-bookmark" />
              </div>
              <div className="inputs">
                <input
                  type="text"
                  placeholder="Contains"
                  onChange={(e) => setContains(e.target.value)}
                  value={contains}
                />
              </div>
            </div>
            <div className="inner-div inner-div2">
              <div className="icon">
                <i className="fa-solid fa-book-open" />
              </div>
              <div className="inputs">
                <input
                  type="number"
                  placeholder="Length"
                  onChange={(e) => handleLength(e.target.value)}
                  value={lengthOfWord}
                />
              </div>
            </div>
            <div className="btn">
                {
                    starts === "" && ends === "" && contains === "" && lengthOfWord === ""
                    ?
                    <button onClick={emptyInputsHandler}>Search</button>
                    :
                    <button onClick={handleSubmit}>Search</button>
                }
            </div>

        </div>
      </section>
      <section id="modal">
        <div className="modal-container">
          <div className="card">
            <h2>Apple</h2>
            <div className="hr" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="card">
            <h2>Mango</h2>
            <div className="hr" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
