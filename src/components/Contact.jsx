import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess("");

  // VALIDATION
  if (!name.trim()) {
    setError("Please enter your name");
    return;
  }

  if (!email.trim()) {
    setError("Please enter your email");
    return;
  }

  if (!email.includes("@")) {
    setError("Please include @ in email");
    return;
  }

  if (!message.trim()) {
    setError("Please enter a message");
    return;
  }

  try {
    const res = await fetch("https://formspree.io/f/xkgdajqq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (res.ok) {
      setSuccess("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setError("Failed to send message.");
    }
  } catch (err) {
    setError("Network error. Try again later.");
  }
};


  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      <p className="contact-description">
        I'm always open to exciting new opportunities and collaborations.
        I'm actively seeking roles and would love to contribute to impactful projects.
        Feel free to reach out — I'm available to start immediately!
      </p>

      {/* Contact Cards */}
      <div className="contact-cards">

        {/* EMAIL */}
        <a href="mailto:gbhuvaneshwarireddy123@gmail.com" className="card hover-blue">
          <div className="icon">
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path d="M2 4h20v16H2V4zm10 8L2 6v12h20V6l-10 6z" />
            </svg>
          </div>
          <div className="card-text">
            <h3>EMAIL</h3>
            <p>gbhuvaneshwarireddy123@gmail.com</p>
          </div>
        </a>

        {/* PHONE */}
        /*<a href="tel:+91 9391286255" className="card hover-blue">
          <div className="icon">
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path d="M6.6 2l2 4-2 1c1 2 3 4 5 5l1-2 4 2-1 3c-1 2-5 2-9-2S1 7 3 4l3-2z" />
            </svg>
          </div>
          <div className="card-text">
            <h3>PHONE</h3>
            <p>+91 9391****55</p>
          </div>
        </a>*/

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/bhuvaneshwari-gotouri-3a6a9a224"
          target="_blank"
          rel="noopener noreferrer"
          className="card hover-blue"
        >
          <div className="icon">
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path d="M4 3a2 2 0 110 4 2 2 0 010-4zm1 5H3v12h2V8zm4 0H7v12h2v-6c0-3 4-3 4 0v6h2v-7c0-6-6-5.5-6 0V8z" />
            </svg>
          </div>
          <div className="card-text">
            <h3>LINKEDIN</h3>
            <p>Bhuvaneshwari-Gotouri</p>
          </div>
        </a>
      </div>

      {/* Contact Form */}
      <div className="contact-form">

        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
        {success && <p style={{ color: "green", marginBottom: "10px" }}>{success}</p>}

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={handleSubmit}>Send Message</button>
      </div>
    </section>
  );
};

export default Contact;
