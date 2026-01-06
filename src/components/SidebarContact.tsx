import { useState } from "react";
import "./SidebarContact.css";

const SidebarContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`sidebar-contact ${open ? "active" : ""}`}>
      <div className="toggle" onClick={() => setOpen(!open)}>
        <h6>
          <i className="fa fa-phone"></i> Contact Us
        </h6>
      </div>

      <h2>Contact Us</h2>

      <input placeholder="Name" />
      <input placeholder="Phone" />
      <textarea placeholder="Message here.." />

      <button className="contact-btn">Send</button>
    </div>
  );
};

export default SidebarContact;
