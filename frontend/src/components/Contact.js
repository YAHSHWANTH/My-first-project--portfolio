import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); // ✅ track button state
  const [notification, setNotification] = useState(null); // ✅ popup message

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_jfhnbsc", // ✅ Your Service ID
        "template_0i2rour", // ✅ Replace with Template ID
        form.current,
        "tmcmXVH6i8XhmMsnu" // ✅ Public Key
      )
      .then(
        () => {
          setLoading(false);
          form.current.reset(); // ✅ clear inputs
          setNotification({ type: "success", msg: "Message sent successfully ✅" });
          setTimeout(() => setNotification(null), 3000); // auto-hide
        },
        (error) => {
          setLoading(false);
          setNotification({ type: "error", msg: "Failed to send ❌: " + error.text });
          setTimeout(() => setNotification(null), 3000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      {/* ✅ Toast Notification */}
      {notification && (
        <div
          className={`fixed top-5 right-5 px-4 py-2 rounded-lg shadow-lg z-[9999] transition-transform transform 
          ${notification.type === "success" ? "bg-green-500" : "bg-red-500"} text-white animate-slide-in`}
        >
          {notification.msg}
        </div>
      )}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Lets connect...</h2>
          <p className="text-gray-600 mb-4">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>

          <div className="space-y-4">
            <p><strong>Email:</strong> yaswanthbv2003@gmail.com</p>
            <p><strong>Phone:</strong> 8179303017</p>
            <p><strong>Location:</strong> Tirupati, Andhra Pradesh, India</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-6 rounded-lg shadow-md space-y-4"
        >
          <input type="text" name="from_name" placeholder="Your Name" required className="w-full p-3 border rounded" />
          <input type="email" name="from_email" placeholder="Your Email" required className="w-full p-3 border rounded" />
          <textarea name="message" placeholder="Your Message" required className="w-full p-3 border rounded h-32"></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg transition text-white ${
              loading ? "bg-purple-400 cursor-not-allowed" : "bg-purple-500 hover:bg-purple-600"
            }`}
          >
            {loading ? "Sending..." : "Send Message ✈️"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
