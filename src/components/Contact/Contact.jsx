import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setNotDone(false);
  };

  const resetForm = () => {
    form.current.reset();
    setFormData({});
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_PUBLIC_SERVICE,
          process.env.REACT_APP_PUBLIC_TEMPLATE,
          form.current,
          process.env.REACT_APP_PUBLIC_API
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            resetForm(); // Reset the form after successful submission
            setTimeout(() => {
              setDone(false); // Hide the success message after 5 seconds
            }, 5000);
          },
          (error) => {
            console.log(error.text);
            // Handle error and provide feedback to the user
          }
        );
    }
  };

  return (
    <Container style={{ paddingTop: "50px" }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Email"
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              onChange={handleChange}
            />
            <span className="not-done">
              {notDone && "Please, fill all the input fields"}
            </span>
            <Button
              style={{
                letterSpacing: "1px",
              }}
              type="submit"
              className="button"
            >
              Send
            </Button>
            <span className="done">
              {done && "Thanks for contacting me! Message sent successfully."}
            </span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
