import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./ChooseNft.module.scss";

const ChooseNft = () => {
  return (
    <Container>
      <div className={classes.choose_nft_wrapper}>
        <Row className="flex justify-content-center">
          <Col md={6} className="text-center">
            <h3 style={{ color: "white", fontSize: "28px" }}>
              Choose a Side & join the Battle
            </h3>
            <p>
              10k unique super-powered Hero & Villain Apes battling for control
              of the Metaverse
            </p>
          </Col>
        </Row>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque at
          nobis alias.
        </h1>
      </div>
    </Container>
  );
};

export default ChooseNft;
