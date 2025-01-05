import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // Simple validation checks
    const nameRegex = /^[a-zA-Z\s]+$/; // Only alphabets and spaces
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    const phoneRegex = /^\d{10}$/; // Exactly 10 digits
  
    if (!formData.name || !nameRegex.test(formData.name)) {
      alert("Please enter a valid name (only letters and spaces are allowed).");
      return;
    }
  
    if (!formData.email || !emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with your EmailJS credentials
    const serviceID = "service_eixwsmc";
    const templateID = "template_maviiwl";
    const publicKey = "l-LNLQ8AnmQf9580E";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send the message. Please try again.");
        }
      );
  };


  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   window.location.href = `mailto:adityagupta2253@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0APhone: ${formData.phone}`;
  // };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 pt-5 hero-bg relative overflow-hidden">
      <div className="container mx-auto px-6 ">
        <h2 className="text-3xl font-bold text-center text-gradient mb-12 ">
          Get in Touch
        </h2>

        {/* <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto ">
          <div className="section-3d p-8">
            <h3 className="text-xl font-semibold mb-6 text-primary">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center group">
                <Mail className="text-secondary group-hover:text-primary mr-3 transition-colors" size={20} />
                <a href="mailto:adityagupta2253@gmail.com" 
                   className="text-dark hover:text-primary transition-colors">
                  adityagupta2253@gmail.com
                </a>
              </div>
              
              <div className="flex items-center group">
                <Phone className="text-secondary group-hover:text-primary mr-3 transition-colors" size={20} />
                <a href="tel:08299547156" 
                   className="text-dark hover:text-primary transition-colors">
                  +91 8299547156
                </a>
              </div>
              
              <div className="flex items-center group">
                <MapPin className="text-secondary group-hover:text-primary mr-3 transition-colors" size={20} />
                <span className="text-dark">Sector-51, Noida, India</span>
              </div>
              
            </div>
          </div>

          <div className="section-3d p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-3d"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-3d"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-3d"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="input-3d"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-3d w-full">
                Contact Me
              </button>
            </form>
          </div>
        </div> */}

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information Section */}
          <div className="section-3d p-8 flex items-center justify-center h-full bg-white rounded-lg shadow-md">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary text-center">
                Contact Information
              </h3>
              <div className="mb-4 relative w-48 h-48 mx-auto overflow-hidden rounded-full border-2 border-white shadow-xl">
                <img 
                  src="/profile.jpg"
                  alt="Aditya Gupta"
                  className="w-full h-full object-cover font-semibold"
                />
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-center group rounded-lg shadow-lg p-6 flex items-start shadow-xl dark:bg-dark-lighter dark:border dark:border-dark-accent/30">
                  <Mail
                    className="text-secondary group-hover:text-primary mr-3 transition-colors"
                    size={20}
                  />
                  <a
                    href="mailto:adityagupta2253@gmail.com"
                    className="text-dark hover:text-primary transition-colors font-semibold"
                  >
                    adityagupta2253@gmail.com
                  </a>
                </div>

                <div className="flex items-center justify-center group rounded-lg shadow-lg p-6 flex items-start shadow-xl dark:bg-dark-lighter dark:border dark:border-dark-accent/30">
                  <Phone
                    className="text-secondary group-hover:text-primary mr-3 transition-colors"
                    size={20}
                  />
                  <a
                    href="tel:08299547156"
                    className="text-dark font-semibold hover:text-primary transition-colors "
                  >
                    +91 8299547156
                  </a>
                </div>

                <div className="flex items-center justify-center group rounded-lg shadow-lg p-6 flex items-start shadow-xl dark:bg-dark-lighter dark:border dark:border-dark-accent/30">
                  <MapPin
                    className="text-secondary group-hover:text-primary mr-3 transition-colors"
                    size={20}
                  />
                  <span className="text-dark font-semibold">Sector-51, Noida, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="section-3d p-8 flex items-center justify-center h-full bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark mb-2 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-3d"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark mb-2 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-3d"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-dark mb-2 dark:text-gray-300"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-3d"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark mb-2 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="input-3d"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-3d w-full">
                Contact Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
};

export default Contact;