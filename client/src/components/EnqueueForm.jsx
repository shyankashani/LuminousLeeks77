import React from 'react';
import { Navbar, Grid, Row, Col, Button, ButtonGroup } from 'react-bootstrap';

export const EnqueueForm = (props) => {
  return (
    <Navbar fixedBottom={true}>
      <Grid>
        <Row>
          <Col xs={12} className="center">
            <h6>Party size</h6>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Button>-</Button>
          </Col>
          <Col xs={8} className="center">
            <div className="number">1</div>
          </Col>
          <Col xs={2}>
            <Button>+</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button block={true}>Enqueue</Button>
          </Col>
        </Row>
      </Grid>
    </Navbar>
  );
};