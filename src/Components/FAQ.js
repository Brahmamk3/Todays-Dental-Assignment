import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "What are your clinic hours?",
    answer: "We are open from 9 AM to 7 PM, Monday to Saturday.",
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept all major dental insurance plans.",
  },
  {
    question: "How can I book an appointment?",
    answer: "You can call us or fill out the contact form on the Contact Us page.",
  },
  {
    question: "What safety measures are in place due to COVID-19?",
    answer:
      "We follow CDC guidelines, including sanitizing equipment and social distancing in the clinic.",
  },
  {
    question: "Do you offer emergency dental services?",
    answer:
      "Yes, we provide emergency dental care. Please call us immediately if you have an urgent issue.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              {faq.question}
              <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className="faq-answer"
              style={{
                maxHeight: openIndex === index ? "200px" : "0",
                padding: openIndex === index ? "0.5rem 1rem" : "0 1rem",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
