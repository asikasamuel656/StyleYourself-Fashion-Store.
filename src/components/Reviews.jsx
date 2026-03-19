import { useState } from "react";
import img4 from "../assets/img4.jpg";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

// ✅ Proper testimonials array (not a single object)
const testimonials = [
  {
    id: 1,
    name: "James Colonel",
    image: img4, // ✅ correct usage
    content: "This boutique has amazing quality products. I love everything I bought!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    image: img4,
    content: "Fast delivery and beautiful styles. Highly recommend!",
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Lee",
    image: img4,
    content: "Great customer service and premium fashion items.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-neutral-50 overflow-hidden py-12">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600">
            Real feedback from our happy customers.
          </p>
        </motion.div>

        {/* Active testimonial display */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg text-center"
        >
          <FaQuoteLeft className="text-2xl text-gray-400 mx-auto mb-4" />

          <p className="text-gray-700 mb-6">
            {testimonials[activeIndex].content}
          </p>

          <img
            src={testimonials[activeIndex].image}
            alt={testimonials[activeIndex].name}
            className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
          />

          <h3 className="font-semibold">
            {testimonials[activeIndex].name}
          </h3>

          {/* Stars */}
          <div className="flex justify-center mt-2">
            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          </div>
        </motion.div>

        {/* Grid selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveIndex(index)}
              className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                index === activeIndex
                  ? "bg-white shadow-lg ring-2 ring-amber-500"
                  : "bg-white/50 hover:bg-white hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>

                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-sm" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-3 line-clamp-2">
                {testimonial.content}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;