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

    // Validation logic
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    let errors: any = {};

    if (!formData.name || !nameRegex.test(formData.name)) {
      errors.name =
        "Please enter a valid name (only letters and spaces are allowed).";
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      errors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({}); // Clear errors if no validation issues

    // EmailJS Integration
    const serviceID = "service_eixwsmc";
    const templateID = "template_maviiwl";
    const publicKey = "l-LNLQ8AnmQf9580E";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 pt-5 hero-bg relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-2xl font-bold text-center text-gradient mb-12">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 max-w-4xl mx-auto">
          {/* Contact Information Section */}
          <div className="section-3d p-6 flex justify-center items-center sm:p-4 bg-white rounded-lg shadow-md">
            <div className="text-center ">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                Contact Information
              </h3>
              {/* <div className="mb-4 relative w-32 h-32 sm:w-24 sm:h-24 mx-auto overflow-hidden rounded-full border-2 border-white shadow-xl">
                <img
                  src="/profile.jpg"
                  alt="Aditya Gupta"
                  className="w-full h-full object-cover"
                />
              </div> */}
              <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-white shadow-xl dark:border-primary/20 dark:shadow-glow">
                <img
                  src="/profile.webp"
                  alt="Aditya Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="space-y-4 ">
                <div className="flex items-center justify-center space-x-3 bg-white rounded-lg shadow-lg p-2 flex items-start shadow-xl dark:bg-dark-lighter dark:border dark:border-dark-accent/30">
                  <Mail className="text-secondary" size={20} />
                  <a
                    href="mailto:adityagupta2253@gmail.com"
                    className="text-dark hover:text-primary font-semibold transition-colors dark:text-gray-400 hover:text-primary"
                    // bg-white rounded-lg shadow-lg p-2 flex items-start shadow-xl dark:bg-dark-lighter dark:border dark:border-dark-accent/30
                  >
                    adityagupta2253@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white rounded-lg shadow-lg p-2 flex items-start shadow-xl dark:bg-dark-lighter dark:border dark:border-dark-accent/30">
                  <Phone className="text-secondary" size={20} />
                  <a
                    href="tel:08299547156"
                    className="text-dark font-semibold hover:text-primary transition-colors dark:text-gray-400"
                  >
                    +91 8299547156
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white rounded-lg shadow-lg p-2 flex items-start shadow-xl dark:bg-dark-lighter dark:border dark:border-dark-accent/30">
                  <MapPin className="text-secondary" size={20} />
                  <span className="text-dark font-semibold text-center dark:text-gray-400">
                    Sector-51, Noida, India
                  </span>
                </div>
              </div> */}
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3 bg-white rounded-lg shadow-lg p-2 flex items-start shadow-xl dark:bg-dark-lighter dark:border dark:border-dark-accent/30">
                  <Mail className="text-secondary" size={20} />
                  <a
                    href="mailto:adityagupta2253@gmail.com"
                    className="text-dark font-semibold transition-colors 
                 hover:text-primary 
                 dark:text-gray-400 dark:hover:text-navyblue"
                  >
                    adityagupta2253@gmail.com
                  </a>
                </div>

                <div className="flex items-center justify-center space-x-3 bg-white rounded-lg shadow-lg p-2 flex items-start shadow-xl dark:bg-dark-lighter dark:border dark:border-dark-accent/30">
                  <Phone className="text-secondary" size={20} />
                  <a
                    href="tel:08299547156"
                    className="text-dark font-semibold transition-colors 
                 hover:text-primary 
                 dark:text-gray-400 dark:hover:text-navyblue"
                  >
                    +91 8299547156
                  </a>
                </div>

                <div className="flex items-center justify-center space-x-3 bg-white rounded-lg shadow-lg p-2 flex items-start shadow-xl dark:bg-dark-lighter dark:border dark:border-dark-accent/30">
                  <MapPin className="text-secondary" size={20} />
                  <span className="text-dark font-semibold text-center dark:text-gray-400">
                    Sector-51, Noida, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="section-3d p-6 sm:p-4 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className={`input-3d ${
                    formErrors.name ? "border-red-500" : ""
                  }`}
                  required
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                )}
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
                  className={`input-3d ${
                    formErrors.email ? "border-red-500" : ""
                  }`}
                  required
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.email}
                  </p>
                )}
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
                  className={`input-3d ${
                    formErrors.phone ? "border-red-500" : ""
                  }`}
                  required
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.phone}
                  </p>
                )}
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
              <button
                type="submit"
                className=" py-4 border-2 flex justify-center items-center border-midnight-300 text-prmary-600 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white transition-all duration-300 dark:border-primary/50 dark:text-white dark:hover:border-primary dark:hover:shadow-glow rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center w-full"
              >
                Contact Me
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
