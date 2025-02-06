import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Error sending message.");
    }
  };

  return (
    <section id="contact" className="w-full max-w-containerSmall flex justify-center py-12 px-6 md:px-12 scroll-mt-20">
      <div className="max-w-3xl w-full bg-lightColor p-8 rounded-lg">
        {/* Contact Title */}
        <h2 className="text-xl md:text-2xl font-semibold font-titleFont mb-10 text-center text-textBrown">CONTACT US</h2>

        {/* Email Address Styled */}
        <p className="text-center text-lg uppercase font-bodyFont tracking-wide text-textBrown py-4 mb-4">
          ORDERS.CUBABAKERY@GMAIL.COM
        </p>

        {/* Subtext */}
        <p className="text-center text-md font-bodyFont text-textBrown mt-1">Message me for any and all inquiries!</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {/* Name & Email Fields */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label className="block text-sm font-bodyFont font-semibold text-textBrown">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b font-bodyFont border-textBrown outline-none focus:border-textBrown transition-all"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-bodyFont font-semibold text-textBrown">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b font-bodyFont border-textBrown outline-none focus:border-textBrown transition-all"
              />
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm font-semibold font-bodyFont text-textBrown">Message</label>
            <textarea
              name="message"
              required
              rows={3}
              placeholder="Type your message here"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b font-bodyFont placeholder-gray-500 placeholder-opacity-60 placeholder:font-bodyFont border-textBrown outline-none focus:border-textBrown transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-10 py-2 font-bodyFont bg-white text-textLight border-2 border-textBrown font-bold rounded-md 
              hover:bg-textLight hover:text-white hover:border-white transition"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Status Message */}
        {status && <p className="text-center text-sm mt-4 text-textBrown">{status}</p>}
      </div>
    </section>
  );
};

export default ContactForm;