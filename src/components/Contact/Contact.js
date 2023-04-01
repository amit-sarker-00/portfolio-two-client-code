import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o0szd6j",
        "template_vdk5eol",
        form.current,
        "3biY6c8Iq2XIuE5b-"
      )
      .then(
        (result) => {
          console.log(result);
          if (result.status === 200) {
            toast.success("Email sent Successfully. Thanks for contacting me");
            navigate("/");
          } else {
            toast.error("Something went wrong. Please try again");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="mt-10 md:mt-20 mb-20">
      <h1 className="border w-20 font-semibold text-center rounded-lg">
        Contact
      </h1>
      <div className="">
        <h1 className="text-3xl md:text-5xl xl:text-7xl mt-10 lg:mt-20">
          Let's Work <span className="text-blue-400">Together</span>!
        </h1>
        <h3 className="mt-8 lg:mt-16 text-3xl">amitsarker255@gmail.com</h3>
        <div className="w-3/4">
          <form ref={form} onSubmit={sendEmail} id="contact">
            <div className="mb-10 mt-10">
              <label>Name : </label>
              <input
                className="border-b bg-[#111827] w-3/4"
                type="text"
                placeholder="Enter Your Name"
                name="user_name"
              />
            </div>
            <div className="mb-10 mt-10">
              <label>Email : </label>
              <input
                className="border-b bg-[#111827] w-3/4"
                type="email"
                placeholder="Enter Your Email"
                name="user_email"
              />
            </div>
            <div className="mb-10 mt-10">
              <label>Message : </label>
              <textarea
                className="border-b bg-[#111827] w-3/4"
                name="message"
                placeholder="Write your Message"
              />
            </div>

            <div className=" mb-4">
              <button
                type="submit"
                className="border rounded-md px-2 py-1 bg-blue-200 font-semibold  text-gray-800"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
