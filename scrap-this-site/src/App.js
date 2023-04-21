import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [url, setUrl] = useState("");
  const [urlValid, setUrlValid] = useState(true);
  const [uploadToS3, setUploadToS3] = useState(false);
  const [bucketName, setBucketName] = useState("");
  const [accessId, setAccessId] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [bucketValid, setBucketValid] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate URL and check if the website is up
    // ...

    // Validate bucket if uploadToS3 is true
    // ...

    // Send data to the back-end
    // ...
  };

  const handleCheckboxChange = (e) => {
    setUploadToS3(e.target.checked);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center my-4">Scrap this Site</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="url">
              <Form.Label>URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                isInvalid={!urlValid}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid URL.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="uploadToS3">
              <Form.Check
                type="checkbox"
                label="Do you want to upload to AWS S3 instead of downloading?"
                onChange={handleCheckboxChange}
              />
            </Form.Group>
            {uploadToS3 && (
              <>
                <Form.Group controlId="bucketName">
                  <Form.Label>Bucket Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter bucket name"
                    value={bucketName}
                    onChange={(e) => setBucketName(e.target.value)}
                    isInvalid={!bucketValid}
                  />
                  <Form.Control.Feedback type="invalid">
                    Bucket not reachable.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="accessId">
                  <Form.Label>AWS Access ID</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter AWS Access ID"
                    value={accessId}
                    onChange={(e) => setAccessId(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="secretKey">
                  <Form.Label>AWS Secret Key</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter AWS Secret Key"
                    value={secretKey}
                    onChange={(e) => setSecretKey(e.target.value)}
                  />
                </Form.Group>
              </>
            )}
            <Button type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
