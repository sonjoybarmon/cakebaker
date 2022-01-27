import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import classes from "./Features.module.scss";

const Features = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center w-100">
        <Col md={10}>
          <Row id="the-features" className={classes.features_wrapper}>
            <Col md={6}>
              <h3>
                <strong>💰</strong> 3% Marketplace Rewards
              </h3>
              <p>
                Ape Hero &amp; Villain holders will get 3% of all marketplace
                sales. More Apes means more rewards.
              </p>
            </Col>
            <Col md={6} className="">
              <h3>
                <strong className="feature-crown">👑</strong> Exclusive Access
                for Holders
              </h3>
              <p>
                Ape Holders get special access to giveaways, alphas, events,
                drops, etc.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
