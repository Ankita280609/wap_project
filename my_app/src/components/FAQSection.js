import React, { useState } from "react";

const FAQS = [
  {
    question: "How do I purchase a product?",
    answer: "Browse our products, add them to your cart, and proceed to checkout. You can pay securely with your preferred payment method."
  },
  {
    question: "What is the duration of the service?",
    answer: "Service durations vary by product. You can check the details on each product page or in your order confirmation email."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Absolutely! We offer a 30-day money-back guarantee on all purchases. Please refer to our refund policy for more information."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach us anytime at support@revuva.com or via the Contact page on our site."
  }
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const handleToggle = idx => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section className="faq-section">
    <h2>Frequently Asked Questions</h2>
    <div className="faq-list">
      {FAQS.map((faq, idx) => (
        <details key={idx} className="faq-item">
          <summary className="faq-question">{faq.question}</summary>
          <div className="faq-answer">{faq.answer}</div>
        </details>
      ))}
    </div>
  </section>
  );
};

export default FAQSection;