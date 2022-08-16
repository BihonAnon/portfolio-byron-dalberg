import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  // create hook to store values of three fields
  const [state, setState] = useState({
    name: "",
    email: "",
    text: "",
  });

  // create hook to store className values based on validation
  const [validationName, setValidationName] = useState("");
  const [validationEmail, setValidationEmail] = useState("");
  const [validationText, setValidationText] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);

  // a function that validates if field has been left empty
  const validateEmpty = (field) => {
    // validation for name field
    if (field === "name") {
      const enteredName = state.name.trim();
      if (enteredName.length === 0) {
        console.log("empty name");
        setValidationName("is-invalid");
      } else {
        setValidationName("");
      }
    }

    // validation for email field
    if (field === "email") {
      const enteredEmail = state.email.trim();
      const isValidEmail = /\S+@\S+\.\S+/.test(enteredEmail);
      console.log(isValidEmail, "wwww");
      if (!isValidEmail) {
        setInvalidEmail(true);
      } else {
        setInvalidEmail(false);
      }
      if (enteredEmail.length === 0) {
        console.log("empty email");
        setValidationEmail("is-invalid");
      } else {
        setValidationEmail("");
      }
    }

    // validation for text field
    if (field === "text") {
      const enteredText = state.text.trim();
      if (enteredText.length === 0) {
        console.log("empty text");
        setValidationText("is-invalid");
      } else {
        setValidationText("");
      }
    }
  };

  // render component
  return (
    <>
    <Header />
    <div className="d-flex justify-content-center my-5">
      <Card className="my-5 w-50 d-flex justify-content-center">
        <Card.Header className="text-center">Contact Me</Card.Header>
        <Form className="d-flex flex-column justify-items-center">
          <Form.Group className="mb-3 mt-3 mx-2" controlId="formBasicEmail">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              className={validationName}
              onChange={(e) => setState({ ...state, name: e.target.value })}
              onBlur={() => validateEmpty("name")}
              type="text"
              placeholder="Enter Name"
              value={state.name}
            />
            <div className="invalid-feedback">Please enter your name.</div>
          </Form.Group>
          <Form.Group className="mb-3 mx-2" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              className={validationEmail}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              onBlur={() => validateEmpty("email")}
              type="text"
              placeholder="Enter email"
            />
            <div className="invalid-feedback">Please enter your email.</div>
            {invalidEmail && state.email.length !== 0 && (
              <div className="invalid-email text-danger">
                Please enter valid email.
              </div>
            )}
          </Form.Group>

          <Form.Group className="mb-3 mx-2" controlId="formBasicPassword">
            <Form.Label>Message:</Form.Label>
            <Form.Control
              className={validationText}
              onChange={(e) => setState({ ...state, text: e.target.value })}
              onBlur={() => validateEmpty("text")}
              as="textarea"
              placeholder="Enter Message"
              rows="3"
            />
            <div className="invalid-feedback">Please enter your message.</div>
          </Form.Group>
          <div className="d-flex justify-content-center mb-3">
            <Button variant="primary" style={{ width: "80px" }} type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </div>
    <Footer />
    </>
  );
}

// export component
export default Contact;