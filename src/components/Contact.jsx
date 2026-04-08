import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="Contact" className="scroll-smooth relative py-12 px-6 md:px-12 lg:px-20 bg-neutral-100 text-black overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent blur-3xl"></div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-[gold]" />
            <span className="text-[gold] font-semibold text-sm uppercase tracking-wider">
              CONTACT
            </span>
          </div>
        <h2 className="text-4xl md:text-5xl font-bold">
          Get In <span className="text-amber-500">Touch</span>
        </h2>
        <p className="text-neutral-400 mt-4 max-w-xl mx-auto">
          Have questions or want to work with us? Reach out — we’d love to hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-10 relative z-10">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="bg-amber-500 p-4 rounded-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Call Us</h4>
              <p className="text-neutral-400">+234 912 717 0775</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-amber-500 p-4 rounded-xl">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-neutral-400">styleyourself@gmail.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="bg-amber-500 p-4 rounded-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Location</h4>
              <p className="text-neutral-400">G.O Plaza Opposite Light Gold Estate phase 3 Lugbe <br/> Abuja, Nigeria.</p>
            </div>
          </div>

        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl shadow-2xl space-y-6"
        >

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded-lg bg-black/1 border border-white/10 focus:outline-none focus:border-amber-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg bg-black/1 border border-white/10 focus:outline-none focus:border-amber-500"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded-lg bg-black/1 border border-white/10 focus:outline-none focus:border-amber-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message..."
            className="w-full p-3 rounded-lg bg-black/1 border border-white/10 focus:outline-none focus:border-amber-500 resize-none overflow-hidden"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-amber-500 py-3 rounded-xl font-semibold hover:bg-amber-600 transition-all duration-300 hover:shadow-lg"
          >
            Send Message 🚀
          </button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;