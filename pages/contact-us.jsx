import React, { useState } from "react";
import Head from "next/head";
import { phoneNumber, contactEmail } from "@/constant/headerConstant";
import { sendMail } from "@/service/api";
import Breadcrumb from "./components/shared/Breadcrumb";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",

    
  });

  const [isaccep, setIsaccept] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const handleVerify = (response) => {
    setIsVerified(true); 
};

  const handleChange = (e) => {
    setMessage("");
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlecheckbox = (e) => {
    const { checked } = e.target;
    setIsaccept(checked)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setMessage("Name is required.");
      setIsError(true);
      return;
    }

  

    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      setMessage("Invalid email address.");
      setIsError(true);
      return;
    }

    try {
      const mailBody = {
        contactForm: formData,
        type: "contact",
      };
      const response = await sendMail(mailBody);
      if (!response?.status) {
        setMessage("Failed to send message. Please try again.");
        setIsError(true);
        return;
      }
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setMessage(
        "Thank you for reaching out. We will be in touch with you shortly."
      );
      setIsError(false);
    } catch (error) {
      setMessage("Failed to send message. Please try again.");
      setIsError(true);
    }
  };

  return (
    <>
      <Head> 
        <title>{"Contacta con nosotras"}</title>
      </Head>
      <Breadcrumb title={"Contacta con nosotras"} />
      <div className="container-xl inner-page">
        <div className="col-sm-12">  
          
         
          <div className="row mt-4">

          <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 cont-right">
              <ul>
                <li>
                  <div className="cont-icon">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </div>
                  <div className="cont-text">
                    <h6>Ubicación de la compañía</h6>
                     <p>30 N Gould St STE ST R, Sheridan, WY 82801, United States</p>
                  </div>
                </li>
                <li>
                  <div className="cont-icon">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <div className="cont-text">
                    <h6>Número de contacto</h6>
                    <p className="mb-0">
                      <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="cont-icon">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="cont-text">
                    <h6>Identificación de correo</h6>
                    <p className="mb-0">
                      <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 cont-left mb-5">
              <h5>Contacta con nosotras</h5>
              <form className="row g-3 mt-3" onSubmit={handleSubmit}>
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Su nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Tu correo electrónico"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Su teléfono"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sujeta"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Tu mensaje"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-md-12">
                <input type="checkbox" onChange={handlecheckbox} /> 
                <span> You agree to receive automated Transaction messages . Terms and Privacy Policy can be found at <a href="https://act-on.com/wp-content/uploads/2023/11/Act-On_Privacy_Policy_NOV2023.pdf">act-on.com/privacy-policy/</a>. You may receive up to 5 msg/mo. Txt and data rates may apply . Reply STOP to end or HELP fo help.</span>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary" disabled={!isaccep}>
                  Entregar
                  </button>
                </div>
                <div
                  className={`col-12 text-${isError ? "danger" : "success"}`}
                >
                  {message}
                </div>
              </form>
            </div>

            
          

            
          </div>
        </div>
      </div>

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.167704831204!2d-106.95752532392379!3d44.79777077107087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a655555%3A0x3265c73ab4e065e!2s30%20N%20Gould%20St%20STE%20ST%20R%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2sin!4v1707224815874!5m2!1sen!2sin" style={{width:'100%', height:'400px'}}></iframe> */}



    </>
  );
};

export default Contact;
