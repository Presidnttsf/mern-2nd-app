import React from 'react';
import data from "../../../../../data/0123-Homeo-patient.json";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Loading from "../../components/Loading";

function HomeoPatient() {
  console.log(data[0]["Sr. No."]); // Debugging to check the first entry

  return (
    <Container>
      <h1 className="text-center my-4">HomeoPatient</h1>
      <Row>
        {data ? data.map(({ ["Sr. No."]: ID, NAME, SYMPTOMS, MEDICINE, DATE }, index) => (
          <Col key={index} md={4} className="mb-4"> {/* Ensures 3 cards per row */}
            <Card style={{ width: '100%' }}> {/* Full width within column */}
              <Card.Img variant="top" src="https://picsum.photos/200/150" />
              <Card.Body>
                <Card.Title>Patient: {ID}</Card.Title>
                <Card.Text>
                  <p><strong>Name:</strong> {NAME}</p>
                  <p><strong>Symptoms:</strong> {SYMPTOMS}</p>
                  <p><strong>Medicine:</strong> {MEDICINE}</p>
                  <p><strong>Date:</strong> {DATE}</p>
                </Card.Text>
                <Button variant="primary">View Profile</Button>
              </Card.Body>
            </Card>
          </Col>
        )): <Loading/>}
      </Row>
    </Container>
  );
}

export default HomeoPatient;
