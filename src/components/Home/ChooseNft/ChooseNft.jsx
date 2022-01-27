import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./ChooseNft.module.scss";
import gif1 from "../../../assets/d1.gif";
import gif2 from "../../../assets/d2.gif";
import vs from "../../../assets/VS.svg";

const ChooseNft = () => {
  return (
    <Container>
      <div className={classes.choose_nft_wrapper}>
        <Row className="d-flex justify-content-center">
          <Col md={6} className="text-center">
            <h3 className={classes.choose_main_title}>
              Choose a Side & join the Battle
            </h3>
            <p className={classes.choose_subtitle}>
              10k unique super-powered Hero & Villain Apes battling for control
              of the Metaverse
            </p>
          </Col>
        </Row>
        {/* 2nd part here */}
        <Row className="d-flex justify-content-center align-items-center w-100">
          <Col md={10}>
            <Row className="d-flex justify-content-center align-items-center w-100">
              <Col md={5}>
                <div className={`${classes.hv_container} `}>
                  <div className={classes.img_container}>
                    <img src={gif1} alt="Ape Hero" />
                  </div>
                  <div
                    className={`${classes.actions} d-flex align-items-center w-100`}
                  >
                    <a
                      href="/market/0xfc27ba34347afccb2d386093b9671b53d2294a96-ape-heroes"
                      className="btn btn-outline orange"
                      title="Get an Ape Hero"
                    >
                      Get an Ape Hero
                    </a>
                  </div>
                </div>
              </Col>
              <Col
                lg={2}
                md={2}
                className="d-flex justify-content-center align-items-center my-sm-5 "
              >
                <img src={vs} alt="Hero vs Villain" />
              </Col>
              <Col md={5}>
                <div className={`${classes.hv_container}`}>
                  <div className={classes.img_container}>
                    <img src={gif2} alt="Ape Villain" />
                  </div>
                  <div
                    className={`${classes.actions} d-flex align-items-center w-100`}
                  >
                    <a
                      href="/serum"
                      className="btn btn-outline green"
                      title="Mint Serum"
                    >
                      Mint Serum
                    </a>
                    <a
                      href="/villain"
                      className="btn btn-outline purple"
                      title="Create Villain"
                    >
                      Create Villain
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ChooseNft;
