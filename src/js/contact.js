import React from "react";
import "../style/contact.css";

const contacts = [
  {
    icon: (
      <img src="/img/map.png" alt="Phone Call Icon" width={32} height={32} />
    ),
    title: "North Signal Branch",
    desc: "3-i 9th Avenue , Taguig, Philippines, 1630"
  },
  {
    icon: (
      <img src="/img/phone-call.png" alt="Phone Call Icon" width={32} height={32} />
    ),
    title: "Call or Text",
    desc: "09062226680"
  },
  {
    icon: (
      <img src="/img/communication.png" alt="Phone Call Icon" width={32} height={32} />
    ),
    title: "Email Us",
    desc: "kjcbikeshop@gmail.com"
  },
  {
    icon: (
      <img src="/img/Facebook.png" alt="Phone Call Icon" width={32} height={32} />
    ),
    title: "Social Network",
    desc: "@kjcbikeshop"
  }
];

function Contact() {
  return (
    <div className="contact-bg">
      <div className="contact-content">
        <h1 className="contact-title">Connect With Us</h1>
        <h2 className="contact-subtitle">Visit Our Innovation Hub</h2>
        <div className="contact-grid">
          {contacts.map((item, idx) => (
            <div className="contact-card" key={idx}>
              <div className="contact-card-icon">{item.icon}</div>
              <div className="contact-card-title">{item.title}</div>
              <div className="contact-card-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;