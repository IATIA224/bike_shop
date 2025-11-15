import React from "react";
import "../style/contact.css";

const contacts = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="18" fill="url(#grad1)" />
        <circle cx="24" cy="24" r="7" fill="#ff3b7a" />
        <rect x="22" y="15" width="4" height="14" rx="2" fill="#fff" />
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00cfff" />
            <stop offset="100%" stopColor="#003b7a" />
          </radialGradient>
        </defs>
      </svg>
    ),
    title: "Innovation Hub",
    desc: "456 Tech Boulevard, Future City, FC 67890"
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="18" fill="url(#grad2)" />
        <path d="M24 32c4-2 8-6 8-10a8 8 0 1 0-16 0c0 4 4 8 8 10z" fill="#ff3b7a" />
        <defs>
          <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00cfff" />
            <stop offset="100%" stopColor="#003b7a" />
          </radialGradient>
        </defs>
      </svg>
    ),
    title: "Call Direct",
    desc: "(555) 456-VELO"
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="18" fill="url(#grad3)" />
        <rect x="16" y="20" width="16" height="12" rx="3" fill="#fff" />
        <rect x="16" y="20" width="16" height="4" rx="2" fill="#aaf0ff" />
        <defs>
          <radialGradient id="grad3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00cfff" />
            <stop offset="100%" stopColor="#003b7a" />
          </radialGradient>
        </defs>
      </svg>
    ),
    title: "Email Hub",
    desc: "hello@velohub.com"
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="18" fill="url(#grad4)" />
        <circle cx="24" cy="24" r="8" fill="#aaf0ff" />
        <path d="M24 18a6 6 0 0 1 6 6h-12a6 6 0 0 1 6-6z" fill="#00cfff" />
        <defs>
          <radialGradient id="grad4" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00cfff" />
            <stop offset="100%" stopColor="#003b7a" />
          </radialGradient>
        </defs>
      </svg>
    ),
    title: "Social Network",
    desc: "@VeloHubTech across all platforms"
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