import React, { useState } from "react";
import "./Css/Contact.css";

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="contact-page">
      <form
        className="form-container"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="form-element">
          <h3 className="form-h3">Her zaman bir mesaj otenizdeyiz</h3>
        </div>
        <div className="form-element">
          <input
            className="input-field"
            type="text"
            placeholder="Your name"
            name="name"
            required
          />
        </div>
        <div className="form-element">
          <input
            className="input-field"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>
        <div className="form-element">
          <textarea
            className="input-field"
            placeholder="Your message"
            name="message"
            required
          />
        </div>
        <div className="form-element">
          <button className="submit-button" type="submit">
            {" "}
            Send a message{" "}
          </button>
        </div>
      </form>
      <div className="map-container">
        <iframe
          title="Google Map"
          width="400"
          height="300"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=
          &q=Space+Needle,Seattle+WA`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
