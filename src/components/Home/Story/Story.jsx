import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Story = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center w-100">
        <Col md={10}>
          <div id="the-story" class="page-content">
            <Row>
              <Col>
                <h2>The Story</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  The year is 2084 and the universe as we know it is over. The
                  largest civilizations live within the metaverse now but there
                  is a high level of threat to humans in this space, however,
                  there is a band of heroes who emerged from all corners of the
                  metaverse to protect and safeguard the human race as they
                  transition. Due to their resemblance to Earth primate species,
                  the humans dubbed them Ape Heroes.
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Story;
