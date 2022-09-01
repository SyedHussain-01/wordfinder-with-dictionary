import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "../Assets/icons8-wiktionary-64.png";
import "../Assets/Styles/HomeStyle.css";
import { data } from "../Data/words-data";

function Home() {

  const [filteredArr, setFilteredArr] = useState([])

  useEffect(()=>{
    const handleInput = () => {
    
      const s = 't'
      const e = 'e'
      const c = 'te'
      const len = 4
      //Starts With
      // const re = new RegExp(`^${s}[a-zA-Z]*`)
      //Ends With
      // const re = new RegExp(`[a-zA-Z]*${e}\$`)
      //Consists
      // const re = new RegExp(`[a-zA-Z]*${e}[a-zA-Z]*`)
      //Length
      const re = new RegExp(`^[a-zA-Z]{${len}}$`)
      //StartsWith and EndsWith
      // const re = new RegExp(`^${s}[a-zA-Z]*${e}\$`)
      //StartsWith and Consists
      // const re = new RegExp(`(?=.*${c})^${s}`)
      //EndsWith and Consists
      // const re = new RegExp(`^(?=.*${c}).*${e}$`)
      const result = data.filter((word)=>{
        console.log("result: " + re.test(word))
        if(re.test(word)){
          return word
        }
      })
      setFilteredArr(result)
  
    }

    handleInput();
  },[])

  return (
    <div className="home-page-wrapper">
      <Container>
        {filteredArr && console.log(filteredArr)}
        <Row>
          <Col md={12} className={"text-center"}>
            <img src={logo} className="logo-img" alt="image" />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md={4} className={"text-center"}>
            <Form.Control
              type="text"
              placeholder="YOUR LETTERS"
              className="text-input"
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md={12} className={"d-flex justify-content-center"}>
            <div className="parameters-space-wrapper">
              <div className="parameters-space">
                <Row>
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      placeholder="STARTS WITH"
                      className="text-input"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      placeholder="ENDS WITH"
                      className="text-input"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      placeholder="CONTAINS"
                      className="text-input"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      placeholder="LENGTH"
                      className="text-input"
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
