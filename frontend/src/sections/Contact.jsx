import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alertType, setAlertType] = useState("SUCCESS");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);
    try {
      console.log("Form Submitted:", formData);
      await emailjs.send(
        "service_485dpmx",
        "template_zcfffqy",
        {
          from_name: formData.name,
          to_name: "Nithesh",
          from_email: formData.email,
          to_email: "nitheshu944@gmail.com",
          message: formData.message,
        },
        "FJL-_CeV4e19oWGHi"
      );
      setisLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", " Your Message has been Sent");
    } catch (error) {
      setisLoading(false);
      console.log(error);
      showAlertMessage("danger", " Something Went Wrong");
    }

    //
    //
  };
  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">LET'S TALK</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to Life, I'm Here to Help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5 ">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="field-input field-input-focus"
              placeholder="Your Name"
              autoComplete="name"
              required
            />
          </div>
          <div className="mb-5 ">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="field-input field-input-focus"
              placeholder="yourname@gmail.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-5 ">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              rows="4"
              onChange={handleChange}
              value={formData.message}
              className="field-input field-input-focus"
              placeholder="Share Your Thoughts...."
              autoComplete="message"
              required
            />
          </div>
          <button className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-blue-500 to-blue-800  hover-animation">
            {!isLoading ? "SEND" : "SENDING...."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
